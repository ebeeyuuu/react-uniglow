import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import image1 from '@/images/2.jpg'
import image2 from '@/images/3.jpg'
import image3 from '@/images/4.jpg'
import image4 from '@/images/5.jpg'
import image5 from '@/images/8.jpg'
import image6 from '@/images/9.jpg'
import image7 from '@/images/10.jpg'
import image8 from '@/images/11.jpg'
import image9 from '@/images/12.jpg'
import image10 from '@/images/13.jpg'

import TrustedCompaniesMarquee from './TrustedCompaniesMarquee'

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex flex-row justify-center items-center max-[900px]:flex-col mx-auto">
        <div className="w-[90%] h-[100vh] grid grid-rows-10 grid-cols-11 gap-[20px] mt-[100px] text-black">
          <div className="row-span-3 col-span-3">
            <Image src={image1} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out"/>
          </div>
          <div className="row-span-2 col-span-3">
            <Image src={image2} alt="University 2" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="row-span-2 col-span-2">
            <Image src={image3} alt="University 3" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="row-span-2 col-span-3">
            <Image src={image4} alt="University 4" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="row-span-3 col-span-5 text-white flex justify-center items-center">
            <div className="flex flex-row items-center text-center gap-y-[15px] w-[80%] mx-auto max-[1000px]:flex-col max-[900px]:text-center">
              <div className="mb-4 text-4xl font-bold max-[900px]:text-2xl text-left w-1/3 max-[1000px]:text-center max-[1000px]:w-full">
                Find Your Dream University
              </div>
              <div className="flex flex-col w-5/12 ml-auto max-[1000px]:w-full">
                <div className="mb-2 text-right max-[900px]:text-sm max-[1000px]:text-center">
                  Discover your <span className="font-bold italic">dream</span> and explore the <span className="font-bold italic">world's opportunities!</span>
                </div>
                <div className="px-3 py-3 border border-[#0070e0] hover:bg-[#0070e0] hover:text-black mt-[15px] text-xs flex justify-end font-medium ml-auto max-[1000px]:ml-0 max-[1000px]:justify-center smooth-animation">
                  <Link href="/pages/signup">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-3">
            <Image src={image5} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out"/>
          </div>
          <div className="row-span-2 col-span-3">
            <Image src={image6} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out"/>
          </div>
          <div className="row-span-3 col-span-3">
            <Image src={image8} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out"/>
          </div>
          <div className="row-span-2 col-span-3">
            <Image src={image9} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out"/>
          </div>
          <div className="row-span-2 col-span-2">
            <Image src={image7} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out"/>
          </div>
          <div className="row-span-2 col-span-3">
            <Image src={image10} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out"/>
          </div>
        </div>
      </div>
      <TrustedCompaniesMarquee />
    </div>
  )
}

export default Hero