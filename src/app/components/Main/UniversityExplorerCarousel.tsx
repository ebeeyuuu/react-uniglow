"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import slide1 from "@/images/harvard.jpg"
import slide2 from "@/images/3.jpg"
import slide3 from "@/images/4.jpg"
import slide4 from "@/images/5.jpg"
import slide5 from "@/images/8.jpg"

const images = [slide1, slide2, slide3, slide4, slide5]

const UniversityExplorerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full">
            <Image src={image} alt={`Slide ${index}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default UniversityExplorerCarousel