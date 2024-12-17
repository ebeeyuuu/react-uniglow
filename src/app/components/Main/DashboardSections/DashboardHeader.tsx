"use client";

import { BsBell } from "react-icons/bs";

const DashboardHeader = () => {
  return (
    <div className="py-8 gap-6 flex items-center justify-between">
      <div>
        <h1 className="max-[640px]:text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold mb-2">
          Welcome back, Alex!
        </h1>
        <p className="max-[640px]:text-xs sm:text-sm md:text-lg lg:text-2xl text-white/60">
          Track your university application progress
        </p>
      </div>
      <button className="rounded-xl px-3 aspect-square py-3 border border-zinc-600">
        <BsBell className="h-3 w-5 lg:h-5 lg:w-5" />
      </button>
    </div>
  );
};

export default DashboardHeader;
