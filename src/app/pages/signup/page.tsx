"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import RegisterLayout from "../../components/RegisterLayout";
import Loading from "../../components/Loading";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import { useUser } from "@/context/userContext";
import { motion, AnimatePresence } from "framer-motion";

interface PasswordCondition {
  description: string;
  isSatisfied: boolean;
}

const Page = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showConditions, setShowConditions] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [passwordConditions, setPasswordConditions] = useState<
    PasswordCondition[]
  >([]);
  const [satisfiedConditions, setSatisfiedConditions] = useState<boolean[]>([]);
  const router = useRouter();
  const {
    setUsername: setContextUsername,
    setAge: setContextAge,
    setGrade: setContextGrade,
    setEmail: setContextEmail,
  } = useUser();

  useEffect(() => {
    const conditions: PasswordCondition[] = [
      { description: "At least 8 characters", isSatisfied: false },
      { description: "Contains a number", isSatisfied: false },
      { description: "Contains an uppercase letter", isSatisfied: false },
      { description: "Contains a special character", isSatisfied: false },
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
    return conditions.every((condition) => condition);
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
      setUsernameError(
        "Usernames can only have letters, numbers, and underscores.",
      );
      hasError = true;
    } else {
      const usernameExists = await checkExistingUsername(username);
      if (usernameExists) {
        setUsernameError(
          "Username already exists. Please choose a different one.",
        );
        hasError = true;
      } else {
        setUsernameError("");
      }
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      hasError = true;
    } else {
      const emailExists = await checkExistingEmail(email);
      if (emailExists) {
        setEmailError(
          "An account already exists with this email. Please use a different one.",
        );
        hasError = true;
      } else {
        setEmailError("");
      }
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must meet the specified conditions");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) {
      return; // If there's any error, don't proceed further
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username,
        age: parseInt(age),
        grade: parseInt(grade),
        email,
      });

      setContextUsername(username);
      setContextAge(parseInt(age));
      setContextGrade(parseInt(grade));
      setContextEmail(email);

      router.push("/pages/main");
    } catch (error: any) {
      console.error("Error during signup: ", error);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseInt(value) <= 130) setAge(value);
  };
  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseInt(value) <= 12) setGrade(value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    setIsPasswordTouched(true);

    const updatedConditions = passwordConditions.map((condition) => {
      if (condition.description === "At least 8 characters") {
        condition.isSatisfied = value.length >= 8;
      } else if (condition.description === "Contains a number") {
        condition.isSatisfied = /\d/.test(value);
      } else if (condition.description === "Contains an uppercase letter") {
        condition.isSatisfied = /[A-Z]/.test(value);
      } else if (condition.description === "Contains a special character") {
        condition.isSatisfied = /[@#$%^&*(){}:"<>?_+]/.test(value);
      }
      return condition;
    });

    setPasswordConditions(updatedConditions);
    setSatisfiedConditions(updatedConditions.map((cond) => cond.isSatisfied));
  };

  return (
    <Suspense fallback={<Loading />}>
      <RegisterLayout>
        <div className="flex flex-col mx-auto justify-center items-center gap-y-7 w-full md:w-1/2 h-full p-10">
          <div className="text-4xl w-full flex justify-center text-center whitespace-nowrap">
            Sign Up
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[35vw] max-w-[400px] min-w-[300px] mb-10 flex flex-col gap-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] mt-[20px] w-full font-medium bg-black ${usernameError ? "mb-0" : "mb-[-16px]"
                  }`}
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
                className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black ${emailError ? "border-[#ff850a]" : ""
                  }`}
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
                onFocus={() => setShowConditions(true)} // Shows conditions when focused
                onBlur={() => setShowConditions(true)} // Keeps conditions visible when focus is lost
                placeholder="Password"
                className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black ${isPasswordTouched && passwordError ? "border-[#ff850a]" : ""
                  }`}
                required
              />
              <AnimatePresence>
                {showConditions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden p-6 mt-4 bg-zinc-800 backdrop-blur-lg rounded-xl shadow-lg w-full"
                  >
                    <ul className="list-none">
                      {passwordConditions.map((condition, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <AnimatePresence>
                            {satisfiedConditions[index] ? (
                              <motion.div
                                key="check"
                                initial={{ opacity: 0, x: -10 }} // Starts from the left to avoid darting
                                animate={{ opacity: 1, x: 0 }} // Moves to the correct position
                                exit={{ opacity: 0, x: -10 }} // Animates out to the left
                                className="text-emerald-400"
                              >
                                <FaCheckCircle />
                              </motion.div>
                            ) : (
                              <motion.div
                                key="circle"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="w-4 h-4 border border-white rounded-full"
                              />
                            )}
                          </AnimatePresence>
                          <motion.span
                            key={condition.description}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`transition-all duration-500 ease-in-out ${satisfiedConditions[index]
                                ? "text-emerald-400"
                                : "text-white"
                              }`}
                          >
                            {condition.description}
                          </motion.span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {isPasswordTouched && passwordError && (
              <div className="text-[#ff850a] text-sm text-center">
                {passwordError}
              </div>
            )}
            <div className="flex flex-col gap-4 justify-center items-center cursor-pointer mt-[10px]">
              <Link href="/pages/signin" className="hover:underline italic">
                Already have an account? Sign in here
              </Link>
              <div className="flex justify-center gap-x-4 mt-4">
                <Link
                  href="/"
                  className="text-lg font-medium flex flex-row scale-100 hover:scale-110 transition-all duration-300 ease-in-out gap-x-3 bg-[#00257a] rounded-[10px] px-4 py-2 h-[45px] cursor-pointer"
                >
                  <div>Return</div>
                  <RiArrowGoBackLine className="mt-[6px]" />
                </Link>
                <button
                  type="submit"
                  className="text-lg font-medium flex flex-row gap-x-3 scale-100 hover:scale-110 transition-all duration-300 ease-in-out bg-[#003dcc] rounded-[10px] px-4 py-2 items-center justify-center text-white w-[100px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </RegisterLayout>
    </Suspense>
  );
};

export default Page;
