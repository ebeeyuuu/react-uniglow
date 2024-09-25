import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@/context/hoverContext";
import { useRouter } from "next/navigation";
import VROutline from "../../Icons/VROutline";
import AnimatedGrid from "./AnimatedGrid";
import { cn } from "@/lib/utils";

interface VRToursSectionProps {
  index: number;
}

const VRToursSection: React.FC<VRToursSectionProps> = ({ index }) => {
  const router = useRouter();
  const { hoverStates, setHoverState } = useHover();
  const isHovered = hoverStates[index];

  return (
    <div
      className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[2000px]:-order-8  max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer smooth-animation overflow-hidden bg-gradient-to-b from-[#272727] to-[#181818]"
      onClick={() => router.push("/pages/main/vr-tours")}
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
          <VROutline
            className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${isHovered ? "text-white" : "text-[#02ac81]"
              }`}
          />
          <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light">
            Don&apos;t know what campuses look like? Experience
            <span className="ml-[5px]" style={{ fontWeight: 700 }}>
              it with our:
            </span>
          </p>
        </motion.div>
        <motion.div
          className={`absolute flex items-center justify-center z-10 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-700 delay-200 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"
            }`}
          initial={{ x: 30 }}
          animate={isHovered ? { x: 0 } : { x: 30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          VR Tours
        </motion.div>
        <AnimatedGrid
          numSquares={60}
          maxOpacity={isHovered ? 0.4 : 0}
          duration={2.5}
          repeatDelay={0.3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "absolute inset-x-0 inset-y-[-30%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            `transition-all duration-700 ease-in-out z-10 ${isHovered ? "opacity-100 skew-y-12" : "opacity-100 skew-y-0"
            }`,
          )}
        />
      </div>
    </div>
  );
};

export default VRToursSection;
