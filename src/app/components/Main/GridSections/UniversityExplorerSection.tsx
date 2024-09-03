"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHover } from "@/context/hoverContext";
import { useRouter } from "next/navigation";

import Explore from "@/app/components/Icons/Explore";

import Image from "next/image";
import rippleGIF from "@/images/ripple.gif";

import slide1 from "@/images/harvard.jpg";
import slide2 from "@/images/3.jpg";
import slide3 from "@/images/4.jpg";
import slide4 from "@/images/5.jpg";
import slide5 from "@/images/11.jpg";

interface UniversityExplorerSectionProps {
  index: number;
}

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

const UniversityExplorerSection: React.FC<UniversityExplorerSectionProps> = ({
  index,
}) => {
  const router = useRouter();
  const { hoverStates, setHoverState } = useHover();
  const isHovered = hoverStates[index];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="row-span-2 col-span-3 max-[2000px]:col-span-6 max-[2000px]:-order-7 bg-black max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl border-[3px] border-[#0037b8] hover:border-[#f4b034] font-bold text-center cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden"
      onClick={() => router.push("/pages/main/university-explorer")}
      onMouseEnter={() => setHoverState(index, true)}
      onMouseLeave={() => setHoverState(index, false)}
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <Image
          src={rippleGIF}
          alt=""
          className={`w-full h-full object-cover transition-opacity ${
            isHovered
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
          className="absolute z-10 flex items-center justify-center flex-col gap-y-[10px]"
          initial={{ opacity: 1, y: 0 }}
          animate={isHovered ? { opacity: 1, y: -10 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Explore
            className={`max-[1000px]:w-[50px] max-[1000px]:h-[50px] max-[1400px]:w-[60px] max-[1400px]:h-[60px] max-[2000px]:w-[70px] max-[2000px]:h-[70px] max-[3000px]:w-[80px] max-[3000px]:h-[80px] max-[4000px]:w-[90px] max-[4000px]:h-[90px] smooth-animation ${
              isHovered ? "text-white" : "text-[#02ac81]"
            }`}
          />
          <motion.p
            className="max-[1150px]:text-base max-[2000px]:text-lg max-[2800px]:text-xl max-[4000px]:text-2xl w-5/12 mx-auto text-wrap font-light"
            initial={{ opacity: 1, x: 0 }}
            animate={isHovered ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
          >
            Struggling to access comprehensive database of global universities
            that easily filterable to match your criteria.
            <span className="ml-[5px]" style={{ fontWeight: 700 }}>
              Then try use our...
            </span>
          </motion.p>
        </motion.div>
        <motion.div
          className="absolute text-4xl z-10 max-[1300px]:text-3xl flex items-center justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ fontWeight: 750 }}
        >
          University Explorer
        </motion.div>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute text-lg text-center z-10 mt-[90px] ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ y: 30, opacity: 0 }}
            animate={
              isHovered && index === currentIndex
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
                isHovered && index === currentIndex
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0, ease: "easeInOut" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className={`filter brightness-[60%] ${
                  isHovered ? "" : "opacity-0 hidden"
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
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
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
  );
};

export default UniversityExplorerSection;
