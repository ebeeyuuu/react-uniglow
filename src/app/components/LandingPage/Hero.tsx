"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import preview from "@/images/preview.png";
import LoadingButton from "@/app/components/LoadingButton";
import { useRouter } from "next/navigation";
import { BsArrowRight, BsStars } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleGetStarted = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/pages/signup");
  };

  const handleContactUs = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/pages/contact");
  };

  return (
    <section
      data-aos="fade-up"
      className="relative min-h-[90vh] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 rounded-full mt-24 px-6 py-2 mb-10 border border-white/5">
          <BsStars className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium bg-linear-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Your Academic Journey Starts Here
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold pb-10 bg-linear-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
          Find Your
          <br /> Dream University
        </h1>

        <p className="text-lg text-white/60 max-w-xl mb-8">
          Navigate your path to higher education with personalized guidance,
          AI-powered matching, and expert support every step of the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <LoadingButton
            loadingColorHex="#000"
            className="bg-white flex flex-row rounded-2xl px-5 py-3 gap-2 items-center justify-center text-black hover:bg-white/90 smooth-animation"
            onClick={handleGetStarted}
          >
            Get Started
            <BsArrowRight className="ml-2 h-4 w-4" />
          </LoadingButton>
          <LoadingButton
            loadingColorHex="#FFF"
            className="border px-5 py-3 border-white/10 hover:bg-white/5 rounded-2xl smooth-animation"
            onClick={handleContactUs}
          >
            Contact Us
          </LoadingButton>
        </div>

        <div className="relative w-full max-w-6xl">
          <div className="relative rounded-[2rem] backdrop-blur-xs overflow-hidden">
            <Image
              src={preview}
              alt="Students at university"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
