import React, { useEffect } from "react";
import placeholder1 from "@/images/7.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-9 justify-center items-center">
      <div
        className="bg-white rounded-full mt-52 text-black font-medium text-base px-4 py-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Leading members
      </div>
      <div
        className="text-center scale-100 max-md:scale-[70%] smooth-animation text-6xl font-extrabold flex justify-center flex-col"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <span className="block">Our team</span>
        <span className="block">at Uniglow</span>
      </div>
      <div className="w-full h-full flex justify-center items-center flex-col gap-10">
        <div
          className="flex flex-row max-md:flex-col justify-center items-center gap-9 max-md:gap-0 p-10 max-md:mt-[-20px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="max-md:mt-[-40px] flex flex-col justify-center items-center gap-y-5 scale-100 max-md:scale-[70%] smooth-animation">
            <div className="flex justify-center items-center border-2 border-transparent rounded-full aspect-square w-[200px]">
              <Image
                src={placeholder1}
                alt="Placeholder Image No.1"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-3xl font-bold">Ean James Yu</div>
            <div className="text-lg font-light">Lead Frontend Developer</div>
          </div>
          <div className="max-md:mt-[-40px] flex flex-col justify-center items-center gap-y-5 scale-100 max-md:scale-[70%] smooth-animation">
            <div className="flex justify-center items-center border-2 border-transparent rounded-full aspect-square w-[200px]">
              <Image
                src={placeholder1}
                alt="Placeholder Image No.1"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-3xl font-bold">Ean James Yu</div>
            <div className="text-lg font-light">Lead Backend Developer</div>
          </div>
          <div className="max-md:mt-[-40px] flex flex-col justify-center items-center gap-y-5 scale-100 max-md:scale-[70%] smooth-animation">
            <div className="flex justify-center items-center border-2 border-transparent rounded-full aspect-square w-[200px]">
              <Image
                src={placeholder1}
                alt="Placeholder Image No.1"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-3xl font-bold">Ean James Yu</div>
            <div className="text-lg font-light">Lead Designer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
