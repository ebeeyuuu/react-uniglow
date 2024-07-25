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
      <div className="w-[80%] h-[80vh] flex flex-row justify-center items-center max-[900px]:flex-col mx-auto">
        <div className="mx-auto flex flex-col gap-y-[30px]">
          <div className="text-6xl max-[700px]:text-4xl font-bold w-1/2 max-[900px]:w-full max-[900px]:mt-[550px] max-[900px]:text-center smooth-animation">
            Find Your Dream University
          </div>
          <div className="text-base max-[900px]:text-xs font-light w-3/5 max-[900px]:w-full max-[900px]:text-center smooth-animation">
            Discover your dream and explore the world's opportunities!
          </div>
          <div className="px-5 py-3 flex justify-center border-[#0070e0] border-2 w-[200px] text-lg font-semibold max-[900px]:mb-[200px] max-[900px]:w-[120px] max-[900px]:text-xs max-[900px]:place-self-center hover:bg-[#0070e0] hover:text-black smooth-animation">
            <Link href="/pages/signup">Get started</Link>
          </div>
        </div>
        <div className="w-[100%] gap-[20px] grid grid-rows-4 grid-cols-4 h-[70%] text-black">
          <div className="row-span-4 col-span-2">
            <Image src={image2} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[20px]"/>
          </div>
          <div className="row-span-2 col-span-2">
            <Image src={image3} alt="University 2" className="h-[100%] w-[100%] object-cover rounded-[20px]" />
          </div>
          <div className="row-span-1 col-span-1">
            <Image src={image4} alt="University 3" className="h-[100%] w-[100%] object-cover rounded-[20px]" />
          </div>
          <div className="row-span-2 col-span-1">
            <Image src={image5} alt="University 4" className="h-[100%] w-[100%] object-cover rounded-[20px]" />
          </div>
          <div className="row-span-1 col-span-1">
            <Image src={image6} alt="University 5" className="h-[100%] w-[100%] object-cover rounded-[20px]" />
          </div>
        </div>
      </div>
      <TrustedCompaniesMarquee />
    </div>
  )
}

export default Hero