import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressSlider from "./CultureSlide/ProgressSlider";

import { useUniversityRecommendations } from "@/context/useUniversityRecommendation";

type SlideProps = {
  onNextSlide: () => void;
};

const CultureSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
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
        cultureImportance: sliderValue,
      });
    }
    onNextSlide();
  };

  return (
    <div className="w-5/6 h-full flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: isValueChanged ? -20 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <p className="text-center text-lg md:text-xl lg:text-2xl w-2/3 font-medium">
          How important is access to cultural attractions like museums,
          theatres, or music venues in your ideal college town?
        </p>
        <div>
          <ProgressSlider onValueChange={handleValueChange} />
        </div>
      </motion.div>

      {isValueChanged && (
        <motion.button
          className="mt-5 px-5 py-2 bg-[#003dcc]/70 text-white rounded-xl hover:bg-[#003dcc] transition duration-300 ease-in-out"
          onClick={() => handleConfirm()}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          initial={{ width: "auto", opacity: 0, y: 20 }}
          animate={{
            width: hovered ? "200px" : "120px",
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, y: -20 }}
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
      )}
    </div>
  );
};

export default CultureSlide;
