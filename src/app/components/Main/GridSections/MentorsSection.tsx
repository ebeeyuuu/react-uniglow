import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useHover } from "@/context/hoverContext";
import { useRouter } from "next/navigation";
import Mentoring from "../../Icons/Mentoring";
import { GoPersonFill } from "react-icons/go";
import MentorConnectionBeams from "./MentorConnectionBeams";

interface MentorsSectionProps {
  index: number;
}

const MentorsSection: React.FC<MentorsSectionProps> = ({ index }) => {
  const router = useRouter();
  const { hoverStates, setHoverState } = useHover();
  const isHovered = hoverStates[index];

  const containerRef = useRef(null);
  const nodeRefs = Array.from({ length: 6 }, () => useRef(null));

  return (
    <div
      className="row-span-2 col-span-1 max-[2000px]:col-span-2 max-[1200px]:row-span-1 border-[3px] border-[#0037b8] hover:border-[#f4b034] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-black"
      onClick={() => router.push("/pages/main/mentors")}
      onMouseEnter={() => setHoverState(index, true)}
      onMouseLeave={() => setHoverState(index, false)}
      ref={containerRef} // Ref for container
    >
      <div className="relative p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
        <motion.div
          className="flex justify-center items-center flex-col gap-y-[10px] z-10 w-full"
          initial={{ y: 0 }}
          animate={isHovered ? { y: 100, opacity: 0 } : { y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Mentoring
            className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${
              isHovered ? "text-white" : "text-[#02ad83]"
            }`}
          />
          <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto font-light w-full">
            Need advice on univeristies?
            <span className="ml-[5px]" style={{ fontWeight: 700 }}>
              Check our:
            </span>
          </p>
        </motion.div>
      </div>
      <motion.div
        className="absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl z-50 flex items-center justify-center"
        initial={{ y: 30, opacity: 0 }}
        animate={isHovered ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Mentors
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] flex flex-wrap justify-center items-center">
        {nodeRefs.map((ref, index) => (
          <div
            key={index}
            ref={ref}
            className={`absolute flex justify-center items-center text-white w-[70px] h-[70px] rounded-full transform ${
              index === 0
                ? "translate-x-[calc(115%-20px)] translate-y-[-110px]"
                : index === 1
                  ? "translate-x-[calc(210%-20px)] translate-y-[0]"
                  : index === 2
                    ? "translate-x-[calc(115%-20px)] translate-y-[110px]"
                    : index === 3
                      ? "translate-x-[calc(-115%+20px)] translate-y-[110px]"
                      : index === 4
                        ? "translate-x-[calc(-210%+20px)] translate-y-[0]"
                        : "translate-x-[calc(-115%+20px)] translate-y-[-110px]"
            } ${
              isHovered ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700 ease-in-out`}
          >
            <GoPersonFill size={30} className="text-[#02ad83]" />
          </div>
        ))}
      </div>

      {nodeRefs.map((fromRef, fromIndex) =>
        nodeRefs.map((toRef, toIndex) => {
          if (fromIndex < toIndex) {
            return (
              <MentorConnectionBeams
                key={`${fromIndex}-${toIndex}`}
                containerRef={containerRef}
                fromRef={fromRef}
                toRef={toRef}
                pathColor="white"
                pathWidth={1}
                gradientStartColor="#ff5f6d"
                gradientStopColor="#ffc371"
                duration={5}
                delay={Math.random()}
                className={`${
                  isHovered ? "opacity-100 scale-100" : "opacity-100 scale-150"
                } transition-all duration-700 ease-in-out`}
              />
            );
          }
        }),
      )}
    </div>
  );
};

export default MentorsSection;
