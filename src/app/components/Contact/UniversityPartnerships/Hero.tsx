import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1"
        alt="University campus"
        fill
        className="absolute object-cover z-0"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2, 2, 2_0%,transparent_100%))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-2xl lg:text-4xl md:text-6xl font-bold pb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Partner <br />  with Uniglow
        </h1>
        <p className="text-sm lg:text-base max-w-lg mb-8">
          Join leading universities in revolutionizing student recruitment
        </p>
        <button className="bg-gradient-to-r from-black via-black to-purple-950 text-white px-8 py-3 rounded-xl text-sm lg:text-base font-semibold hover:bg-purple-700 transition duration-300">
          Become a Partner
        </button>
      </div>
    </section>
  );
};

export default Hero;
