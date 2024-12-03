import React from "react";
import { BsStars } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1604933834215-2a64950311bd)] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2, 2, 2_0%,transparent_100%))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_70%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-6 py-2 mb-6 border border-white/5">
            <BsStars className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-linear-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Working towards our goals
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold pb-10 bg-linear-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Corporate <br /> Responsibility
          </h1>
          <p className="text-lg max-w-2xl mb-8 text-white/60">
            We are committed to making a positive <br />
            impact on the communities we serve.
          </p>
        </div>
      </div>
    </section>
  )
};

export default Hero;
