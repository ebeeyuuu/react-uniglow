import React from "react";
import Image from "next/image";
import work1 from "@/images/work1.jpg";
import work2 from "@/images/work2.jpg";
import work3 from "@/images/work3.jpg";
import work4 from "@/images/work4.jpg";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center mt-52 flex-col gap-9">
        <div className="bg-white rounded-full text-black font-medium text-base px-4 py-2">
          Join our team
        </div>
        <div className="text-center scale-100 max-md:scale-[70%] smooth-animation text-6xl font-extrabold flex justify-center flex-col">
          Rediscover your dream.
        </div>
        <div className="w-[60%] mx-auto flex justify-center max-w-[800px] text-center text-lg max-md:text-base font-light">
          We&apos;re looking for the best and brightest to join our team to help
          us build the future for students and bring a revolutionary new
          software product to the market.
        </div>
      </div>
      <div className="border-t-2 border-gray-700 w-2/3 max-w-[860px] mx-auto h-min mt-12 rounded-full">
        {" "}
      </div>
      <div className="flex flex-col gap-3 text-left w-[55%] max-w-[800px] mt-12 mx-auto">
        <p className="font-bold text-base">
          At Uniglow, we&apos;re building the tool of the future
        </p>
        <p className="font-medium text-gray-200">
          Students are the future of the world, and we&apos;re here to help
          them. Universities are on of the many journeys that students take to
          discover their passion and achieve their dreams. We&apos;re here to
          help students find the right university for them, and to make their
          journey easier and more enjoyable.
        </p>
      </div>
      <div className="flex flex-col w-[55%] max-w-[800px] mx-auto items-center justify-center mt-20 bg-[#003dcc] rounded-xl">
        <div className="text-center w-full py-10 scale-100 max-md:scale-[70%] smooth-animation text-2xl font-bold flex justify-center">
          Join our team
        </div>
      </div>
      <div className="w-full h-auto flex-col mt-40 p-20 flex justify-center items-center bg-[#161616]">
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-5 max-w-[800px]">
          <div className="rounded-xl col-span-2">
            <Image
              src={work1}
              alt="Work 1"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="rounded-xl col-span-1">
            <Image
              src={work2}
              alt="Work 2"
              className="w-full h-full object-cover filter brightness-[65%] rounded-xl"
            />
          </div>
          <div className="rounded-xl col-span-1">
            <Image
              src={work3}
              alt="Work 3"
              className="w-full h-full object-cover filter brightness-75 rounded-xl"
            />
          </div>
          <div className="rounded-xl col-span-2">
            <Image
              src={work4}
              alt="Work 4"
              className="w-full h-full object-cover filter brightness-75 rounded-xl"
            />
          </div>
        </div>
        <div className="text-4xl max-md:text-3xl font-bold max-w-[800px] text-gray-300 mt-12">
          <span className="text-white font-extrabold">Our mission</span> is to
          make the lives of student&apos;s around the world as enjoyable and
          easy as possible.
        </div>
      </div>
    </div>
  );
};

export default Hero;
