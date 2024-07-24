import React from 'react'
import Image from 'next/image'
import image2 from '@/images/2.jpg'
import image3 from '@/images/3.jpg'
import image4 from '@/images/4.jpg'
import image5 from '@/images/5.jpg'
import image6 from '@/images/6.jpg'

const Hero = () => {
  return (
    <div className="w-[80%] h-[80vh] flex flex-row justify-center items-center max-[900px]:flex-col mx-auto">
      <div className="mx-auto flex flex-col">
        <div className="text-6xl max-[900px]:text-4xl font-bold w-1/2 max-[900px]:w-full max-[900px]:mb-[200px] max-[900px]:mt-[200px] max-[900px]:text-center">
          Find Your Dream University
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
  )
}

export default Hero