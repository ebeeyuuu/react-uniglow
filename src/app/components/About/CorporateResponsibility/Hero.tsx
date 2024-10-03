import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-white rounded-full mt-52 text-black font-medium text-base px-4 py-2">
        Working towards:
      </div>
      <div className="text-center scale-100 max-md:scale-[70%] smooth-animation text-6xl font-extrabold flex justify-center flex-col mt-8 max-md:mt-0">
        <span className="block">Helping students</span>
        <span className="block">discover their</span>
        <span className="block">dreams</span>
      </div>
    </div>
  );
};

export default Hero;
