import React from 'react';
import Image from "next/image";
import image1 from '@/images/14.jpg';
import image2 from '@/images/15.jpg';
import { FaCopyright } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="text-center text-white font-bold text-4xl px-5 py-5 rounded-[10px] bg-[#020202] max-[900px]:text-2xl border border-white mt-[100px] mx-auto">
        About Us: Our Story
      </div>
      <hr className="w-[70%] border border-white/30 mx-auto mt-[60px]" />
      <div className="w-[90%] mx-auto mt-[90px] flex flex-col-reverse lg:flex-row justify-center items-center gap-x-[100px]">
        <div className="w-full lg:w-1/3 flex flex-col gap-[40px]">
          <h2 className="font-medium text-3xl">
            Uniglow helps students around the world{' '}
            <span className="italic font-bold">unearth their dream university</span>
          </h2>
          <p className="font-normal text-xs">
            Founded on 26 July 2024 by myself, Ean Yu, I started out by developing the frontend of this website in my room in Hongkong in my grandparents&apos; apartment. My ultimate goal was to help people around the world, whether it would be students, teachers, or even parents decide on the best university that suited them the best.
          </p>
          <p className="font-normal text-xs">
            I didn&apos;t want anyone else in the world to have the same struggles as I did when I had to decide on the university I wanted to study at, so I decided to create Uniglow and show the world all the opportunities the world has to offer, and thats why most of the features of Uniglow are free to use!
          </p>
          <p className="font-normal text-xs">
            Each and every single part of this website has a little part of myself infused into it; an easy to use, effortless, and resourceful feature and service in every direction. I call it the heaven of a senior, so enjoy every part of it.
          </p>
        </div>
        <Image
          src={image2}
          alt=""
          className="w-[90%] lg:w-[35%] h-[500px] object-cover mb-[40px] lg:mb-0 filter brightness-[70%]"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <hr className="w-[70%] border border-white/30 mx-auto mt-[90px]" />
      <div className="flex justify-center items-center mt-[60px] flex-col mx-auto gap-y-[10px]">
        <h2 className="text-3xl font-bold">Contact us</h2>
        <p>Phone us: +62 8113330106</p>
        <p>Email us: uniglow@gmail.com</p>
        <p className="opacity-30 font-light text-lg flex flex-row gap-[10px] items-center mt-[30px] mb-[100px]">
          <FaCopyright /> 2024 Uniglow, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Hero;