"use client"

import React, { useState, useEffect } from 'react'
import UniversityExplorerCarousel from './UniversityExplorerCarousel'
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import Image from 'next/image'
import { motion } from 'framer-motion'

import BrainAI from '@/app/components/Icons/BrainAI'
import VROutline from '@/app/components/Icons/VROutline'
import AnimatedGrid from './AnimatedGrid'
import mentorImage from '@/images/mentor.jpg'
import placeholderImage from '@/images/university-placeholder.jpg'

import slide1 from "@/images/harvard.jpg";
import slide2 from "@/images/3.jpg";
import slide3 from "@/images/4.jpg";
import slide4 from "@/images/5.jpg";
import slide5 from "@/images/11.jpg";

import Explore from "../Icons/Explore";

const images = [
  { src: slide1, alt: 'Slide 1', description: 'Harvard Univeristy' },
  { src: slide2, alt: 'Slide 2', description: 'Stanford University' },
  { src: slide3, alt: 'Slide 3', description: 'MIT' },
  { src: slide4, alt: 'Slide 4', description: 'Yale University' },
  { src: slide5, alt: 'Slide 5', description: 'University of Pennsylvania' },
]

const BentoBox = () => {
  const router = useRouter();
  const [isAIHovered, setIsAIHovered] = useState(false)
  const [isVRHovered, setIsVRHovered] = useState(false)
  const [isMentorHovered, setIsMentorHovered] = useState(false)
  const [isProgramsHovered, setIsProgramsHovered] = useState(false)
  const [isAppTrackerHovered, setIsAppTrackerHovered] = useState(false)
  const [isUniExplorerHovered, setIsUniExplorerHovered] = useState(false)
  const [isUniRankingsHovered, setIsUniRankingsHovered] = useState(false)
  const [isCampusEventsHovered, setIsCampusEventsHovered] = useState(false)
  const [isScholarshipsHovered, setIsScholarshipsHovered] = useState(false)

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[96.6%] ml-[50px] flex justify-center items-center font-bold text-center mt-[2px] max-[700px]:ml-0 px-[15px] max-[700px]:px-[10px] max-[700px]:py-[15px]">
      <div className="grid grid-cols-6 grid-rows-3 gap-[20px] w-full h-full max-[2000px]:grid-rows-6 max-[2000px]:grid-cols-6 max-[700px]:gap-[15px]">
        <div 
          className={`relative row-span-1 col-span-2 max-[2000px]:col-span-4 max-[2000px]:-order-9 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out overflow-hidden border-4 border-[#003366] hover:border-0 `} 
          onClick={() => router.push('/pages/main/ai-matching')}
          onMouseEnter={() => setIsAIHovered(true)}
          onMouseLeave={() => setIsAIHovered(false)}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <motion.div 
              className="absolute flex items-center justify-center"
              initial={{ x: 0 }}
              animate={isAIHovered ? { x: -30, opacity: 0 } : { x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <BrainAI className={`transition-all duration-700 ease-in-out w-[50px] h-[50px]`} />
            </motion.div>
            <motion.div
              className="absolute flex items-center justify-center z-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out"
              initial={{ x: 30, opacity: 0 }}
              animate={isAIHovered ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              AI Matcher
            </motion.div>
            <Image 
              src={placeholderImage}
              layout={'responsive'}
              alt="Image"
              className={`absolute inset-0 object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full transition-opacity duration-700 ease-in-out ${isAIHovered ? "opacity-60" : "opacity-0"}`}
            />
          </div>
        </div>
        <div 
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[2000px]:-order-8 bg-[#003366]/0 border-4 border-[#003366] hover:bg-[#003366] hover:border-0 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out overflow-hidden" 
          onClick={() => router.push('/pages/main/vr-tours')}
          onMouseEnter={() => setIsVRHovered(true)}
          onMouseLeave={() => setIsVRHovered(false)}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <motion.div 
              className="absolute flex items-center justify-center"
              initial={{ x: 0 }}
              animate={isVRHovered ? { x: -30, opacity: 0 } : { x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <VROutline className={`transition-all duration-700 ease-in-out w-[50px] h-[50px]`} />
            </motion.div>
            <motion.div
              className="absolute flex items-center justify-center z-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out"
              initial={{ x: 30, opacity: 0 }}
              animate={isVRHovered ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              AI Matcher
            </motion.div>
            <AnimatedGrid
              numSquares={60}
              maxOpacity={0.3}
              duration={2.5}
              repeatDelay={0.3}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "absolute inset-x-0 inset-y-[-30%] skew-y-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                `transition-opacity duration-700 ease-in-out z-10 ${isVRHovered ? "opacity-100" : "opacity-0" }`,
              )}
            />
          </div>
        </div>
        <div 
          className="row-span-2 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden" 
          onClick={() => router.push('/pages/main/mentors')}
          onMouseEnter={() => setIsMentorHovered(true)}
          onMouseLeave={() => setIsMentorHovered(false)}
        >
          <Image 
            src={mentorImage} 
            alt="Mentor image" 
            className={`absolute inset-0 object-cover w-full h-full transition-all duration-700 ease-in-out ${isMentorHovered ? "transform scale-110 filter brightness-[80%]" : "scale-100 filter brightness-50"}`} 
          />
          <div className={`relative z-10 p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out ${isMentorHovered ? "text-white" : "text-gray-300"}`}>
            Mentors
          </div>
        </div>
        <div 
          className="row-span-2 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative" 
          onClick={() => router.push('/pages/main/programs')}
          onMouseEnter={() => setIsProgramsHovered(true)}
          onMouseLeave={() => setIsProgramsHovered(false)}
        >
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            <span className={`inline-block transition-transform duration-500 ${isProgramsHovered ? "transform translate-y-[-10px] scale-110" : "translate-y-0 scale-100"}`}>
              Programs
            </span>
            {isProgramsHovered && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white animate-expandLine"></div>
            )}
          </div>
        </div>
        <div 
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden" 
          onClick={() => router.push('/pages/main/application-tracker')}
          onMouseEnter={() => setIsAppTrackerHovered(true)}
          onMouseLeave={() => setIsAppTrackerHovered(false)}
        >
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10">
            Application Tracker
          </div>
          {isAppTrackerHovered && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-full h-[4px] bg-white absolute bottom-0 animate-timeline"></div>
            </div>
          )}
        </div>
        <div 
          className={`row-span-2 col-span-3 max-[2000px]:col-span-6 max-[2000px]:-order-7 bg-[#003366]/70 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl border-4 border-[#003366] font-bold text-center cursor-pointer transition-all duration-300 ease-in-out ${isUniExplorerHovered ? "filter brightness-[130%]" : "filter brightness-[100%]"}`} 
          onClick={() => router.push('/pages/main/university-explorer')}
          onMouseEnter={() => setIsUniExplorerHovered(true)}
          onMouseLeave={() => setIsUniExplorerHovered(false)}
        >
          <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 mt-[-60px]">
              <Explore className="w-[60px] h-[60px]"/>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl z-50 max-[1300px]:text-3xl mt-[10px]" style={{ fontWeight: 750 }}>
              University Explorer
            </div>
            {images.map((image, index) => (
              <div 
                key={index}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg z-50 mt-[70px] ${index === currentIndex ? "opacity-100" : "opacity-0"}`} 
                style={{ fontWeight: 500 }}
              >
                {image.description}
              </div>
            ))}
            <div className="relative w-full h-full overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 rounded-[10px] transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  data-carousel-item={index}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className={`transition-all duartion-1000 ease-in-out ${isUniExplorerHovered ? "filter brightness-[130%]" : "filter brightness-[100%]"}`}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover"
                    }} />
                </div>
              ))}
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div 
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden" 
          onClick={() => router.push('/pages/main/university-rankings')}
          onMouseEnter={() => setIsUniRankingsHovered(true)}
          onMouseLeave={() => setIsUniRankingsHovered(false)}
        >
          <div className={`p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10 ${isUniRankingsHovered ? "text-yellow-500" : "text-white"}`}>
            University Rankings
          </div>
          {isUniRankingsHovered && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="animate-rankings bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text font-extrabold text-4xl">
                #1
              </div>
            </div>
          )}
        </div>
        <div 
          className="row-span-1 col-span-1 max-[2000px]:col-span-2 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden" 
          onClick={() => router.push('/pages/main/campus-events')}
          onMouseEnter={() => setIsCampusEventsHovered(true)}
          onMouseLeave={() => setIsCampusEventsHovered(false)}
        >
          <div className={`p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10`}>
            Campus Events
          </div>
          {isCampusEventsHovered && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="animate-confetti"></div>
            </div>
          )}
        </div>
        <div 
          className="row-span-1 col-span-2 max-[2000px]:col-span-4 bg-[#003366] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden" 
          onClick={() => router.push('/pages/main/scholarships')}
          onMouseEnter={() => setIsScholarshipsHovered(true)}
          onMouseLeave={() => setIsScholarshipsHovered(false)}
        >
          <div className="p-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
            Scholarships
          </div>
          {isScholarshipsHovered && (
            <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
              <div className="animate-rise">
                💰
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BentoBox;