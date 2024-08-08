"use client"

import React, { useState } from 'react'
import UniversityExplorerCarousel from './UniversityExplorerCarousel'
import { useRouter } from 'next/navigation'

import BrainAI from '@/app/components/Icons/BrainAI'
import VROutline from '@/app/components/Icons/VROutline'

const BentoBox = () => {
  const router = useRouter();
  const [isAIHovered, setIsAIHovered] = useState(false)
  const [isVRHovered, setIsVRHovered] = useState(false)

  return (
    <div className="w-full h-[96.6%] ml-[50px] flex justify-center items-center font-bold text-center mt-[2px] max-[700px]:ml-0 px-[15px] max-[700px]:px-[10px] max-[700px]:py-[15px]">
      <div className="grid grid-cols-6 grid-rows-3 gap-[20px] w-full h-full max-[2000px]:grid-rows-6 max-[2000px]:grid-cols-6 max-[700px]:gap-[15px]">
        <div 
          className="relative row-span-1 col-span-2 max-[2000px]:col-span-4 max-[2000px]:-order-9 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" 
          onClick={() => router.push('/pages/main/ai-matching')}
          onMouseEnter={() => setIsAIHovered(true)}
          onMouseLeave={() => setIsAIHovered(false)}
        >
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${isAIHovered ? "text-3xl opacity-100" : "text-2xl opacity-90"}`}>
            <div className="flex flex-row gap-x-[20px] items-center">
              <BrainAI className={`transition-all duration-700 ease-in-out ${isAIHovered ? "w-[35px] h-[435px] animate-spin" : "w-[25px] h-[25px]"}`}/>
              <div className={`max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out text-nowrap ${isAIHovered ? "scale-[115%]" : "scale-100"} `}>
                AI Matcher
              </div>
            </div>
          </div>
        </div>
        <div 
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[2000px]:-order-8 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" 
          onClick={() => router.push('/pages/main/vr-tours')}
          onMouseEnter={() => setIsVRHovered(true)}
          onMouseLeave={() => setIsVRHovered(false)}
        >
          <div className="relative w-full h-full">
            <VROutline className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-700 z-50 ${isVRHovered ? "w-[calc(100%)] h-[calc(100%)] opacity-100" : "opacity-0"}`}/>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out `}>
              VR Tours
            </div>
          </div>
        </div>
        <div className="row-span-2 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/mentors')}>
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            Mentors
          </div>
        </div>
        <div className="row-span-2 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/programs')}>
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            Programs
          </div>
        </div>
        <div className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/application-tracker')}>
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            Application Tracker
          </div>
        </div>
        <div className="row-span-2 col-span-3 max-[2000px]:col-span-6 max-[2000px]:-order-7 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/university-explorer')}>
          <UniversityExplorerCarousel />
        </div>
        <div className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/university-rankings')}>
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            University Rankings
          </div>
        </div>
        <div className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/campus-events')}>
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            Campus Events
          </div>
        </div>
        <div className="row-span-1 col-span-2 max-[2000px]:col-span-4 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/scholarships')}>
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            Scholarships
          </div>
        </div>
      </div>
    </div>
  )
}

export default BentoBox;