import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@/context/hoverContext";
import { useRouter } from "next/navigation";
import BrainAI from "@/app/components/Icons/BrainAI";

interface AIMatcherSectionProps {
  index: number;
}

const AIMatcherSection: React.FC<AIMatcherSectionProps> = ({ index }) => {
  const router = useRouter();
  const { hoverStates, setHoverState } = useHover();
  const isHovered = hoverStates[index];

  return (
    <div
      className={`relative row-span-1 col-span-2 max-[2000px]:col-span-4 max-[2000px]:-order-9 rounded-[10px] flex justify-center items-center font-bold text-center cursor-pointer smooth-animation overflow-hidden bg-gradient-to-b from-[#272727] to-[#181818]`}
      onClick={() => router.push("/pages/main/ai-matching")}
      onMouseEnter={() => setHoverState(index, true)}
      onMouseLeave={() => setHoverState(index, false)}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <motion.div
          className="absolute flex items-center justify-center flex-col gap-y-[10px]"
          initial={{ x: 0 }}
          animate={isHovered ? { x: -30, opacity: 0 } : { x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <BrainAI
            className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${isHovered ? "text-white" : "text-[#02ac81]"
              }`}
          />
          <p className="max-md:text-sm max-sm:text-xs text-base max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light">
            Find your university with:
          </p>
        </motion.div>
        <motion.div
          className={`absolute flex items-center justify-center max-sm:text-base max-md:text-lg text-xl smooth-animation ${isHovered ? "opacity-100" : "opacity-0"
            }`}
          initial={{ x: 30 }}
          animate={isHovered ? { x: 0 } : { x: 30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          AI Matcher
        </motion.div>
      </div>
    </div>
  );
};

export default AIMatcherSection;
