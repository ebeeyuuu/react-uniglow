"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHover } from "@/context/hoverContext";
import { useRouter } from "next/navigation";
import CircleProgressBar from "./CircleProgressBar";

interface ApplicationTrackerSectionProps {
  index: number;
}

const ApplicationTrackerSection: React.FC<ApplicationTrackerSectionProps> = ({
  index,
}) => {
  const router = useRouter();
  const { hoverStates, setHoverState } = useHover();
  const isHovered = hoverStates[index];

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
      className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[1200px]:col-span-4 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-gradient-to-b from-[#272727] to-[#181818]"
      onClick={() => router.push("/pages/main/application-tracker")}
      onMouseEnter={() => setHoverState(index, true)}
      onMouseLeave={() => setHoverState(index, false)}
    >
      <div className="p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10">
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="flex flex-col max-[4000px]:gap-[10px] max-[2000px]:gap-[10px] max-[1000px]:gap-[5px] justify-center items-center">
            <div
              className={`flex justify-center items-center smooth-animation ${isHovered
                ? "mt-[10px] scale-[90%]"
                : "mt-[-55px] max-[1400px]:scale-[40%] max-[2000px]:scale-[50%] max-[2400px]:scale-[60%] max-[2800px]:scale-[70%] max-[3200px]:scale-[80%] max-[4000px]:scale-[90%]"
                }`}
            >
              <div className="flex items-center justify-center">
                <CircleProgressBar
                  min={0}
                  max={100}
                  value={value}
                  gaugePrimaryColor="rgb(2 173 131)"
                  gaugeSecondaryColor="rgb(31, 41, 55)"
                  className=""
                  hideValue={isHovered ? true : false}
                />
              </div>
            </div>
            <motion.div
              className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light max-[4000px]:mt-[-20px] max-[3000px]:mt-[-30px] max-[2000px]:mt-[-40px] max-[1000px]:mt-[-50px]"
              initial={{ opacity: 1, x: 0 }}
              animate={
                isHovered ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }
              }
            >
              <p className="max-[1150px]:text-sm max-[2000px]:text-base max-[2800px]:text-lg max-[4000px]:text-xl mx-auto text-wrap font-light">
                Need to track of your application?
                <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                  Why not use our:
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTrackerSection;
