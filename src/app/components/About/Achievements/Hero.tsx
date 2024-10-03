import React, { useEffect } from "react";
import work1 from "@/images/work1.jpg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLightbulb, FaMoneyBill, FaGlobe } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div
        className="bg-white rounded-full mt-52 text-black font-medium text-base px-4 py-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        How we&apos;re doing
      </div>
      <div
        className="text-center scale-100 max-md:scale-[70%] smooth-animation mt-6 text-6xl font-extrabold flex justify-center flex-col"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <span className="block">Our</span>
        <span className="block">achievements</span>
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <Image
          src={work1}
          alt="Image"
          className="max-h-[450px] object-cover w-full flex justify-center items-center"
        />
      </div>
      <div className="flex flex-row px-8 gap-4 mt-[-100px] max-md:scale-[70%] scale-100 smooth-animation">
        <div className="flex flex-col justify-center items-center rounded-xl bg-[#003dcc] p-10 aspect-square gap-4">
          <FaLightbulb className="text-white" size={25} />
          <div className="text-white text-xl font-bold text-center">
            <span className="block">500,000+</span>
            <span className="block">dreams</span>
            <span className="block">realised</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl bg-[#003dcc] p-10 aspect-square gap-4">
          <FaGlobe className="text-white" size={25} />
          <div className="text-white text-xl font-bold text-center">
            <span className="block">95% of</span>
            <span className="block">students</span>
            <span className="block">matched with</span>
            <span className="block">their uni</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl bg-[#003dcc] p-10 aspect-square gap-4">
          <FaMoneyBill className="text-white" size={25} />
          <div className="text-white text-xl font-bold text-center">
            <span className="block">$50M+ in</span>
            <span className="block">scholarships</span>
            <span className="block">secured</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
