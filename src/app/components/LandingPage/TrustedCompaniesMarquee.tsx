import React from 'react'
import Marquee from 'react-fast-marquee';

const TrustedCompaniesMarquee = () => {
  return (
    <div className="w-1/2 font-medium">
      <Marquee pauseOnHover={true} speed={60} direction="left">
        <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation">Harvard</div>
        <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation">Khan Academy</div>
        <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation">U.S. Department of Education</div>
        <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation">Stanford</div>
        <div className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation">MIT</div>
      </Marquee>
    </div>
  )
}

export default TrustedCompaniesMarquee