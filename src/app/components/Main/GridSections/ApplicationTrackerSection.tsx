"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CircleProgressBar from "./CircleProgressBar";

const ApplicationTrackerSection = () => {
  const router = useRouter();

  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[1200px]:col-span-4 rounded-[10px] flex justify-center items-center font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-gradient-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/application-tracker")}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center">
          <CircleProgressBar
            min={0}
            max={100}
            value={value}
            gaugePrimaryColor="rgb(2 173 131)"
            gaugeSecondaryColor="rgb(31, 41, 55)"
            className=""
            hideValue={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationTrackerSection;
