import React from 'react'
import Home from '@/app/components/Icons/Home'
import { IoMdReturnLeft } from "react-icons/io"
import Link from 'next/link'

const FirstSlide = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-y-[35px] w-[65%]">
        <div className="text-3xl font-bold text-center">
          Welcome to Uniglow&apos;s AI Matcher
        </div>
        <div className="text-lg font-medium text-center">
          Here we help you decide on what university is best for you!
        </div>
        <div className="flex flex-row gap-x-[20px] justify-center items-center whitespace-nowrap">
          <Link href="/pages/main" className="px-5 py-3 flex flex-row items-center gap-x-[10px] bg-[#003366] rounded-[10px]">
            <Home className="w-[20px] h-[20px]"/>
            <p className="font-medium whitespace-nowrap">
              Return to home page
            </p>
          </Link>
          <Link href="/" className="px-5 py-3 flex flex-row items-center gap-x-[10px] border-4 border-[#003366] rounded-[10px]">
            <IoMdReturnLeft />
            <p className="font-medium whitespace-nowrap">
              Sign out
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FirstSlide
