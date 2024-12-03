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
      className="row-span-4 max-[2000px]:row-span-6 col-span-3 max-[2000px]:col-span-6 max-[2000px]:-order-9 bg-linear-to-b from-[#212121] to-[#111111] max-[700px]:text-lg rounded-[10px] flex justify-center items-center font-bold text-center cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden"
      onClick={() => router.push("/pages/main/university-explorer")}
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <motion.div
          className="absolute z-10 max-sm:text-xs max-md:text-sm text-base flex flex-col items-center justify-center"
          style={{ fontWeight: 750 }}
        >
          <Explore className="transition-all duration-700 ease-in-out text-[#02ac81] w-12 h-12 mb-2" />
          University Explorer
        </motion.div>
        {images.map((image, imgIndex) => (
          <motion.div
            key={imgIndex}
            className={`absolute max-sm:text-[8px] max-md:text-xs text-sm text-center z-10 mt-28 ${imgIndex === currentIndex ? "opacity-100" : "opacity-0"
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
      </div>
    </div>
  );
};

export default UniversityExplorerSection;
