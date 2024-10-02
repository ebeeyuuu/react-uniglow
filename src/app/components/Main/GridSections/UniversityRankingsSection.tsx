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
      className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-gradient-to-b from-[#272727] to-[#181818]"
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
                  isHovered ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }
                }
              >
                <Rankings
                  className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] ${isHovered ? "text-white" : "text-[#02ac81]"
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
              <p className="max-md:text-sm max-sm:text-xs text-base mx-auto text-wrap font-light">
                See some rankings with our own:
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
    </div>
  );
};

export default UniversityRankingsSection;
