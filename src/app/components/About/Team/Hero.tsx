import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col gap-9 justify-center items-center">
      <div className="bg-white rounded-full mt-52 text-black font-medium text-base px-4 py-2">
        Leading members
      </div>
      <div className="text-center scale-100 max-md:scale-[70%] smooth-animation text-6xl font-extrabold flex justify-center flex-col">
        Our team at Uniglow
      </div>
    </div>
  );
};

export default Hero;
