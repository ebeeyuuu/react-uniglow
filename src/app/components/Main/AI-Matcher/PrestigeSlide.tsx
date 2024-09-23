import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "./PrestigeSlide/Slider";
import { useUniversityRecommendations } from "@/context/useUniversityRecommendation";

interface SlideProps {
  onNextSlide: () => void;
}

const PrestigeSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  const { updateUniversityRecommendations } = useUniversityRecommendations();
  const [sliderValue, setSliderValue] = useState<number | null>(null);

  const [isValueChanged, setIsValueChanged] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleValueChange = (newValue: number) => {
    setSliderValue(newValue);
    setIsValueChanged(true);
  };

  const handleConfirm = async () => {
    if (sliderValue !== null) {
      await updateUniversityRecommendations({
        prestigeImportance: sliderValue,
      });
    }
    onNextSlide();
  };

  return (
    <div className="w-5/6 h-full flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: isValueChanged ? -20 : 0, // Move content up when value changes
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <p className="text-center text-lg md:text-xl lg:text-2xl w-2/3 font-medium">
          How important is the prestige, reputation, and ranking of the
          university you want to attend?
        </p>
        <div>
          <Slider onValueChange={handleValueChange} />
        </div>
      </motion.div>

      <AnimatePresence>
        {isValueChanged && (
          <motion.div
            key="confirm-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} // Slide button up
            exit={{ opacity: 0, y: 20 }} // Slide button down on exit
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex justify-center"
          >
            <motion.button
              className="mt-5 px-5 py-2 bg-[#003dcc]/70 text-white rounded-xl hover:bg-[#003dcc] transition duration-300 ease-in-out"
              onClick={handleConfirm}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              initial={{ width: "auto", opacity: 0 }}
              animate={{
                width: hovered ? "200px" : "120px",
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ whiteSpace: "nowrap" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {!hovered ? (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center items-center"
                  >
                    Confirm
                  </motion.div>
                ) : (
                  <motion.div
                    key="next"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center items-center"
                  >
                    Go to next slide
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrestigeSlide;
