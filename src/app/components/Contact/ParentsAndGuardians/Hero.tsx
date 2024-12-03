"use client";

import Image from "next/image";
import { BsArrowRight, BsStars } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2, 2, 2_0%,transparent_100%))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-14 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-6 py-2 mb-6 border border-white/5">
              <BsStars className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium bg-linear-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                Guide Your Child&apos;s Academic Journey
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold pb-6 bg-linear-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
              Supporting Your<br/> Child&apos;s Journey
            </h1>
            
            <p className="text-lg text-white/60 max-w-xl mb-8">
              Your complete guide to helping your child make informed university choices. Get access to resources, tools, and expert guidance to support their academic future.
            </p>
            
            <div className="flex flex-row gap-4">
              <button className="flex flex-row items-center justify-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-5 py-3">
                Get Started
                <BsArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border-white/10 hover:bg-white/5 rounded-full px-5 py-3">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20"></div>
            <div className="relative aspect-square rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xs overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
                alt="Parent and student discussing university options"
                className="w-full h-full object-cover opacity-80"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
