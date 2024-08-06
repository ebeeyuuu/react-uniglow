"use client"

import React, { useState, useEffect } from 'react'
import { useUser } from '@/context/userContext'
import Link from 'next/link'
import { setDoc, collection } from "firebase/firestore";
import { db } from '@/firebaseConfig'; 
import Settings from '../../components/Icons/Settings'

const page = () => {
  const [newUsername, setNewUsername] = useState<string>('')
  const [newAge, setNewAge] = useState<string>('')
  const [newGrade, setNewGrade] = useState<string>('')
  const [newEmail, setNewEmail] = useState<string>('')
  
  const { username, age, grade, email } = useUser();

  useEffect(() => {
    setNewUsername(username || '');
    setNewAge(age ? age.toString() : '');
    setNewGrade(grade ? grade.toString() : '');
    setNewEmail(email || '');
  }, [username, age, grade, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submission logic here
  }

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
      <div className="w-[85%] h-[55%] flex flex-row max-[900px]:flex-col max-w-[1500px]">
        <div className="w-1/3 bg-[#003061b8] flex justify-center items-center max-[900px]:w-full max-[900px]:h-1/4 rounded-tl-[20px] rounded-bl-[20px] max-[900px]:rounded-bl-none max-[900px]:rounded-tr-[20px]">
          <div className="flex flex-col gap-y-[20px] max-[900px]:flex-row">
            <div className="">
              Return Home
            </div>
            <div className="">
              Sign Out
            </div>
          </div>
        </div>
        <div className="w-2/3 bg-[#00478f] flex justify-center items-center max-[900px]:w-full max-[900px]:h-3/4 rounded-tr-[20px] rounded-br-[20px] max-[900px]:rounded-tr-none max-[900px]:rounded-bl-[20px]">
          <div className="flex flex-col gap-y-[40px] items-center">
            <div className="text-4xl font-bold flex flex-row gap-x-[10px] items-center justify-start">
              Settings
              <Settings className="w-[35px] h-[35px]"/>
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
                  className="text-lg font-medium flex bg-[#cc5a08] rounded-[10px] px-4 py-2 items-center text-white hover:bg-[#f57214] w-[100px] mt-[20px] justify-center smooth-animation"
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

export default page
