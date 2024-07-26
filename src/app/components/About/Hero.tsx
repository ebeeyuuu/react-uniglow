import React from 'react'
import Image from 'next/image'
import image1 from '@/images/14.jpg'
import image2 from '@/images/15.jpg'

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="relative w-[90%] mx-auto mt-[50px] h-[80vh] flex justify-center items-center">
        <Image 
          src={image1} 
          alt="background-image" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-100 rounded-[5px]"
          layout="fill"
        />
        <div className="relative z-10 text-center text-white font-bold text-4xl px-5 py-5 rounded-[10px] bg-black/60 max-[900px]:text-2xl">
          About Us: Our Story
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-[200px] flex flex-col-reverse lg:flex-row justify-center items-center gap-x-[100px]">
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
          className="w-[90%] lg:w-[35%] h-[500px] object-cover mb-[40px] lg:mb-0"
        />
      </div>
    </div>
  )
}

export default Hero