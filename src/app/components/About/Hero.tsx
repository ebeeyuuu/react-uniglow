import React from 'react'
import Image from 'next/image'
import image1 from '@/images/14.jpg'
import image2 from '@/images/15.jpg'
import { FaCopyright } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      <Image 
        src={image1} 
        alt="background-image" 
        className="w-full object-cover filter contrast-150 brightness-[70%] rounded-[5px] h-[50vh]"
      />
      <div className="text-center text-white font-bold text-4xl px-5 py-5 rounded-[10px] bg-[#020202] max-[900px]:text-2xl border border-white mt-[100px] px-5 mx-auto">
        About Us: Our Story
      </div>
      <div className="w-[70%] border border-white/30 mx-auto mt-[60px]"/>
      <div className="w-[90%] mx-auto mt-[90px] flex flex-col-reverse lg:flex-row justify-center items-center gap-x-[100px]">
        <div className="w-full lg:w-1/3 flex flex-col gap-[40px]">
          <div className="font-medium text-3xl">
            Uniglow helps students around the world <span style={{ fontWeight: 750 }} className="italic">unearth their dream university</span>
          </div>
          <div className="font-normal text-xs">
            Founded on 26 July 2024 by myself, Ean Yu, I started out by developing the frontend of this website in my room in Hongkong in my grandparents&apos; apartment. My ultimate goal was to help people around the world, whether it would be students, teachers, or even parents decide on the best university that suited them the best. 
          </div>
          <div className="font-normal text-xs">
            I didn't want anyone else in the world to have the same struggles as I did when I had to decide on the university I wanted to study at, so I decided to create Uniglow and show the world all the opportunities the world has to offer, and thats why most of the features of Uniglow are free to use! 
          </div>
          <div className="font-normal text-xs">
            Each and every single part of this website has a little part of myself infused into it; an easy to use, effortless, and resourceful feature and service in every direction. I call it the heaven of a senior, so enjoy every part of it.
          </div>
        </div>
        <Image 
          src={image2} 
          alt="" 
          className="w-[90%] lg:w-[35%] h-[500px] object-cover mb-[40px] lg:mb-0 filter brightness-[70%]"
        />
      </div>
      <div className="w-[70%] border border-white/30 mx-auto mt-[90px]"/>
      <div className="flex justify-center items-center mt-[60px] flex-col mx-auto gap-y-[10px]">
        <div className="text-3xl" style={{ fontWeight: 800 }}>
          Contact us
        </div>
        <div className="mt-[10px]">
          Phone us: +62 8113330106
        </div>
        <div>
          Email us: uniglow@gmail.com
        </div>
        <div className="opacity-30 font-light text-lg flex flex-row gap-[10px] items-center mt-[30px] mb-[100px]">
          <span><FaCopyright /></span> 2024 Uniglow, Inc. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Hero