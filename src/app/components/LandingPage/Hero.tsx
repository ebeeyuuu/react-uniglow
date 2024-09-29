"use client";

import React, { useState } from "react";
import Image from "next/image";
import preview from "@/images/preview.png";
import ButtonLoad from "@/app/components/ButtonLoad";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("");
  const router = useRouter();

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleButtonClick = (text: string, path: string) => {
    setLoadingText(text);
    setTimeout(() => {
      setLoadingText(""); // Reset the loading text
    }, 2000); // Duration for loading animation
    router.push(path);
  };

  return (
    <div className="w-full h-full flex flex-col gap-9 max-md:gap-1 smooth-animation mt-52 justify-center items-center">
      <div className="relative flex flex-row justify-center scale-100 max-md:scale-[80%] smooth-animation items-center gap-x-0 bg-white rounded-full">
        <div className="absolute left-0 top-0 text-base bg-white text-black px-4 py-2 rounded-full z-10">
          New
        </div>
        <div className="ml-8 pl-12 text-base bg-gray-300 text-black px-3 py-2 rounded-full relative">
          AI University Matcher 🎉
        </div>
      </div>

      <div className="text-center scale-100 max-md:scale-[70%] smooth-animation text-6xl font-extrabold flex justify-center flex-col">
        <span className="block">Find Your</span>
        <span className="block">Dream University</span>
      </div>
      <div className="w-5/12 mx-auto flex justify-center text-center font-light">
        Easy, powerful, and data-driven. Explore the world&apos;s universities
        and the one for you!
      </div>
      <div className="flex flex-row gap-4 justify-center mt-0 max-md:mt-7 max-md:flex-col">
        <motion.button
          className="bg-[#003dcc] rounded-xl px-5 py-3 scale-100 hover:scale-110 smooth-animation max-md:px-14 font-medium text-base"
          onClick={() => handleButtonClick("Get started", "/pages/signup")}
          variants={buttonVariants}
          initial="hidden"
          animate={loadingText === "Get started" ? "exit" : "visible"}
        >
          {loadingText === "Get started" ? <ButtonLoad /> : "Get started"}
        </motion.button>
        <motion.button
          className="border-white rounded-xl px-5 py-3 bg-gray-300 scale-100 hover:scale-110 smooth-animation text-black max-md:px-14 font-medium text-base"
          onClick={() => handleButtonClick("Contact us", "/pages/contact")}
          variants={buttonVariants}
          initial="hidden"
          animate={loadingText === "Contact us" ? "exit" : "visible"}
        >
          {loadingText === "Contact us" ? <ButtonLoad /> : "Contact us"}
        </motion.button>
      </div>

      <div
        className={`relative w-3/4 h-auto max-w-[1800px] min-w-[500px] p-10 rounded-2xl max-md:mt-8 transition duration-300 ${loading ? "blur-lg" : ""}`}
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
