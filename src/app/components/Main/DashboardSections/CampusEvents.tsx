"use client";

import { useState, useEffect } from "react";
import { FaExpand } from "react-icons/fa6";
import { RiCollapseDiagonalFill } from "react-icons/ri";

const events = [
  {
    name: "Spring Open House",
    university: "Stanford University",
    date: "Mar 15, 2024",
    location: "Main Campus",
  },
  {
    name: "Virtual Info Session",
    university: "Harvard University",
    date: "Mar 20, 2024",
    location: "Online",
  },
];

const CampusEvents: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    if (!isGrid) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isGrid]);

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col relative"
    >
      <div className="flex items-start justify-between w-full">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Events
        </h2>
      </div>

      {isGrid ? (
        <div className="grid grid-cols-1 gap-4 w-full">
          {events.map((event, index) => (
            <div
              key={index}
              className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="font-medium text-xs lg:text-sm mb-1">
                {event.name}
              </div>
              <div className="text-xs text-white/60">{event.university}</div>
              <div className="flex flex-col items-start justify-start w-full text-xs text-purple-400 mt-2">
                <div className="flex text-xs items-center gap-1">
                  {event.date}
                </div>
                <div className="flex text-xs items-center gap-1">
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative flex-1 max-h-40 min-h-40">
          {events.map((event, index) => (
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
                  {event.name}
                </h3>
                <p className="text-xs text-white/60">{event.university}</p>
                <div className="flex flex-col gap-1 text-xs text-purple-400 mt-2">
                  <div className="text-xs flex items-center gap-1">
                    {event.date}
                  </div>
                  <div className="text-xs flex items-center gap-1">
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isGrid && (
        <div className="flex justify-center space-x-2 mt-4">
          {events.map((_, index) => (
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
          <RiCollapseDiagonalFill className="w-3 h-3" />
        ) : (
          <FaExpand className="w-3 h-3" />
        )}
      </button>
    </div>
  );
};

export default CampusEvents;
