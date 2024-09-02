import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { universityEnvironmentData } from "@/data";
import EndlessScroll from "./ThirdSlide/EndlessScroll";

const ThirdSlide = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedType(null);
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
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center overflow-y-auto scrollbar-hide">
      <motion.div
        className="text-center text-xl mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        When you think about your ideal college location, do you picture
        yourself in a <strong>bustling city</strong>, a{" "}
        <strong>quiet suburban area</strong>, or a{" "}
        <strong>rural setting</strong> surrounded by nature?
      </motion.div>
      <div className="grid grid-cols-3 gap-4 w-full">
        {environments.map((type) => (
          <motion.div
            key={type}
            className="bg-[#003dcc] rounded-xl flex items-center justify-center cursor-pointer h-[400px]"
            onClick={() => handleSelection(type)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <p className="text-xl font-bold uppercase italic">
              {type.replace(/([A-Z])/g, " $1").trim()}
            </p>
          </motion.div>
        ))}
      </div>
      {selectedType && <EndlessScroll selectedCategory={selectedType} />}
    </div>
  );
};

export default ThirdSlide;
