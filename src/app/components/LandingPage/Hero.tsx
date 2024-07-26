import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import image2 from '@/images/2.jpg'
import image3 from '@/images/3.jpg'
import image4 from '@/images/4.jpg'
import image5 from '@/images/5.jpg'
import image6 from '@/images/6.jpg'
import TrustedCompaniesMarquee from './TrustedCompaniesMarquee'

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex flex-row justify-center items-center max-[900px]:flex-col mx-auto">
        <div className="w-[90%] h-[100vh] grid grid-rows-10 grid-cols-11 gap-[20px] mt-[100px] text-black">
          <div className="bg-white rounded-[10px] row-span-3 col-span-3">
            <Image src={image2} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out"/>
          </div>
          <div className="bg-white rounded-[10px] row-span-2 col-span-3">
            <Image src={image3} alt="University 2" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="bg-white rounded-[10px] row-span-2 col-span-2">
            <Image src={image4} alt="University 3" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="bg-white rounded-[10px] row-span-2 col-span-3">
            <Image src={image5} alt="University 4" className="h-[100%] w-[100%] object-cover rounded-[10px] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="rounded-[10px] row-span-3 col-span-5 text-white flex justify-center items-center">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl font-bold">
                Find Your Dream University
              </div>
              <div>
                <div className="mb-2">
                  Discover your dream and explore the world's opportunities!
                </div>
                <div>
                  Get started
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[10px] row-span-2 col-span-3">
            6
          </div>
          <div className="bg-white rounded-[10px] row-span-2 col-span-3">
            7
          </div>
          <div className="bg-white rounded-[10px] row-span-3 col-span-3">
            8
          </div>
          <div className="bg-white rounded-[10px] row-span-2 col-span-3">
            9
          </div>
          <div className="bg-white rounded-[10px] row-span-2 col-span-2">
            10
          </div>
          <div className="bg-white rounded-[10px] row-span-2 col-span-3">
            11
          </div>
        </div>
      </div>
      <TrustedCompaniesMarquee />
    </div>
  )
}

export default Hero