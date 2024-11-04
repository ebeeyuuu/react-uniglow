import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-blue-950/10 to-[#020202]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]"></div>
      <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto">
        <div className="inline-flex items-center bg-white/5 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-white/10">
          <span className="text-sm font-medium">
            Join our network of leading institutions
          </span>
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/10 bg-clip-text text-transparent">
          <span className="block">Global</span>
          <span className="block">Partnerships</span>
        </h1>
        <p className="text-xl mb-8 text-white/60">
          Connecting institutions worldwide to create opportunities for academic
          excellence and innovation
        </p>
        <button className="bg-white text-black hover:bg-white/90 h-11 rounded-md px-8">
          Partner With Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
