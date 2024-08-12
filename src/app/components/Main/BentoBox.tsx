"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoPersonFill } from "react-icons/go";

import BrainAI from "@/app/components/Icons/BrainAI";
import VROutline from "@/app/components/Icons/VROutline";
import AnimatedGrid from "./AnimatedGrid";
import WaveAnimation from "./WaveAnimation";
import MentorConnectionBeams from "./MentorConnectionBeams";
import CircleProgressBar from "./CircleProgressBar";

import rippleGIF from "@/images/ripple.gif";

import slide1 from "@/images/harvard.jpg";
import slide2 from "@/images/3.jpg";
import slide3 from "@/images/4.jpg";
import slide4 from "@/images/5.jpg";
import slide5 from "@/images/11.jpg";

import Explore from "../Icons/Explore";
import Mentoring from "../Icons/Mentoring";
import Grid from "../Icons/Grid";
import Rankings from "../Icons/Rankings";
import Graduation from "../Icons/Graduation";
import Calendar from "../Icons/Calendar"

const images = [
  { src: slide1, alt: "Slide 1", description: "Harvard Univeristy" },
  { src: slide2, alt: "Slide 2", description: "Stanford University" },
  {
    src: slide3,
    alt: "Slide 3",
    description: "Massachussets Institute of Technology",
  },
  { src: slide4, alt: "Slide 4", description: "Yale University" },
  { src: slide5, alt: "Slide 5", description: "University of Pennsylvania" },
];

const BentoBox = () => {
  const router = useRouter();
  const [hoverStates, setHoverStates] = useState(Array(9).fill(false));

  const handleHover = (index: number, value: any) => {
    setHoverStates((prev) => {
      const newState = [...prev];
      newState[index] = value;
      return newState;
    });
  };

  const containerRef = useRef(null);
  const nodeRefs = Array.from({ length: 6 }, () => useRef(null));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[96.6%] ml-[50px] flex justify-center items-center font-bold text-center mt-[2px] max-[1000px]:ml-0 px-[15px] max-[700px]:px-[10px] max-[700px]:py-[15px]">
      <div className="grid grid-cols-6 grid-rows-3 gap-[20px] w-full h-full max-[2000px]:grid-rows-6 max-[2000px]:grid-cols-6 max-[700px]:gap-[10px]">
        <div
          className={`relative row-span-1 col-span-2 max-[2000px]:col-span-4 max-[2000px]:-order-9 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-500 ease-in-out overflow-hidden border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 bg-black`}
          onClick={() => router.push("/pages/main/ai-matching")}
          onMouseEnter={() => handleHover(0, true)}
          onMouseLeave={() => handleHover(0, false)}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <motion.div
              className="absolute flex items-center justify-center flex-col gap-y-[10px]"
              initial={{ x: 0 }}
              animate={hoverStates[0] ? { x: -30, opacity: 0 } : { x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <BrainAI
                className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${
                  hoverStates[0] ? "text-white" : "text-[#9c98f0]"
                }`}
              />
              <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light">
                Need a way to find your perfect university that fits based on
                your profile and preferences?
                <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                  Hover me to meet our:
                </span>
              </p>
            </motion.div>
            <motion.div
              className={`absolute flex items-center justify-center max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-500 ease-in-out ${
                hoverStates[0] ? "opacity-100" : "opacity-0"
              }`}
              initial={{ x: 30 }}
              animate={hoverStates[0] ? { x: 0 } : { x: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              AI Matcher
            </motion.div>
            <WaveAnimation />
          </div>
        </div>
        <div
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[2000px]:-order-8 border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-500 ease-in-out overflow-hidden bg-black"
          onClick={() => router.push("/pages/main/vr-tours")}
          onMouseEnter={() => handleHover(1, true)}
          onMouseLeave={() => handleHover(1, false)}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <motion.div
              className="absolute flex items-center justify-center flex-col gap-y-[10px]"
              initial={{ x: 0 }}
              animate={hoverStates[1] ? { x: -30, opacity: 0 } : { x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <VROutline
                className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${
                  hoverStates[1] ? "text-white" : "text-[#9c98f0]"
                }`}
              />
              <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light">
                Don't know what campuses look like? Experience
                <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                  it with our:
                </span>
              </p>
            </motion.div>
            <motion.div
              className={`absolute flex items-center justify-center z-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-700 delay-200 ease-in-out ${
                hoverStates[1] ? "opacity-100" : "opacity-0"
              }`}
              initial={{ x: 30 }}
              animate={hoverStates[1] ? { x: 0 } : { x: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              VR Tours
            </motion.div>
            <AnimatedGrid
              numSquares={60}
              maxOpacity={hoverStates[1] ? 0.4 : 0}
              duration={2.5}
              repeatDelay={0.3}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "absolute inset-x-0 inset-y-[-30%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                `transition-all duration-700 ease-in-out z-10 ${
                  hoverStates[1]
                    ? "opacity-100 skew-y-12"
                    : "opacity-100 skew-y-0"
                }`
              )}
            />
          </div>
        </div>
        <div
          className="row-span-2 col-span-1 max-[2000px]:col-span-2 max-[1200px]:row-span-1 border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-black"
          onClick={() => router.push("/pages/main/mentors")}
          onMouseEnter={() => handleHover(2, true)}
          onMouseLeave={() => handleHover(2, false)}
          ref={containerRef} // Ref for container
        >
          <div className="relative p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            <motion.div
              className="flex justify-center items-center flex-col gap-y-[10px] z-10 w-full"
              initial={{ y: 0 }}
              animate={hoverStates[2] ? { y: 100, opacity: 0 } : { y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Mentoring
                className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${
                  hoverStates[2] ? "text-white" : "text-[#9c98f0]"
                }`}
              />
              <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto font-light w-full">
                Need advice on univeristies?
                <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                  Check our:
                </span>
              </p>
            </motion.div>
          </div>
          <motion.div
            className="absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl z-50 flex items-center justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={
              hoverStates[2] ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Mentors
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] flex flex-wrap justify-center items-center">
            {nodeRefs.map((ref, index) => (
              <div
                key={index}
                ref={ref}
                className={`absolute flex justify-center items-center text-white w-[70px] h-[70px] rounded-full transform ${
                  index === 0
                    ? "translate-x-[calc(115%-20px)] translate-y-[-110px]"
                    : index === 1
                      ? "translate-x-[calc(210%-20px)] translate-y-[0]"
                      : index === 2
                        ? "translate-x-[calc(115%-20px)] translate-y-[110px]"
                        : index === 3
                          ? "translate-x-[calc(-115%+20px)] translate-y-[110px]"
                          : index === 4
                            ? "translate-x-[calc(-210%+20px)] translate-y-[0]"
                            : "translate-x-[calc(-115%+20px)] translate-y-[-110px]"
                } ${
                  hoverStates[2] ? "opacity-100" : "opacity-0"
                } transition-opacity duration-700 ease-in-out`}
              >
                <GoPersonFill size={30} className="text-[#4f46e5]" />
              </div>
            ))}
          </div>

          {nodeRefs.map((fromRef, fromIndex) =>
            nodeRefs.map((toRef, toIndex) => {
              if (fromIndex < toIndex) {
                return (
                  <MentorConnectionBeams
                    key={`${fromIndex}-${toIndex}`}
                    containerRef={containerRef}
                    fromRef={fromRef}
                    toRef={toRef}
                    pathColor="white"
                    pathWidth={1}
                    gradientStartColor="#ff5f6d"
                    gradientStopColor="#ffc371"
                    duration={5}
                    delay={Math.random()}
                    className={`${
                      hoverStates[2]
                        ? "opacity-100 scale-100"
                        : "opacity-100 scale-150"
                    } transition-all duration-700 ease-in-out filter brightness-125`}
                  />
                );
              }
            })
          )}
        </div>
        <div
          className="row-span-2 col-span-1 max-[2000px]:col-span-2 max-[1200px]:row-span-1 max-[1200px]:col-span-4 border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative bg-black"
          onClick={() => router.push("/pages/main/programs")}
          onMouseEnter={() => handleHover(3, true)}
          onMouseLeave={() => handleHover(3, false)}
        >
          <div className="p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            <motion.div
              className="flex justify-center items-center flex-col gap-y-[10px] z-10"
              initial={{ y: 0 }}
              animate={
                hoverStates[3]
                  ? { y: 100, opacity: 0 }
                  : {
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.2,
                      },
                    }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Grid
                className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${
                  hoverStates[3] ? "text-white" : "text-[#9c98f0]"
                }`}
              />
              <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light">
                Curious to learn about what activities univerities offer?
                <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                  Then check out our library of:
                </span>
              </p>
            </motion.div>
          </div>
          <motion.div
            className="absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl z-50 flex items-center justify-center"
            initial={{ y: -30, opacity: 0 }}
            animate={
              hoverStates[3]
                ? {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }
                : { y: -100, opacity: 0 }
            }
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            Programs
          </motion.div>
          <motion.div
            className={`absolute top-0 w-full grid grid-rows-1 grid-cols-3 h-[15%] transition-all duration-500 ease-in-out ${
              hoverStates[3] ? "opacity-50" : "opacity-35"
            }`}
          >
            <div
              className={`row-span-1 col-span-2 border-r-4 border-b-4 text-transparent border-white/50 transition-all duration-500 ease-in-out ${
                hoverStates[3] ? "border-t-4" : ""
              }`}
            >
              1
            </div>
            <div
              className={`row-span-1 col-span-1 border-l-4 border-b-4 text-transparent border-white/50 transition-all duration-500 ease-in-out ${
                hoverStates[3] ? "border-t-4" : ""
              }`}
            >
              1
            </div>
          </motion.div>
          <motion.div
            className={`absolute top-0 w-full grid grid-rows-1 grid-cols-3 h-[15%] mt-[15%] transition-all duration-500 ease-in-out ${
              hoverStates[3] ? "opacity-50" : "opacity-35"
            }`}
          >
            <div
              className={`row-span-1 col-span-1 border-t-4 border-r-4 border-b-4 text-transparent border-white/50 transition-all duration-500 ease-in-out`}
            >
              1
            </div>
            <div
              className={`row-span-1 col-span-2 border-t-4 border-l-4 border-b-4 text-transparent border-white/50 transition-all duration-500 ease-in-out`}
            >
              1
            </div>
          </motion.div>
          <motion.div
            className={`absolute bottom-0 w-full grid grid-rows-1 grid-cols-3 h-[15%] mb-[15%] transition-all duration-500 ease-in-out ${
              hoverStates[3] ? "opacity-50" : "opacity-35"
            }`}
          >
            <div
              className={`row-span-1 col-span-2 border-t-4 border-r-4 border-b-4 text-transparent border-white/50 transition-all duration-500 ease-in-out`}
            >
              1
            </div>
            <div
              className={`row-span-1 col-span-1 border-t-4 border-l-4 border-b-4 text-transparent border-white/50 transition-all duration-500 ease-in-out`}
            >
              1
            </div>
          </motion.div>
          <motion.div
            className={`absolute bottom-0 w-full grid grid-rows-1 grid-cols-3 h-[15%] transition-all duration-500 ease-in-out ${
              hoverStates[3] ? "opacity-50" : "opacity-35"
            }`}
          >
            <div
              className={`row-span-1 col-span-1 border-r-4 border-t-4 text-transparent border-white/50 transition-all duration-500 ease-in-out ${
                hoverStates[3] ? "border-b-4" : ""
              }`}
            >
              1
            </div>
            <div
              className={`row-span-1 col-span-2 border-l-4 border-t-4 text-transparent border-white/50 transition-all duration-500 ease-in-out ${
                hoverStates[3] ? "border-b-4" : ""
              }`}
            >
              1
            </div>
          </motion.div>
        </div>
        <div
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[1200px]:col-span-4 border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-black"
          onClick={() => router.push("/pages/main/application-tracker")}
          onMouseEnter={() => handleHover(4, true)}
          onMouseLeave={() => handleHover(4, false)}
        >
          <div className="p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10">
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="flex flex-col max-[4000px]:gap-[10px] max-[2000px]:gap-[10px] max-[1000px]:gap-[5px] justify-center items-center">
                <div
                  className={`flex justify-center items-center smooth-animation ${
                    hoverStates[4]
                      ? "mt-[10px] scale-[90%]"
                      : "mt-[-55px] max-[1400px]:scale-[30%] max-[2000px]:scale-[40%] max-[2400px]:scale-[50%] max-[2800px]:scale-[60%] max-[3200px]:scale-[70%] max-[4000px]:scale-[80%]"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <CircleProgressBar
                      min={0}
                      max={100}
                      value={value}
                      gaugePrimaryColor="rgb(79 70 229)"
                      gaugeSecondaryColor="rgb(31, 41, 55)"
                      className=""
                      hideValue={hoverStates[4] ? true : false}
                    />
                  </div>
                </div>
                <motion.div
                  className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light max-[4000px]:mt-[-20px] max-[3000px]:mt-[-30px] max-[2000px]:mt-[-40px] max-[1000px]:mt-[-50px]"
                  initial={{ opacity: 1, x: 0 }}
                  animate={
                    hoverStates[4]
                      ? { opacity: 0, x: -100 }
                      : { opacity: 1, x: 0 }
                  }
                >
                  <p className="max-[1150px]:text-sm max-[2000px]:text-base max-[2800px]:text-lg max-[4000px]:text-xl mx-auto text-wrap font-light">
                    Need to track of your application?
                    <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                      Why not use our:
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row-span-2 col-span-3 max-[2000px]:col-span-6 max-[2000px]:-order-7 bg-black max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 font-bold text-center cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden"
          onClick={() => router.push("/pages/main/university-explorer")}
          onMouseEnter={() => handleHover(5, true)}
          onMouseLeave={() => handleHover(5, false)}
        >
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <Image
              src={rippleGIF}
              alt=""
              className={`w-full h-full object-cover transition-opacity ${
                hoverStates[5]
                  ? "filter brightness-[0%] -z-50 hidden"
                  : "filter brightness-[60%]"
              }`}
              style={{
                boxShadow: "inset 0 0 70px 50px #020202",
              }}
              fill
              unoptimized
            />
            <motion.div
              className="absolute z-50 flex items-center justify-center flex-col gap-y-[10px]"
              initial={{ opacity: 0, y: 0 }}
              animate={
                hoverStates[5] ? { opacity: 1, y: -10 } : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Explore
                className={`max-[1000px]:w-[50px] max-[1000px]:h-[50px] max-[1400px]:w-[60px] max-[1400px]:h-[60px] max-[2000px]:w-[70px] max-[2000px]:h-[70px] max-[3000px]:w-[80px] max-[3000px]:h-[80px] max-[4000px]:w-[90px] max-[4000px]:h-[90px] smooth-animation ${
                  hoverStates[5] ? "text-white" : "text-[#9c98f0]"
                }`}
              />
              <motion.p
                className="max-[1150px]:text-base max-[2000px]:text-lg max-[2800px]:text-xl max-[4000px]:text-2xl w-5/12 mx-auto text-wrap font-light"
                initial={{ opacity: 1, x: 0 }}
                animate={
                  hoverStates[5]
                    ? { opacity: 0, x: -100 }
                    : { opacity: 1, x: 0 }
                }
              >
                Struggling to access comprehensive database of global
                universities that easily filterable to match your criteria.
                <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                  Then try use our...
                </span>
              </motion.p>
            </motion.div>
            <motion.div
              className="absolute text-4xl z-50 max-[1300px]:text-3xl flex items-center justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={
                hoverStates[5] ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ fontWeight: 750 }}
            >
              University Explorer
            </motion.div>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute text-lg text-center z-50 mt-[90px] ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                initial={{ y: 30, opacity: 0 }}
                animate={
                  hoverStates[5] && index === currentIndex
                    ? { y: 0, opacity: 1 }
                    : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ fontWeight: 500 }}
              >
                {image.description}
              </motion.div>
            ))}
            <div className="relative w-full h-full overflow-hidden">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 rounded-[10px] transition-all duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  data-carousel-item={index}
                  initial={{ opacity: 0 }}
                  animate={
                    hoverStates[5] && index === currentIndex
                      ? { opacity: 1 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0, ease: "easeInOut" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className={`filter brightness-[60%] ${
                      hoverStates[5] ? "" : "opacity-0 hidden"
                    }`}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              ))}
            </div>
            <motion.div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50"
              initial={{ opacity: 0 }}
              animate={hoverStates[5] ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
        <div
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-black"
          onClick={() => router.push("/pages/main/university-rankings")}
          onMouseEnter={() => handleHover(6, true)}
          onMouseLeave={() => handleHover(6, false)}
        >
          <div
            className={`p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10`}
          >
            <div className="relative w-full h-full">
              <div className="flex flex-col max-[4000px]:gap-[10px] justify-center items-center w-full h-full">
                <div
                  className={`flex justify-center items-center smooth-animation mt-[-30px] max-[1400px]:scale-[70%] max-[2000px]:scale-[80%] max-[2400px]:scale-[90%] max-[4000px]:scale-[100%]
                  `}
                >
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      hoverStates[6]
                        ? { opacity: 0, x: -100 }
                        : { opacity: 1, x: 0 }
                    }
                  >
                    <Rankings
                      className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] mt-[20px] ${
                        hoverStates[6] ? "text-white" : "text-[#9c98f0]"
                      }`}
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="max-[1150px]:text-base max-[2000px]:text-lg max-[2800px]:text-xl max-[4000px]:text-2xl max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light mt-[-10px]"
                  initial={{ opacity: 1, x: 0 }}
                  animate={
                    hoverStates[6]
                      ? { opacity: 0, x: -100 }
                      : { opacity: 1, x: 0 }
                  }
                >
                  <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg mx-auto text-wrap font-light">
                    Want some rankings?
                    <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                      Then use our:
                    </span>
                  </p>
                </motion.div>
                <motion.div
                  className={`absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl z-50 flex items-center justify-center rounded-[10px]`}
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    hoverStates[6]
                      ? { x: 0, opacity: 1 }
                      : { x: 100, opacity: 0 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  University Rankings
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-between items-end">
            {[1, 2, 3, 4, 5].map((rank, index) => {
              const widthClasses = [
                "w-1/6",
                "w-1/3",
                "w-1/2",
                "w-2/3",
                "w-5/6",
              ][index];

              // Determine the correct suffix
              const suffix =
                rank === 1
                  ? "st"
                  : rank === 2
                    ? "nd"
                    : rank === 3
                      ? "rd"
                      : "th";

              return (
                <div
                  key={rank}
                  className={`h-1/5 border-b border-t border-white/10 relative text-center text-sm transition-all duration-700 ease-in-out ${
                    hoverStates[6]
                      ? `${widthClasses} text-white/40 border-l`
                      : "w-full text-transparent"
                  }`}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {rank}
                    {suffix}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-black"
          onClick={() => router.push("/pages/main/campus-events")}
          onMouseEnter={() => handleHover(7, true)}
          onMouseLeave={() => handleHover(7, false)}
        >
          <div
            className={`p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10`}
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="flex flex-col max-[4000px]:gap-[10px] justify-center items-center w-full h-full">
                <div
                  className={`flex justify-center items-center smooth-animation mt-[-30px] max-[1400px]:scale-[70%] max-[2000px]:scale-[80%] max-[2400px]:scale-[90%] max-[4000px]:scale-[100%]
                  `}
                >
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      hoverStates[7]
                        ? { opacity: 0, x: 100 }
                        : { opacity: 1, x: 0 }
                    }
                  >
                    <Calendar
                      className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] mt-[30px] ${
                        hoverStates[7] ? "text-white" : "text-[#9c98f0]"
                      }`}
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="max-[1150px]:text-base max-[2000px]:text-lg max-[2800px]:text-xl max-[4000px]:text-2xl w-full mx-auto text-wrap font-light"
                  initial={{ opacity: 1, x: 0 }}
                  animate={
                    hoverStates[7]
                      ? { opacity: 0, x: 100 }
                      : { opacity: 1, x: 0 }
                  }
                >
                  <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg mx-auto text-wrap font-light max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%]">
                    What events are going on?
                    <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                      See our library of:
                    </span>
                  </p>
                </motion.div>
                <motion.div
                  className={`absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl z-50 flex items-center justify-center rounded-[10px]`}
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    hoverStates[7]
                      ? { x: 0, opacity: 1 }
                      : { x: -100, opacity: 0 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  Campus Events
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row-span-1 col-span-2 max-[2000px]:col-span-4 border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-black"
          onClick={() => router.push("/pages/main/scholarships")}
          onMouseEnter={() => handleHover(8, true)}
          onMouseLeave={() => handleHover(8, false)}
        >
          <div className="p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="flex flex-col max-[4000px]:gap-[10px] justify-center items-center w-full h-full">
                <div
                  className={`flex justify-center items-center smooth-animation mt-[-30px] max-[1400px]:scale-[70%] max-[2000px]:scale-[80%] max-[2400px]:scale-[90%] max-[4000px]:scale-[100%]
                  `}
                >
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      hoverStates[8]
                        ? { opacity: 0, x: -100 }
                        : { opacity: 1, x: 0 }
                    }
                  >
                    <Graduation
                      className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] mt-[20px] ${
                        hoverStates[8] ? "text-white" : "text-[#9c98f0]"
                      }`}
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="max-[1150px]:text-base max-[2000px]:text-lg max-[2800px]:text-xl max-[4000px]:text-2xl w-[75%] mx-auto text-wrap font-light"
                  initial={{ opacity: 1, x: 0 }}
                  animate={
                    hoverStates[8]
                      ? { opacity: 0, x: -100 }
                      : { opacity: 1, x: 0 }
                  }
                >
                  <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg mx-auto text-wrap font-light max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%]">
                    Need a guide on getting scholarships
                    <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                      Check out our way of getting you:
                    </span>
                  </p>
                </motion.div>
                <motion.div
                  className={`absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl z-50 flex items-center justify-center rounded-[10px]`}
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    hoverStates[8]
                      ? { x: 0, opacity: 1 }
                      : { x: 100, opacity: 0 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  100% Scholarships
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
