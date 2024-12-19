"use client";

import React, { useState, useEffect, useRef } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSlidersH } from "react-icons/fa";

const programs = [
  { name: "Computer Science", universities: 45 },
  { name: "Business", universities: 38 },
  { name: "Engineering", universities: 52 },
  { name: "Mathematics", universities: 30 },
  { name: "Law", universities: 20 },
];

const Programs: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [isCarousel, setIsCarousel] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isCarousel) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isCarousel]);

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] flex flex-col overflow-hidden relative"
    >
      <div className="flex items-start justify-start w-full">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Programs
        </h2>
      </div>

      {isCarousel ? (
        <div className="relative flex-1 max-h-32 min-h-32">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex py-6 flex-col justify-center items-start transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(to right, blue, purple)`,
                  opacity: 0.1,
                }}
              />
              <div className="relative z-10 p-4">
                <h3 className="font-medium text-xs lg:text-sm mb-1">{program.name}</h3>
                <p className="text-xs text-white/60">
                  {program.universities} universities
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 w-full">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start p-4 bg-white/[0.05] rounded-xl"
            >
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(to right, blue, purple)`,
                  opacity: 0.1,
                }}
              />
              <div className="relative z-10">
                <h3 className="font-medium text-xs lg:text-sm mb-1">{program.name}</h3>
                <p className="text-xs text-white/60">
                  {program.universities} universities
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {isCarousel && (
        <div className="flex justify-center space-x-2 mt-4">
          {programs.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex
                ? "bg-purple-400"
                : "bg-white/20 hover:bg-white/40"
                }`}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => setIsCarousel((prev) => !prev)}
        className="absolute bottom-2 right-2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
      >
        {isCarousel ? (
          <BsFillGrid3X3GapFill className="w-3 h-3" />
        ) : (
          <FaSlidersH className="w-3 h-3" />
        )}
      </button>
    </div>
  );
};

export default Programs;
