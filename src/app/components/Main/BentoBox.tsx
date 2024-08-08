"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const BentoBox = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[96.6%] ml-[50px] flex justify-center items-center font-bold text-center mt-[2px] max-[700px]:ml-0 px-[15px] max-[700px]:px-[10px] max-[700px]:py-[15px]">
      <div className="grid grid-cols-6 grid-rows-3 gap-[20px] w-full h-full max-[2000px]:grid-rows-6 max-[2000px]:grid-cols-6 max-[700px]:gap-[20px]">
        <div className="row-span-1 col-span-2 max-[2000px]:col-span-4 max-[2000px]:-order-9 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer hover:scale-[103%] transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/ai-matching')}>
          AI Matcher
        </div>
        <div className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[2000px]:-order-8 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer hover:scale-[103%] transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/vr-tours')}>
          VR Tours
        </div>
        <div className="row-span-2 col-span-1 max-[2000px]:col-span-2 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center hover:scale-[103%] cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/mentors')}>
          Mentors
        </div>
        <div className="row-span-2 col-span-1 max-[2000px]:col-span-2 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center hover:scale-[103%] cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/programs')}>
          Programs
        </div>
        <div className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center hover:scale-[103%] cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/application-tracker')}>
          Application Tracker
        </div>
        <div className="row-span-2 col-span-3 max-[2000px]:col-span-6 max-[2000px]:-order-7 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer hover:scale-[103%] transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/university-explorer')}>
          University Explorer
        </div>
        <div className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center hover:scale-[103%] cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/university-rankings')}>
          University Rankings
        </div>
        <div className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center hover:scale-[103%] cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/campus-events')}>
          Campus Events
        </div>
        <div className="row-span-1 col-span-2 max-[2000px]:col-span-4 bg-[#003366] rounded-[10px] flex justify-center items-center text-xl font-bold text-center hover:scale-[103%] cursor-pointer transition-all duration-300 ease-in-out" onClick={() => router.push('/pages/main/scholarships')}>
          Scholarships
        </div>
      </div>
    </div>
  )
}

export default BentoBox