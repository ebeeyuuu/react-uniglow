"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import preview from "@/images/preview.png";
import LoadingButton from "@/app/components/LoadingButton";
import { useRouter } from "next/navigation";
import { GiPartyPopper } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init();
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
    <div className="w-full h-full flex flex-col smooth-animation mt-52 max-md:mt-32 justify-center items-center">
      <div
        className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-10 border border-white/10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <GiPartyPopper className="w-4 h-4 text-purple-400" />
        <span className="text-xs lg:text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
          Your Career Journey Starts Here
        </span>
      </div>

      <h1
        className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent text-center"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        Find Your <br />
        Dream University <br />
      </h1>
      <p className="text-sm lg:text-lg text-white/60 max-w-2xl mb-8 text-center">
        Easy, powerful, and data-driven. Explore the world&apos;s universities
        and the one for you!
      </p>
      <div
        className="flex flex-row gap-4 justify-center mt-0 max-md:flex-col"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <LoadingButton
          onClick={handleGetStarted}
          className="text-xs lg:text-base bg-white rounded-xl bg-white hover:bg-white/90 flex-row flex justify-center items-center text-black smooth-animation px-5 py-3"
          loadingColorHex="#000"
        >
          Get started
        </LoadingButton>
        <LoadingButton
          onClick={handleContactUs}
          className="text-xs lg:text-base border-2 border-white/10 hover:bg-white/5 px-5 py-3 rounded-xl smooth-animation"
          loadingColorHex="#FFF"
        >
          Contact us
        </LoadingButton>
      </div>
      <div
        className={`relative w-3/4 h-auto max-w-[1800px] min-[200px] p-10 rounded-2xl max-md:mt-8 max-md:w-[90%] max-md:p-0 transition duration-300 ${loading ? "blur-lg" : ""}`}
        data-aos="fade-up"
        data-aos-delay="450"
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
