import React from 'react'
import Marquee from 'react-fast-marquee';
import { FaHandshake } from 'react-icons/fa';

const TrustedCompaniesMarquee = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-[40px] max-[900px]:mt-[600px]">
      <div className="text-4xl max-[900px]:text-xl font-semibold flex justify-center items-center flex-row gap-x-[20px]">
        <FaHandshake size={50} className="text-[#e07000]"/>
        Trusted by:
      </div>
      <div className="w-1/2 font-medium">
        <Marquee pauseOnHover={true} speed={60} direction="left" className="font-semibold text-xl">
          <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation rounded-[10px]">Harvard</div>
          <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation rounded-[10px]">Khan Academy</div>
          <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation rounded-[10px]">U.S. Department of Education</div>
          <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation rounded-[10px]">Stanford</div>
          <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation rounded-[10px]">MIT</div>
        </Marquee>
      </div>
    </div>
  )
}

export default TrustedCompaniesMarquee