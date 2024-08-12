import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@/context/hoverContext";
import { useRouter } from "next/navigation";
import Rankings from "@/app/components/Icons/Rankings";

interface UniversityRankingsSectionProps {
  index: number;
}

const UniversityRankingsSection: React.FC<UniversityRankingsSectionProps> = ({
  index,
}) => {
  const router = useRouter();
  const { hoverStates, setHoverState } = useHover();
  const isHovered = hoverStates[index];

  return (
    <div
      className="row-span-1 col-span-1 max-[2000px]:col-span-2 border-[1.5px] border-[#003366] hover:border-[#ff8000]/50 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-black"
      onClick={() => router.push("/pages/main/university-rankings")}
      onMouseEnter={() => setHoverState(index, true)}
      onMouseLeave={() => setHoverState(index, false)}
    >
      <div
        className={`p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10`}
      >
        <div className="relative w-full h-full">
          <div className="flex flex-col max-[4000px]:gap-[10px] justify-center items-center w-full h-full">
            <div
              className={`flex justify-center items-center smooth-animation mt-[-30px] max-[1400px]:scale-[70%] max-[2000px]:scale-[80%] max-[2400px]:scale-[90%] max-[4000px]:scale-[100%]
                  `}
            >
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 1, x: 0 }}
                animate={
                  isHovered
                    ? { opacity: 0, x: -100 }
                    : { opacity: 1, x: 0 }
                }
              >
                <Rankings
                  className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] mt-[20px] ${
                    isHovered ? "text-white" : "text-[#9c98f0]"
                  }`}
                />
              </motion.div>
            </div>
            <motion.div
              className="max-[1150px]:text-base max-[2000px]:text-lg max-[2800px]:text-xl max-[4000px]:text-2xl max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%] mx-auto text-wrap font-light mt-[-10px]"
              initial={{ opacity: 1, x: 0 }}
              animate={
                isHovered ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }
              }
            >
              <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg mx-auto text-wrap font-light">
                Want some rankings?
                <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                  Then use our:
                </span>
              </p>
            </motion.div>
            <motion.div
              className={`absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl z-50 flex items-center justify-center rounded-[10px]`}
              initial={{ x: 100, opacity: 0 }}
              animate={
                isHovered ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              University Rankings
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-between items-end">
        {[1, 2, 3, 4, 5].map((rank, index) => {
          const widthClasses = ["w-1/6", "w-1/3", "w-1/2", "w-2/3", "w-5/6"][
            index
          ];

          // Determine the correct suffix
          const suffix =
            rank === 1 ? "st" : rank === 2 ? "nd" : rank === 3 ? "rd" : "th";

          return (
            <div
              key={rank}
              className={`h-1/5 border-b border-t border-white/10 relative text-center text-sm transition-all duration-700 ease-in-out ${
                isHovered
                  ? `${widthClasses} text-white/40 border-l`
                  : "w-full text-transparent"
              }`}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {rank}
                {suffix}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityRankingsSection;
