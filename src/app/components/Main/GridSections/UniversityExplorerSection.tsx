"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Explore from "@/app/components/Icons/Explore";
import Image from "next/image";

import slide1 from "@/images/harvard.jpg";
import slide2 from "@/images/3.jpg";
import slide3 from "@/images/4.jpg";
import slide4 from "@/images/5.jpg";
import slide5 from "@/images/11.jpg";

const images = [
  { src: slide1, alt: "Slide 1", description: "Harvard University" },
  { src: slide2, alt: "Slide 2", description: "Stanford University" },
  {
    src: slide3,
    alt: "Slide 3",
    description: "Massachusetts Institute of Technology",
  },
  { src: slide4, alt: "Slide 4", description: "Yale University" },
  { src: slide5, alt: "Slide 5", description: "University of Pennsylvania" },
];

const UniversityExplorerSection = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="row-span-2 col-span-3 max-[2000px]:col-span-6 max-[2000px]:-order-7 bg-gradient-to-b from-[#272727] to-[#181818] max-[700px]:text-lg rounded-[10px] flex justify-center items-center font-bold text-center cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden"
      onClick={() => router.push("/pages/main/university-explorer")}
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <motion.div
          className="absolute z-10 max-sm:text-lg max-md:text-xl text-2xl flex flex-col items-center justify-center"
          style={{ fontWeight: 750 }}
        >
          <Explore className="transition-all duration-700 ease-in-out text-[#02ac81] w-12 h-12" />
          University Explorer
        </motion.div>
        {images.map((image, imgIndex) => (
          <motion.div
            key={imgIndex}
            className={`absolute max-sm:text-xs max-md:text-sm text-base text-center z-10 mt-28 ${imgIndex === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            initial={{ y: 30, opacity: 0 }}
            animate={
              imgIndex === currentIndex
                ? { y: 0, opacity: 1 }
                : { y: 30, opacity: 0 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ fontWeight: 500 }}
          >
            {image.description}
          </motion.div>
        ))}
        <div className="relative w-full h-full overflow-hidden vignette">
          {images.map((image, imgIndex) => (
            <motion.div
              key={imgIndex}
              className={`absolute inset-0 rounded-[10px] transition-all duration-700 ease-in-out ${imgIndex === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              initial={{ opacity: 0 }}
              animate={
                imgIndex === currentIndex ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="filter brightness-[30%]"
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`w-3 h-3 rounded-full ${dotIndex === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(dotIndex)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UniversityExplorerSection;
