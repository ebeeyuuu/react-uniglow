import { useState, useEffect } from "react";
import ExpandingServices from "./ServicesSlide/ExpandingServices";
import { supportServices } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

import { useUniversityRecommendations } from "@/context/useUniversityRecommendation";

interface SlideProps {
  onNextSlide: () => void;
}

const ServicesSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  const { updateUniversityRecommendations } = useUniversityRecommendations();

  const [showServices, setShowServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowServices(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleConfirm = async (services: string[]) => {
    setSelectedServices(services);
    await updateUniversityRecommendations({
      supportServices: selectedServices,
    });
    onNextSlide();
  };

  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      <AnimatePresence>
        {!showServices && (
          <motion.div
            className="h-full flex justify-center items-center text-center text-white text-2xl font-bold w-2/3 mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              What kind of support services would make you feel comfortable on
              campus?
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showServices && (
          <motion.div
            className="w-full h-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ExpandingServices
              services={supportServices}
              leftColumnCount={20}
              onConfirm={handleConfirm}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesSlide;
