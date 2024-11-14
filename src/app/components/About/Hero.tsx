"use client";

import { BsStars } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-6 py-2 mb-6 border border-white/5">
            <BsStars className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Transforming Education Since 2020
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold pb-10 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Our Journey
            <br /> to Revolutionize
            <br />
            University Admissions
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mb-8">
            From a simple idea to a global platform helping thousands of
            students achieve their academic dreams. This is our story of
            innovation, dedication, and transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
