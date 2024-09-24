"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col gap-7 mt-96 justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-x-0 bg-white rounded-xl">
        <div className="text-sm bg-white text-black px-3 py-2 rounded-xl font-medium">
          New
        </div>
        <div className="text-sm bg-gray-300 text-black px-3 py-2 rounded-xl font-medium">
          New AI University Matcher 🎉!
        </div>
      </div>
    </div>
  );
};

export default Hero;
