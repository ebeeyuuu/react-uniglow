"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Progress } from "../../UI/Progress";

const matchCriteria = [
  { label: "Academic Profile", progress: 80 },
  { label: "Career Goals", progress: 65 },
  { label: "Location Preferences", progress: 90 },
  { label: "Budget Range", progress: 75 },
];

const AIMatcher: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const overallMatch = Math.round(
    matchCriteria.reduce((sum, item) => sum + item.progress, 0) /
      matchCriteria.length,
  );

  const strongestMatch = matchCriteria.reduce((a, b) =>
    a.progress > b.progress ? a : b,
  );
  const weakestMatch = matchCriteria.reduce((a, b) =>
    a.progress < b.progress ? a : b,
  );

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex flex-col justify-center items-center"
    >
      <div className="flex w-full justify-start items-start">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          AI Matcher
        </h2>
      </div>

      <div className="space-y-5 w-full">
        {matchCriteria.map((criteria, index) => (
          <div key={index} className="space-y-2 w-full">
            <div className="flex justify-between items-center text-sm">
              <span className="truncate text-xs md:text-sm lg:text-base text-white/60">
                {criteria.label}
              </span>
              <span className="text-xs md:text-sm lg:text-base text-purple-400">
                {criteria.progress}%
              </span>
            </div>
            <Progress
              value={criteria.progress}
              className="h-1 bg-zinc-700"
              progressColor="bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </div>
        ))}
      </div>

      <div className="space-y-3 w-full border-t border-white/10 pt-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-xs md:text-sm lg:text-base text-white/60">
            Overall Match
          </span>
          <span className="text-xs md:text-sm lg:text-base text-purple-400">
            {overallMatch}%
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-xs md:text-sm lg:text-base text-white/60">
            Strongest Match
          </span>
          <span className="truncate text-xs md:text-sm lg:text-base text-green-400">
            {strongestMatch.label}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-xs md:text-sm lg:text-base text-white/60">
            Weakest Match
          </span>
          <span className="truncate text-xs md:text-sm lg:text-base text-red-400">
            {weakestMatch.label}
          </span>
        </div>
      </div>

      <button className="w-full py-5 px-3 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center gap-2 group">
        <span className="text-xs lg:text-sm">Update Profile</span>
        <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default AIMatcher;
