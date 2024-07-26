import React from 'react'
import { FaRegCopyright, FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaPuzzlePiece, FaXTwitter } from 'react-icons/fa6'


const Footer = () => {
  return (
    <div className="mt-[300px] w-full py-[80px] bg-[#001124]">
      <div className="flex flex-row flex-grow justify-between items-center w-[80%] mx-auto h-[90%] max-[1000px]:flex-col gap-y-[50px]">
        <div className="flex flex-col gap-y-[20px] w-1/3 max-[900px]:w-[90%] mr-[50px]">
          <FaPuzzlePiece size={25}/>
          <div className="text-lg font-medium">
            Helping students worldwide discover their dreams. 
          </div>
          <div className="flex flex-row gap-x-[15px]">
            <FaFacebook size={20} className="opacity-50"/>
            <FaInstagram size={20} className="opacity-50"/>
            <FaXTwitter size={20} className="opacity-50"/>
            <FaGithub size={20} className="opacity-50"/>
            <FaYoutube size={20} className="opacity-50"/>
          </div>
        </div>
        <div className="w-2/3 grid grid-rows-1 grid-cols-4 gap-[30px] max-[900px]:w-full max-[400px]:flex-col max-[900px]:grid-rows-2 max-[900px]:grid-cols-2">
          <div className="flex flex-col gap-y-[15px]">
            <div className="font-bold text-sm">
              Links
            </div>
            <div className="text-xs">
              About Us  
            </div>
            <div className="text-xs">
              Our Mission
            </div>
            <div className="text-xs">
              How It Works
            </div>
            <div className="text-xs">
              Careers
            </div>
          </div>
          <div className="flex flex-col gap-y-[15px]">
            <div className="font-bold text-sm">
              Resources
            </div>
            <div className="text-xs">
              University Rankings
            </div>
            <div className="text-xs">
              Application Guides
            </div>
            <div className="text-xs">
              Scholarship Information
            </div>
            <div className="text-xs">
              Blogs
            </div>
          </div>
          <div className="flex flex-col gap-y-[15px]">
            <div className="font-bold text-sm">
              Legal & Support
            </div>
            <div className="text-xs">
              Terms of Service
            </div>
            <div className="text-xs">
              Privacy Policy
            </div>
            <div className="text-xs">
              Contact Us
            </div>
            <div className="text-xs">
              FAQ
            </div>
          </div>
          <div className="flex flex-col gap-y-[15px]">
            <div className="font-bold text-sm">
              For Students
            </div>
            <div className="text-xs">
              Sign Up
            </div>
            <div className="text-xs">
              Log In
            </div>
            <div className="text-xs">
              My Profile
            </div>
            <div className="text-xs">
              Saved Universities
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto flex justify-center items-center border-2 border-white opacity-30 max-h-[5px] mt-[50px] rounded-full" />
      <div className="flex justify-start items-center flex-row gap-x-[10px] font-light opacity-60 w-[80%] mx-auto mt-[30px]">
        <FaRegCopyright />
        2024 Uniglow, Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer