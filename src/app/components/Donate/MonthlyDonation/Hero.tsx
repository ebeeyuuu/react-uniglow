import React from "react";
import Calendar from "@/app/components/Donate/Calendar";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <div className="w-full text-3xl font-extrabold mt-52 flex justify-center items-center mb-8">
        Hero
      </div>
      <Calendar />
    </div>
  );
};

export default Hero;
