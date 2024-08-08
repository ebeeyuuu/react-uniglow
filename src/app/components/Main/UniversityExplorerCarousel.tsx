"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import slide1 from "@/images/harvard.jpg";
import slide2 from "@/images/3.jpg";
import slide3 from "@/images/4.jpg";
import slide4 from "@/images/5.jpg";
import slide5 from "@/images/8.jpg";

import Explore from "../Icons/Explore";

const images = [
  { src: slide1, alt: 'Slide 1', description: 'Harvard Univeristy' },
  { src: slide2, alt: 'Slide 2', description: 'Stanford University' },
  { src: slide3, alt: 'Slide 3', description: 'Massachusetts Institute of Technology' },
  { src: slide4, alt: 'Slide 4', description: 'Yale University' },
  { src: slide5, alt: 'Slide 5', description: 'Princeton University' },
];

const UniversityExplorerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 mt-[-60px]">
        <Explore className="w-[60px] h-[60px]"/>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl z-50" style={{ fontWeight: 750 }}>
        University Explorer
      </div>
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg z-50 mt-[50px] ${index === currentIndex ? "opacity-100" : "opacity-0"}`} 
          style={{ fontWeight: 500 }}
        >
          {image.description}
        </div>
      ))}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item={index}
          >
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="filter brightness-[50%]"/>
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
  );
}

export default UniversityExplorerCarousel;
