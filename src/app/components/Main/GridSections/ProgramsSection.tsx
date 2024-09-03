import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@/context/hoverContext";
import { useRouter } from "next/navigation";
import Grid from "../../Icons/Grid";

interface ProgramsSectionProps {
  index: number;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ index }) => {
  const router = useRouter();
  const { hoverStates, setHoverState } = useHover();
  const isHovered = hoverStates[index];

  return (
    <div
      className="row-span-2 col-span-1 max-[2000px]:col-span-2 max-[1200px]:row-span-1 max-[1200px]:col-span-4 border-[3px] border-[#0037b8] hover:border-[#f4b034] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative bg-black"
      onClick={() => router.push("/pages/main/programs")}
      onMouseEnter={() => setHoverState(index, true)}
      onMouseLeave={() => setHoverState(index, false)}
    >
      <div className="p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out">
        <motion.div
          className="flex justify-center items-center flex-col gap-y-[10px]"
          initial={{ y: 0 }}
          animate={
            isHovered
              ? { y: 100, opacity: 0 }
              : {
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Grid
            className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${
              isHovered ? "text-white" : "text-[#02ad83]"
            }`}
          />
          <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light">
            Curious to learn about what activities univerities offer?
            <span className="ml-[5px]" style={{ fontWeight: 700 }}>
              Then check out our library of:
            </span>
          </p>
        </motion.div>
      </div>
      <motion.div
        className="absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl flex items-center justify-center"
        initial={{ y: -30, opacity: 0 }}
        animate={
          isHovered
            ? {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }
            : { y: -100, opacity: 0 }
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        Programs
      </motion.div>
    </div>
  );
};

export default ProgramsSection;
