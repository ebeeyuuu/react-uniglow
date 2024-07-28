"use client"

import React, { Suspense, lazy, useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import Link from 'next/link';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { FaCheckCircle } from 'react-icons/fa';

// Lazy load the RegisterLayout component
const RegisterLayout = lazy(() => import('@/app/components/RegisterLayout'));

const passwordConditions = [
  { regex: /.{8,}/, description: 'At least 8 characters' },
  { regex: /[A-Z]/, description: 'At least one uppercase letter' },
  { regex: /[a-z]/, description: 'At least one lowercase letter' },
  { regex: /\d/, description: 'At least one number' },
  { regex: /[@$!%*?&]/, description: 'At least one special character (@$!%*?&)' }
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Page = () => {
  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [showConditions, setShowConditions] = useState(false);
  const [satisfiedConditions, setSatisfiedConditions] = useState<boolean[]>(new Array(passwordConditions.length).fill(false));

  useEffect(() => {
    if (passwordTouched) {
      const newSatisfiedConditions = passwordConditions.map(condition => condition.regex.test(password));
      setSatisfiedConditions(newSatisfiedConditions);

      if (newSatisfiedConditions.every(condition => condition)) {
        setPasswordError(null);
      } else {
        setPasswordError('Password does not meet all requirements.');
      }
    }
  }, [password, passwordTouched]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!passwordTouched) {
      setPasswordTouched(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailRegex.test(e.target.value)) {
      setEmailError(null);
    } else {
      setEmailError('Invalid email format. Please use name@example.com');
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <RegisterLayout>
        <div className="flex flex-col mx-auto justify-center items-center gap-y-7 w-full md:w-1/2 h-full p-4">
          <div className="text-4xl">
            Sign Up
          </div>
          <form className="w-[65vw] mb-[40px] flex justify-center">
            <div className="flex flex-col mx-auto gap-y-4 items-center">
              <input 
                type="text"
                placeholder="Username"
                className="input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] mt-[20px] w-full min-w-[250px] max-w-[400px] font-medium bg-black"
              />
              <div className="flex flex-row gap-x-4 w-full">
                <input 
                  type="number"
                  placeholder="Age"
                  className="input-field px-4 py-2 border-white border-2 rounded-[10px] w-1/2 min-w-[120px] max-w-[192px] h-[45px] font-medium bg-black"
                />
                <input 
                  type="number"
                  placeholder="Grade"
                  className="input-field px-4 py-2 border-white border-2 rounded-[10px] w-1/2 min-w-[120px] max-w-[192px] h-[45px] font-medium bg-black"
                />
              </div>
              <input 
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email: name@example.com"
                className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black ${emailError ? 'border-[#ff850a]' : ''}`}
              />
              {emailError && <div className="text-[#ff850a] text-sm">{emailError}</div>}
              <div className="relative w-full">
                <input 
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setShowConditions(true)}
                  onBlur={() => setShowConditions(false)}
                  placeholder="Password"
                  className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black ${passwordTouched && passwordError ? 'border-[#ff850a]' : ''}`}
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
              {passwordTouched && passwordError && <div className="text-[#ff850a] text-sm">{passwordError}</div>}
            </div>
          </form>
          <div className="flex flex-row gap-x-4 mt-[-40px]">
            <Link href="/" className="text-lg font-medium flex flex-row gap-x-3 bg-[#003366] rounded-[10px] px-4 py-2 h-[45px]">
              <div>
                Return
              </div>
              <RiArrowGoBackLine className="mt-[6px]"/>
            </Link>
            <Link href="/pages/signup" className="text-lg font-medium flex flex-row bg-[#0070e0] text-white rounded-[10px] px-4 py-2 h-[45px]">
              <div className="mt-[1px]">
                Submit
              </div>
            </Link>
          </div>
          <Link href="/pages/signin" className="italic text-base font-normal text-center">
            Already have an account? Sign in here!
          </Link>
        </div>
      </RegisterLayout>
    </Suspense>
  );
};

export default Page;