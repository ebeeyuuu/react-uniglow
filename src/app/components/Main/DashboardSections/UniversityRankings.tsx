"use client";

import React, { useEffect, useRef, useState } from "react";

const allUniversities = [
  { university: "Harvard", rank: 1, score: 100, location: "USA" },
  { university: "Stanford", rank: 2, score: 98, location: "USA" },
  { university: "MIT", rank: 3, score: 97, location: "USA" },
  { university: "Caltech", rank: 4, score: 96, location: "USA" },
  { university: "Oxford", rank: 5, score: 95, location: "UK" },
  { university: "Cambridge", rank: 6, score: 94, location: "UK" },
  { university: "Columbia", rank: 7, score: 93, location: "USA" },
  { university: "Princeton", rank: 8, score: 92, location: "USA" },
  { university: "Yale", rank: 9, score: 91, location: "USA" },
  { university: "UChicago", rank: 10, score: 90, location: "USA" },
];

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "text-purple-500";
    case 2:
      return "bg-gradient-to-b from-purple-500 to-blue-500 text-transparent bg-clip-text";
    case 3:
      return "text-blue-500";
    case 4:
      return "bg-gradient-to-b from-blue-500 to-blue-400 text-transparent bg-clip-text";
    case 5:
      return "bg-gradient-to-b from-blue-400 to-blue-300 text-transparent bg-clip-text";
    case 6:
      return "bg-gradient-to-b from-blue-300 to-blue-200 text-transparent bg-clip-text";
    case 7:
      return "bg-gradient-to-b from-blue-200 to-blue-200 text-transparent bg-clip-text";
    case 8:
      return "bg-gradient-to-b from-blue-200 to-zinc-300 text-transparent bg-clip-text";
    case 9:
      return "bg-gradient-to-b from-zinc-300 to-zinc-400 text-transparent bg-clip-text";
    case 10:
      return "bg-gradient-to-b from-zinc-400 to-zinc-500 text-transparent bg-clip-text";
  }
};

const UniversityRankings: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      const height = containerRef.current.offsetHeight;
      const width = containerRef.current.offsetWidth;

      setVisibleCount(Math.floor(height / 50));
      setWidth(width);
    };

    const resizeObserver = new ResizeObserver(updateSize);
    const container = containerRef.current;
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      if (container) {
        resizeObserver.unobserve(container);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-hidden flex flex-col"
    >
      <div className="flex w-full items-start justify-start">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Rankings
        </h2>
      </div>

      <div className="space-y-2 w-full flex flex-col">
        {allUniversities.slice(0, visibleCount).map((uni, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`text-base font-bold ${getRankColor(uni.rank)}`}>
                #{uni.rank}
              </div>
              <div
                className={`font-medium truncate ${
                  width < 200 ? "w-20" : "w-48"
                }`}
              >
                {uni.university}
              </div>
            </div>

            {width > 250 && (
              <div className="text-sm text-gray-400 flex gap-2">
                <span className="font-semibold">{uni.score}</span>
                {width > 350 && (
                  <span className="hidden sm:inline text-gray-500">
                    {uni.location}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityRankings;
