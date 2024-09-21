import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Checkmark from "./ThirdSlide/Checkmark";
import { FaArrowLeft } from "react-icons/fa";
import UniversitiesEndlessScroll from "./ThirdSlide/UniversitiesEndlessScroll";

import { useUniversityRecommendations } from "@/context/useUniversityRecommendation";

type SlideProps = {
  onNextSlide: () => void;
};

function formatEnvironment(environment: string): string {
  const words = environment
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(" ");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  return formattedWords.join(" ");
}

const ThirdSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  const { updateUniversityRecommendations } = useUniversityRecommendations();

  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const [categorySelected, setCategorySelected] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const [showCountries, setShowCountries] = useState(false);
  const [fadeContent, setFadeContent] = useState(false);

  const [showArrow, setShowArrow] = useState(false);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedType(null);
        setShowExamples(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const environments = ["bustlingCities", "suburbanAreas", "ruralSettings"];

  const handleSelection = (type: string) => {
    setSelectedType(type);
    setCategorySelected(true);
    setShowArrow(true);
  };

  const handleFirstConfirm = async () => {
    const formattedType = formatEnvironment(selectedType?.toString() || "");
    await updateUniversityRecommendations({
      idealArea: formattedType,
    });
    setFadeContent(true);
    setTimeout(() => {
      setShowCountries(true);
    }, 500);
  };

  const handleSeeExamples = () => {
    setShowExamples(true);
  };

  const handleCloseExamples = () => {
    setShowExamples(false);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-y-auto overflow-x-visible scrollbar-hide">
      <AnimatePresence>
        {!showCountries && (
          <>
            <motion.div
              className="text-center text-3xl mb-10 w-11/12"
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: fadeContent ? 0 : 1,
                y: categorySelected ? -40 : 0,
              }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              When you think about your ideal college location, do you picture
              yourself in a <strong>bustling city</strong>, a{" "}
              <strong>quiet suburban area</strong>, or a{" "}
              <strong>rural setting</strong> surrounded by nature?
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 w-11/12"
              initial={{ y: 0 }}
              animate={{ y: categorySelected ? -40 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {environments.map((type) => (
                <motion.div
                  key={type}
                  className="bg-[#003dcc] rounded-xl flex items-center justify-center cursor-pointer h-[400px] relative overflow-hidden"
                  onClick={() => handleSelection(type)}
                  onMouseEnter={() => setHoveredType(type)}
                  onMouseLeave={() => setHoveredType(null)}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  animate={{ opacity: fadeContent ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={hoveredType === type ? "example" : "type"}
                      className="text-xl font-bold uppercase italic text-center px-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {hoveredType === type
                        ? "See Examples?"
                        : type.replace(/([A-Z])/g, " $1").trim()}
                    </motion.p>
                  </AnimatePresence>
                  <Checkmark isSelected={selectedType === type} />
                </motion.div>
              ))}
            </motion.div>

            {categorySelected && (
              <motion.div
                className="flex flex-row gap-x-4 justify-center items-center"
                initial={{ opacity: 0, y: 100 }} // Slide up from the bottom
                animate={{ opacity: fadeContent ? 0 : 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ opacity: 0 }}
              >
                <motion.button
                  className="bg-[#063a2f] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#02ad83]/50 transition-colors duration-300"
                  onClick={handleFirstConfirm}
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  initial={{ width: "auto" }}
                  animate={{
                    width: hovered ? "200px" : "120px",
                  }}
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
                        See countries?
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
                <button
                  onClick={handleSeeExamples}
                  className="bg-[#063a2f] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#02ad83]/50 transition-colors duration-300"
                >
                  See examples
                </button>
                {showArrow && (
                  <motion.div
                    className="flex justify-center items-center"
                    animate={{ x: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaArrowLeft className="text-white" size={20} />
                  </motion.div>
                )}
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {showExamples && selectedType && (
        <UniversitiesEndlessScroll
          selectedCategory={selectedType}
          onClose={handleCloseExamples}
        />
      )}

      <AnimatePresence>
        {showCountries && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="text-5xl font-bold text-white">
              Countries
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThirdSlide;
