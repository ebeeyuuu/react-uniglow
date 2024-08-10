"use client";

import React, { Suspense, lazy, useState } from 'react';
import Loading from '@/app/components/Loading';
import Link from 'next/link';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { db } from '@/firebaseConfig';
import { collection, getDocs, query, where, DocumentData } from 'firebase/firestore';
import { useUser } from '@/context/userContext'; // Import the useUser hook

const RegisterLayout = lazy(() => import('@/app/components/RegisterLayout'));

const Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { setUsername: setContextUsername, setAge: setContextAge, setGrade: setContextGrade, setEmail: setContextEmail } = useUser();
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state
    
    try {
      // Query Firestore for the user with the provided username
      const q = query(collection(db, 'users'), where('username', '==', username));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        throw new Error('No user found with this username.');
      }
  
      // Check if the provided password matches the password in the database
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data() as DocumentData;
  
      if (userData.password !== password) {
        throw new Error('Incorrect password. Please try again.');
      }
  
      // Destructure the userData object
      const { username: dbUsername, email, grade, age } = userData;
      // Set user data in context
      
      setContextUsername(dbUsername);
      setContextAge(parseInt(age));
      setContextGrade(parseInt(grade));
      setContextEmail(email);
  
      // Redirect to the main page
      router.push('/pages/main');
    } catch (error: unknown) {
      if (error instanceof Error) {
        let errorMessage = 'An unknown error occurred.';
        if (error.message.includes('No user found with this username.')) {
          errorMessage = 'No user found with this username.';
        } else if (error.message.includes('Incorrect password. Please try again.')) {
          errorMessage = 'Incorrect password. Please try again.';
        } else if (error.message.includes('auth/')) {
          errorMessage = 'Authentication error. Please check your credentials.';
        }
        setError(errorMessage);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <RegisterLayout>
        <div className="flex flex-col mx-auto justify-center items-center gap-y-7 w-full md:w-1/2 h-full p-4">
          <div className="text-4xl">
            Sign In
          </div>
          <form onSubmit={handleSignIn} className="mb-10 flex flex-col gap-y-4 w-[40vw] max-w-[400px] min-w-[300px]">
            <input 
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black`}
              required
            />
            <input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black`}
              required
            />
            {error && <div className="text-[#ff850a] text-sm mt-2">{error}</div>}
            <div className="flex flex-row gap-x-4 mt-4 justify-center">
              <Link href="/" className="text-lg font-medium flex flex-row gap-x-3 bg-[#003366] rounded-[10px] px-4 py-2 h-[45px]">
                <div>Return</div>
                <RiArrowGoBackLine className="mt-[6px]"/>
              </Link>
              <button type="submit" className="text-lg font-medium flex flex-row bg-[#4f46e5] text-white rounded-[10px] px-4 py-2 h-[45px]">
                Submit
              </button>
            </div>
          </form>
          <Link href="/pages/signup" className="italic text-base font-normal text-center mt-[-40px]">
            Don&apos;t have an account? Sign up here!
          </Link>
        </div>
      </RegisterLayout>
    </Suspense>
  );
};

export default Page;
