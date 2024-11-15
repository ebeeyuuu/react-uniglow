"use client";

import React, { useEffect } from 'react'
import { BsStars } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  })

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="inline-flex items-center gap-2 bg-white/5 rounded-full px-6 py-2 mb-6 border border-white/5"
          >
            <BsStars className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Our Purpose & Values
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-5xl lg:text-7xl font-bold pb-10 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
          >
            Empowering 
            <br /> Student Success
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg text-white/60 max-w-lg mb-8"
          >
            Uniglow is dedicarted to providing resources, guidance, and tools to help students make informed decisions for a brighter future.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
