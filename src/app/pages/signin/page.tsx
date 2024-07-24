"use client"
import React from 'react'
import Link from 'next/link'
import RegisterLayout from '@/app/components/RegisterLayout'
import { RiArrowGoBackLine } from 'react-icons/ri'

const SignIn = () => {
  return (
    <RegisterLayout>
      <div className="flex flex-col mx-auto justify-center items-center gap-y-7 w-full md:w-1/2 h-full p-4">
        <div className="text-5xl font-bold">
          Sign In
        </div>
        <form className="w-full flex justify-center">
          <div className="flex flex-col mx-auto gap-y-4">
            <input 
              type="text"
              placeholder="Email: name@example.com"
              className="input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-[35vw] min-w-[250px] max-w-[400px] font-medium bg-black"
            />
            <input 
              type="password"
              placeholder="Password"
              className="input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-[35vw] min-w-[250px] max-w-[400px] font-medium bg-black"
            />
          </div>
        </form>
        <div className="flex flex-row gap-x-4">
          <Link href="/" className="text-lg font-medium flex flex-row gap-x-3 bg-[#003366] rounded-[10px] px-4 py-2 max-h-[45px]">
            <div>
              Return
            </div>
            <RiArrowGoBackLine className="mt-[5px]"/>
          </Link>
          <Link href="/pages/signup" className="text-lg font-medium flex flex-row bg-[#0070e0] text-white rounded-[10px] px-6 py-2 h-[45px]">
            <div className="mt-[1px]">
              Submit
            </div>
          </Link>
        </div>
        <Link href="/pages/signup" className="italic text-base font-normal text-center">
          Don&apos;t have an account? Sign up here!
        </Link>
      </div>
    </RegisterLayout>
  )
}

export default SignIn