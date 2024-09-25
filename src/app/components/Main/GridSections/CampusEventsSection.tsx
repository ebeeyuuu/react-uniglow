import React from "react";
import { motion } from "framer-motion";
import { useHover } from "@/context/hoverContext";
import { useRouter } from "next/navigation";
import Calendar from "@/app/components/Icons/Calendar";

interface CampusEventsSectionProps {
  index: number;
}

const CampusEventsSection: React.FC<CampusEventsSectionProps> = ({ index }) => {
  const router = useRouter();
  const { hoverStates, setHoverState } = useHover();
  const isHovered = hoverStates[index];

  return (
    <div
      className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-gradient-to-b from-[#272727] to-[#181818]"
      onClick={() => router.push("/pages/main/campus-events")}
      onMouseEnter={() => setHoverState(index, true)}
      onMouseLeave={() => setHoverState(index, false)}
    >
      <div
        className={`p-5 max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl transition-all duration-200 ease-in-out relative z-10`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="flex flex-col max-[4000px]:gap-[10px] justify-center items-center w-full h-full">
            <div
              className={`flex justify-center items-center smooth-animation mt-[-30px] max-[1400px]:scale-[70%] max-[2000px]:scale-[80%] max-[2400px]:scale-[90%] max-[4000px]:scale-[100%]
                  `}
            >
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 1, x: 0 }}
                animate={
                  isHovered ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }
                }
              >
                <Calendar
                  className={`transition-all duration-700 ease-in-out max-[1000px]:w-[30px] max-[1000px]:h-[30px] max-[1400px]:w-[40px] max-[1400px]:h-[40px] max-[2000px]:w-[50px] max-[2000px]:h-[50px] max-[3000px]:w-[60px] max-[3000px]:h-[60px] max-[4000px]:w-[70px] max-[4000px]:h-[70px] mt-[30px] ${isHovered ? "text-white" : "text-[#02ad83]"
                    }`}
                />
              </motion.div>
            </div>
            <motion.div
              className="max-[1150px]:text-base max-[2000px]:text-lg max-[2800px]:text-xl max-[4000px]:text-2xl w-full mx-auto text-wrap font-light"
              initial={{ opacity: 1, x: 0 }}
              animate={
                isHovered ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }
              }
            >
              <p className="max-[1150px]:text-xs max-[2000px]:text-sm max-[2800px]:text-base max-[4000px]:text-lg mx-auto text-wrap font-light max-[1000px]:w-[90%] max-[2000px]:w-[75%] max-[3000px]:w-[65%] max-[4000px]:w-[55%]">
                What events are going on?
                <span className="ml-[5px]" style={{ fontWeight: 700 }}>
                  See our library of:
                </span>
              </p>
            </motion.div>
            <motion.div
              className={`absolute max-[700px]:text-base max-[1000px]:text-lg max-[1300px]:text-2xl text-3xl z-50 flex items-center justify-center rounded-[10px]`}
              initial={{ x: 100, opacity: 0 }}
              animate={
                isHovered ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              Campus Events
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusEventsSection;
