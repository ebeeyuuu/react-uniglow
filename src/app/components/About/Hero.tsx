"use client";

import React, { useState } from "react";
import Image from "next/image";
import work1 from "@/images/work1.jpg";
import work2 from "@/images/work2.jpg";
import work3 from "@/images/work3.jpg";
import work4 from "@/images/work4.jpg";
import { useRouter } from "next/navigation";
import LoadingButton from "@/app/components/LoadingButton";

const Hero = () => {
  const [loading, setLoading] = useState({
    work1: true,
    work2: true,
    work3: true,
    work4: true,
  });
  const router = useRouter();

  const handleImageLoad = (imageKey: string) => {
    setLoading((prevLoading) => ({ ...prevLoading, [imageKey]: false }));
  };

  const handleRedirectMission = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    router.push("/pages/mission");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center mt-52 flex-col gap-9">
        <div className="bg-white rounded-full text-black font-medium text-base px-4 py-2">
          Who we are
        </div>
        <div className="text-center scale-100 max-md:scale-[70%] smooth-animation text-6xl font-extrabold flex justify-center flex-col">
          Our story
        </div>
        <div className="w-[60%] mx-auto flex justify-center max-w-[800px] text-center text-lg max-md:text-base font-light">
          We are a company that helps students around the world to find the best
          university for them and make their lives as easy as possible.
        </div>
      </div>
      <div className="border-t-2 border-gray-700 w-2/3 max-w-[860px] mx-auto h-min mt-12 rounded-full"></div>
      <div className="flex flex-col gap-3 text-left w-[55%] max-w-[800px] mt-12 mx-auto">
        <p className="font-bold text-base">
          At Uniglow, we&apos;re building the tool of the future
        </p>
        <p className="font-medium text-gray-200">
          My name is Ean, and I&apos;m the founder of Uniglow. I&apos;m a
          software engineer with a passion for technology and a desire to make
          the world a better place. I believe that technology has the power to
          change the world, and I&apos;m dedicated to using that power to help
          people.
        </p>
        <p className="font-medium text-gray-200">
          I&apos;m passionate about helping people find the right university for
          them, and I&apos;m committed to making the process as easy and
          accessible as possible. I believe that technology can play a big role
          in making university search more accessible and user-friendly, and I
          want to be a part of that journey.
        </p>
      </div>
      <div className="w-full h-auto flex-col mt-40 p-20 flex justify-center items-center bg-[#191919]">
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-5 max-w-[800px]">
          <div
            className={`relative col-span-2 rounded-xl ${loading.work1 ? "blur-lg" : ""}`}
          >
            <Image
              src={work1}
              alt="Work 1"
              className="w-full h-full object-cover rounded-xl"
              onLoad={() => handleImageLoad("work1")}
            />
          </div>
          <div
            className={`relative col-span-1 rounded-xl ${loading.work2 ? "blur-lg" : ""}`}
          >
            <Image
              src={work2}
              alt="Work 2"
              className="w-full h-full object-cover filter brightness-[65%] rounded-xl"
              onLoad={() => handleImageLoad("work2")}
            />
          </div>
          <div
            className={`relative col-span-1 rounded-xl ${loading.work3 ? "blur-lg" : ""}`}
          >
            <Image
              src={work3}
              alt="Work 3"
              className="w-full h-full object-cover filter brightness-75 rounded-xl"
              onLoad={() => handleImageLoad("work3")}
            />
          </div>
          <div
            className={`relative col-span-2 rounded-xl ${loading.work4 ? "blur-lg" : ""}`}
          >
            <Image
              src={work4}
              alt="Work 4"
              className="w-full h-full object-cover filter brightness-75 rounded-xl"
              onLoad={() => handleImageLoad("work4")}
            />
          </div>
        </div>
        <div className="text-4xl max-md:text-3xl font-bold max-w-[800px] text-gray-300 mt-12">
          <span className="text-white font-extrabold">Our mission</span> is to
          make the lives of students around the world as enjoyable and easy as
          possible.
        </div>
        <LoadingButton
          onClick={handleRedirectMission}
          className="flex justify-center items-center mt-8 ml-auto px-5 py-3 bg-[#003dcc] rounded-xl scale-100 hover:scale-110 transition-all duration-300 ease-in-out"
          loadingColorHex="#FFF"
        >
          Read more
        </LoadingButton>
      </div>
    </div>
  );
};

export default Hero;
