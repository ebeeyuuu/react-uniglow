"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import preview from "@/images/preview.png";
import LoadingButton from "@/app/components/LoadingButton";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleGetStarted = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/pages/signup");
  };

  const handleContactUs = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/pages/contact");
  };

  return (
    <div className="w-full h-full flex flex-col gap-9 smooth-animation mt-52 max-md:mt-32 justify-center items-center">
      <div
        className="relative flex flex-row justify-center scale-100 max-md:scale-[80%] smooth-animation items-center gap-x-0 bg-white rounded-full"
        data-aos="fade-up"
      >
        <div className="absolute left-0 top-0 text-base bg-white text-black px-4 py-2 rounded-full z-10">
          New
        </div>
        <div className="ml-8 pl-12 text-base bg-gray-300 text-black px-3 py-2 rounded-full relative">
          AI University Matcher 🎉
        </div>
      </div>

      <div
        className="text-center smooth-animation text-6xl max-[1000px]:text-5xl max-[800px]:text-4xl font-extrabold flex justify-center flex-col"
        data-aos="fade-up"
      >
        <span className="block">Find Your</span>
        <span className="block">Dream University</span>
      </div>
      <div
        className="w-5/12 mx-auto flex justify-center text-center font-light max-[1000px]:text-sm"
        data-aos="fade-up"
      >
        Easy, powerful, and data-driven. Explore the world&apos;s universities
        and the one for you!
      </div>
      <div
        className="flex flex-row gap-4 justify-center mt-0 max-md:flex-col"
        data-aos="fade-up"
      >
        <LoadingButton
          onClick={handleGetStarted}
          className="bg-[#003dcc] rounded-xl px-5 py-3 scale-100 hover:scale-110 smooth-animation max-md:px-14 font-medium text-base max-[1000px]:text-sm"
          loadingColorHex="#FFF"
        >
          Get started
        </LoadingButton>
        <LoadingButton
          onClick={handleContactUs}
          className="border-white rounded-xl px-5 py-3 bg-gray-300 scale-100 hover:scale-110 smooth-animation max-md:px-14 font-medium text-base text-black max-[1000px]:text-sm"
          loadingColorHex="#000"
        >
          Contact us
        </LoadingButton>
      </div>

      <div
        className={`relative w-3/4 h-auto max-w-[1800px] min-[200px] p-10 rounded-2xl max-md:mt-8 max-md:w-[90%] max-md:p-0 transition duration-300 ${loading ? "blur-lg" : ""}`}
        data-aos="fade-up"
      >
        <Image
          src={preview}
          alt="Preview"
          className="w-full h-auto"
          quality={100}
          onLoad={handleImageLoad} // Trigger function when image loads
        />
      </div>
    </div>
  );
};

export default Hero;
