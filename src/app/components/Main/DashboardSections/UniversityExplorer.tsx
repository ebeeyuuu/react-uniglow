"use client";

import { BsSearch, BsFilter } from "react-icons/bs";
import { Progress } from "../../UI/Progress";

const topUniversities = [
  { name: "Harvard University", match: 95, location: "Cambridge, MA" },
  { name: "Stanford University", match: 92, location: "Stanford, CA" },
  { name: "MIT", match: 88, location: "Cambridge, MA" },
];

const UniversityExplorer: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          University Explorer
        </h2>
        <div className="flex gap-2">
          <button className="p-2 bg-white/5 rounded-full hover:bg-white/10">
            <BsFilter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search universities..."
          className="truncate text-xs sm:text-sm lg:text-base w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-10 focus:outline-none focus:border-purple-500"
        />
        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
      </div>

      <div className="space-y-4">
        {topUniversities.map((uni, index) => (
          <div
            key={index}
            className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-center mb-2">
              <h3
                className="font-medium truncate text-xs sm:text-sm lg:text-base transition-all duration-300"
              >
                {uni.name}
              </h3>
              <span className="text-xs lg:text-sm text-purple-400 mb-2 duration-300">
                {uni.match}%
              </span>
            </div>
            <div
              className="text-xs lg:text-sm truncate text-white/60 mb-2 transition-all duration-300"
            >
              {uni.location}
            </div>
            <Progress
              value={uni.match}
              className="h-1 bg-zinc-700"
              progressColor="bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityExplorer;
