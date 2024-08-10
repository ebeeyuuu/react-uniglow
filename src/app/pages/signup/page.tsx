"use client";

import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { FaCheckCircle } from 'react-icons/fa';
import RegisterLayout from '../../components/RegisterLayout';
import Loading from '../../components/Loading';
import { addDoc, collection, query, where, getDocs } from "firebase/firestore"; // Updated imports
import { db } from '@/firebaseConfig'; 
import { useUser } from '@/context/userContext'; // Import the useUser hook

interface PasswordCondition {
  description: string;
  isSatisfied: boolean;
}

const Page = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showConditions, setShowConditions] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [passwordConditions, setPasswordConditions] = useState<PasswordCondition[]>([]);
  const [satisfiedConditions, setSatisfiedConditions] = useState<boolean[]>([]);
  const router = useRouter();
  const { setUsername: setContextUsername, setAge: setContextAge, setGrade: setContextGrade, setEmail: setContextEmail } = useUser();

  useEffect(() => {
    // Example password conditions
    const conditions: PasswordCondition[] = [
      { description: 'At least 8 characters', isSatisfied: false },
      { description: 'Contains a number', isSatisfied: false },
      { description: 'Contains an uppercase letter', isSatisfied: false },
      { description: 'Contains a special character', isSatisfied: false },
    ];
    setPasswordConditions(conditions);
    setSatisfiedConditions(Array(conditions.length).fill(false));
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const conditions = [
      password.length >= 8,
      /\d/.test(password),
      /[A-Z]/.test(password),
      /[@#$%^&*(){}:"<>?_+]/.test(password),
    ];
    return conditions.every(condition => condition);
  };

  const validateUsername = (username: string) => {
    const usernameRegex = /^[a-zA-Z0-9_.]+$/;
    return usernameRegex.test(username);
  };

  const checkExistingEmail = async (email: string) => {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const checkExistingUsername = async (username: string) => {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false; // Flag to check if there are any validation errors

    if (!validateUsername(username)) {
        setUsernameError("Usernames can only have uppercase and lowercase letters, numbers, and underscores.");
        hasError = true;
    } else {
        const usernameExists = await checkExistingUsername(username);
      if (usernameExists) {
        setUsernameError("An account already exists with this username. Please choose a different one.");
        hasError = true;
      } else {
        setUsernameError('');
      }
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      hasError = true;
    } else {
      const emailExists = await checkExistingEmail(email);
      if (emailExists) {
          setEmailError("An account already exists with this email. Please use a different one.");
          hasError = true;
      } else {
          setEmailError('');
      }
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must meet the specified conditions');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) {
      return; // If there's any error, don't proceed further
    }

    try {
      const docRef = await addDoc(collection(db, "users"), {
          username,
          age,
          grade,
          email,
          password,
      });

      setContextUsername(username);
      setContextAge(parseInt(age));
      setContextGrade(parseInt(grade));
      setContextEmail(email);

      router.push('/pages/main');
    } catch (error) {
      return
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseInt(value) <= 130) setAge(value);
  };
  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseInt(value) <= 12) setGrade(value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    setIsPasswordTouched(true);

    // Check password conditions
    const updatedConditions = passwordConditions.map(condition => {
      if (condition.description === 'At least 8 characters') {
        condition.isSatisfied = value.length >= 8;
      } else if (condition.description === 'Contains a number') {
        condition.isSatisfied = /\d/.test(value);
      } else if (condition.description === 'Contains an uppercase letter') {
        condition.isSatisfied = /[A-Z]/.test(value);
      } else if (condition.description === 'Contains a special character') {
        condition.isSatisfied = /[@#$%^&*(){}:"<>?_+]/.test(value);
      }
      return condition;
    });

    setPasswordConditions(updatedConditions);
    setSatisfiedConditions(updatedConditions.map(cond => cond.isSatisfied));
  };

  return (
    <Suspense fallback={<Loading />}>
      <RegisterLayout>
        <div className="flex flex-col mx-auto justify-center items-center gap-y-7 w-full md:w-1/2 h-full p-4">
          <div className="text-4xl">Sign Up</div>
          <form onSubmit={handleSubmit} className="w-[45vw] max-w-[400px] min-w-[300px] mb-10 flex flex-col gap-y-4">
            <div className="relative">
              <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] mt-[20px] w-full font-medium bg-black ${usernameError ? 'mb-0' : 'mb-[-16px]'}`}
                required
              />
              <div className="text-[#ff850a] text-base text-center mt-4">
                {usernameError}
              </div>
            </div>
            <div className="flex flex-row gap-x-4 w-full">
              <input 
                type="number"
                placeholder="Age"
                value={age}
                onChange={handleAgeChange}
                className="input-field px-4 py-2 border-white border-2 rounded-[10px] w-1/2 h-[45px] font-medium bg-black"
                required
              />
              <input 
                type="number"
                placeholder="Grade"
                value={grade}
                onChange={handleGradeChange}
                className="input-field px-4 py-2 border-white border-2 rounded-[10px] w-1/2 h-[45px] font-medium bg-black"
                required
              />
            </div>
            <div className="relative">
              <input 
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email: name@example.com"
                className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black ${emailError ? 'border-[#ff850a]' : ''}`}
                required
              />
              {emailError && (
                <div className="text-[#ff850a] text-base text-center mt-4">
                  {emailError}
                </div>
              )}
            </div>
            <div className="relative">
              <input 
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => setShowConditions(true)}
                onBlur={() => setShowConditions(false)}
                placeholder="Password"
                className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black ${isPasswordTouched && passwordError ? 'border-[#ff850a]' : ''}`}
                required
              />
              {showConditions && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray-700 rounded-md shadow-lg z-10 w-full">
                  <ul className="list-none">
                    {passwordConditions.map((condition, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        {satisfiedConditions[index] ? (
                          <FaCheckCircle className="text-green-500" />
                        ) : (
                          <div className="w-4 h-4 border border-white rounded-full" />
                        )}
                        <span className={satisfiedConditions[index] ? 'text-green-400' : 'text-white'}>
                          {condition.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {isPasswordTouched && passwordError && <div className="text-[#ff850a] text-sm text-center">{passwordError}</div>}
            <div className="flex justify-center items-center italic mt-[10px]">
              <Link href="/pages/signin">Already have an account? Sign in here</Link>
            </div>
            <div className="flex justify-center gap-x-4 mt-4">
              <Link href="/" className="text-lg font-medium flex flex-row gap-x-3 bg-[#003366] rounded-[10px] px-4 py-2 items-center justify-center text-white hover:bg-[#002244] w-[135px]">
                <RiArrowGoBackLine />
                Go back
              </Link>
              <button
                type="submit"
                className="text-lg font-medium flex flex-row gap-x-3 bg-[#4285F4] rounded-[10px] px-4 py-2 items-center justify-center text-white hover:bg-[#357ae8] w-[100px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </RegisterLayout>
    </Suspense>
  );
};

export default Page;
