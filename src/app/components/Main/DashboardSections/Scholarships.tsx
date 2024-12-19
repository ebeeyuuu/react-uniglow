"use client";

import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSlidersH } from "react-icons/fa";
import { useState, useEffect } from "react";

const scholarships = [
  {
    name: "Merit Scholarship",
    amount: "$25,000",
    deadline: "Apr 1, 2024",
    status: "Eligible",
  },
  {
    name: "STEM Excellence",
    amount: "$15,000",
    deadline: "Mar 25, 2024",
    status: "In Progress",
  },
  {
    name: "Arts Achievement",
    amount: "$10,000",
    deadline: "May 1, 2024",
    status: "Eligible",
  },
];

const Scholarships: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    if (!isGrid) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % scholarships.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isGrid]);

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col relative"
    >
      <div className="flex items-start justify-start w-full">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Scholarships
        </h2>
      </div>

      {isGrid ? (
        <div className="grid grid-cols-1 gap-4 w-full">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex flex-col gap-2">
                <div className="text-xs lg:text-sm font-medium">
                  {scholarship.name}
                </div>
                <div className="text-xs lg:text-sm text-green-400">
                  {scholarship.amount}
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs flex items-center gap-1 text-white/60">
                  {scholarship.deadline}
                </div>
                <div className="text-xs text-purple-400">
                  {scholarship.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative flex-1 max-h-40 min-h-40">
          {scholarships.map((scholarship, index) => (
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
                <h3 className="text-xs lg:text-sm font-medium mb-1">
                  {scholarship.name}
                </h3>
                <p className="text-xs text-green-400">{scholarship.amount}</p>
                <div className="flex items-center gap-1 text-white/60 text-xs mt-2">
                  {scholarship.deadline}
                </div>
                <p className="text-purple-400 text-xs mt-1">
                  {scholarship.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isGrid && (
        <div className="flex justify-center space-x-2 mt-4">
          {scholarships.map((_, index) => (
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
        onClick={() => setIsGrid((prev) => !prev)}
        className="absolute bottom-2 right-2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
      >
        {isGrid ? (
          <BsFillGrid3X3GapFill className="w-3 h-3" />
        ) : (
          <FaSlidersH className="w-3 h-3" />
        )}
      </button>
    </div>
  );
};

export default Scholarships;
