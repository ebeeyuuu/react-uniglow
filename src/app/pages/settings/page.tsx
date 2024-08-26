"use client"

import React, { useState, useEffect } from 'react'
import { useUser } from '@/context/userContext'
import Link from 'next/link'
import { collection, query, where, getDocs, setDoc } from "firebase/firestore";
import { db } from '@/firebaseConfig'; 
import Settings from '../../components/Icons/Settings'
import { FaHome, FaSignOutAlt } from 'react-icons/fa'

const Page = () => {
  const [newUsername, setNewUsername] = useState<string>('');
  const [newAge, setNewAge] = useState<string>('');
  const [newGrade, setNewGrade] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');

  const { username, age, grade, email } = useUser();

  useEffect(() => {
    setNewUsername(username || '');
    setNewAge(age ? age.toString() : '');
    setNewGrade(grade ? grade.toString() : '');
    setNewEmail(email || '');
  }, [username, age, grade, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newUsername || !newAge || !newGrade || !newEmail) {
      return;
    }

    try {
      // Ensure the username from the hook matches the document ID
      const userQuery = query(collection(db, "users"), where("username", "==", username));
      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (docSnapshot) => {
          const docRef = docSnapshot.ref;

          await setDoc(docRef, {
            username: newUsername,
            age: parseInt(newAge),
            grade: parseInt(newGrade),
            email: newEmail
          }, { merge: true });
        });
      } else {
        return;
      }
    } catch (error) {
      return;
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value || parseInt(value) <= 130) setNewAge(value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value);

  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value || parseInt(value) <= 12) setNewGrade(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[85%] h-[55%] flex flex-row max-[900px]:flex-col-reverse max-w-[1500px]">
        <div className="w-1/3 bg-[#003061b8] flex justify-center items-center max-[900px]:w-full max-[900px]:h-1/4 rounded-tl-[20px] rounded-bl-[20px] max-[900px]:rounded-br-[20px] max-[900px]:rounded-tl-none">
          <div className="flex flex-col gap-y-[20px] p-[48px]">
            <div className="flex flex-col gap-y-[20px] max-[900px]:w-[60%] max-[900px]:mx-auto">
              <Link href="/" className="text-2xl font-bold flex flex-row gap-x-[15px] items-center max-[900px]:text-xl">
                Home
                <FaHome className="w-[30px] h-[30px] max-[900px]:w-[20px] max-[900px]:h-[20px]"/>
              </Link>
              <div className="text-sm font-medium italic max-[900px]:text-xs">
                Uniglow ensures your data is safely and securely stored and not used in malpractice.
              </div>
            </div>
            <Link href="/pages/signin" className="flex flex-row gap-x-[10px] items-center justify-end">
              <div className="text-base font-semibold">
                Sign Out
              </div>
              <FaSignOutAlt size={20}/>
            </Link>
          </div>
        </div>
        <div className="w-2/3 bg-[#013c78] flex justify-center items-center max-[900px]:w-full max-[900px]:h-3/4 rounded-tr-[20px] rounded-br-[20px] max-[900px]:rounded-tl-[20px] max-[900px]:rounded-br-none">
          <div className="flex flex-col gap-y-[10px] items-center">
            <div className="text-4xl font-bold flex flex-row gap-x-[10px] items-center justify-start">
              Settings
              <Settings className="w-[30px] h-[30px]"/>
            </div>
            <div className="mb-[20px] text-center mt-[5px]">
              All edits are saved before being applied.
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-[30vw] flex justify-center items-center flex-col gap-y-[15px] max-[900px]:w-[55vw]">
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={newUsername} 
                  className="input-field px-5 py-3 rounded-[10px] h-[50px] w-full font-medium bg-black/60 max-w-[500px]" 
                  onChange={handleUsernameChange}
                />
                <div className="w-full max-w-[500px] flex flex-row gap-x-[10px]">
                  <input 
                    type="number" 
                    placeholder="Age"
                    value={newAge} 
                    className="input-field px-5 py-3 rounded-[10px] h-[50px] w-1/2 font-medium bg-black/60" 
                    onChange={handleAgeChange}
                  />
                  <input 
                    type="number" 
                    placeholder="Grade" 
                    value={newGrade} 
                    className="input-field px-5 py-3 rounded-[10px] h-[50px] w-1/2 font-medium bg-black/60" 
                    onChange={handleGradeChange}
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Email" 
                  value={newEmail} 
                  className="input-field px-5 py-3 rounded-[10px] h-[50px] w-full font-medium bg-black/60 max-w-[500px]" 
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
                  className="text-lg font-medium flex bg-[#f4b034] rounded-[10px] text-black px-4 py-2 items-center hover:py-3 hover:px-5 w-[100px] mt-[20px] justify-center smooth-animation"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Page
