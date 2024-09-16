import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EndlessScroll from "./ThirdSlide/EndlessScroll";
import Checkmark from "./ThirdSlide/Checkmark";
import { FaArrowLeft } from "react-icons/fa";

type SlideProps = {
  onNextSlide: () => void;
};

const ThirdSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const [categorySelected, setCategorySelected] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const [showArrow, setShowArrow] = useState(false);

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

  const handleConfirm = () => {
    onNextSlide();
  };

  const handleSeeExamples = () => {
    setShowExamples(true);
  };

  const handleCloseExamples = () => {
    setShowExamples(false);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-y-auto overflow-x-visible scrollbar-hide">
      <motion.div
        className="text-center text-xl mb-10 w-11/12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: categorySelected ? -40 : 0 }}
        transition={{ duration: 0.5 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <button
            onClick={handleConfirm}
            className="bg-[#063a2f] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#02ad83]/50 transition-colors duration-300"
          >
            Confirm Selection
          </button>
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

      {showExamples && selectedType && (
        <EndlessScroll
          selectedCategory={selectedType}
          onClose={handleCloseExamples}
        />
      )}
    </div>
  );
};

export default ThirdSlide;
