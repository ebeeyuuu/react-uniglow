import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsStars } from "react-icons/bs";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/15 via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1522071820081-009f0129c71c)] bg-cover opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_70%)] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center mb-12">
          <div data-aos="fade-up" data-aos-delay="300" className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <BsStars className="w-4 h-4 text-purple-400" />
            <span className="text-xs lg:text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Who we are
            </span>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="350" className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent text-center">
            Meet the Team
          </h1>
          <p data-aos="fade-up" data-aos-delay="400" className="text-sm lg:text-lg text-white/60 max-w-lg mb-8 text-center">
            Our passionate and talented team is dedicated to building a brighter future for education and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
