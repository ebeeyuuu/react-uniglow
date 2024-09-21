import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";

import TypeClubs from "./FifthSlide/TypeClubs";
import ExampleClubs from "./FifthSlide/ExampleClubs";

import { clubTypes, clubExamples } from "@/data";

import { useUniversityRecommendations } from "@/context/useUniversityRecommendation";

type SlideProps = {
  onNextSlide: () => void;
};

const FifthSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  const { updateUniversityRecommendations } = useUniversityRecommendations();

  const [animateTypeClubs, setAnimateTypeClubs] = useState(false);
  const [animateIntroText, setAnimateIntroText] = useState(true);
  const [showExampleClubs, setShowExampleClubs] = useState(false);

  const [selectedClubTypes, setSelectedClubTypes] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateTypeClubs(true);
      setAnimateIntroText(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const typeClubsConfirm = useCallback(
    async (selectedTypes: string[]) => {
      setSelectedClubTypes(selectedTypes);
      await updateUniversityRecommendations({
        clubs: selectedTypes,
      });

      setAnimateTypeClubs(false);
      setAnimateIntroText(false);
      setShowExampleClubs(true);
    },
    [updateUniversityRecommendations],
  );

  return (
    <div className="w-full h-[100vh] flex justify-center items-center overflow-y-auto scrollbar-hide relative">
      {animateIntroText && (
        <AnimatePresence>
          <motion.p
            className="text-3xl w-4/5 font-medium text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 3 }}
          >
            What kind of clubs or groups would you love to join in college?
          </motion.p>
        </AnimatePresence>
      )}
      {animateTypeClubs && (
        <AnimatePresence>
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
          >
            <TypeClubs clubTypes={clubTypes} onConfirm={typeClubsConfirm} />
          </motion.div>
        </AnimatePresence>
      )}

      {showExampleClubs && (
        <AnimatePresence>
          <motion.div
            className="absolute w-full h-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <ExampleClubs
              clubsList={clubExamples}
              selectedTypes={selectedClubTypes}
              onNextSlide={onNextSlide}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default FifthSlide;
