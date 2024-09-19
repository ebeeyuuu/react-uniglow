import { useState, useEffect } from "react";
import ExpandingServices from "./SixthSlide/ExpandingServices";
import { supportServices } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

interface SlideProps {
  onNextSlide: () => void;
}

const SixthSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowServices(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      <AnimatePresence>
        {!showServices && (
          <motion.div
            className="w-full h-full flex justify-center items-center text-center text-white text-2xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            What kind of support services would make you feel comfortable on
            campus?
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showServices && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ExpandingServices
              services={supportServices}
              leftColumnCount={20}
              onConfirm={onNextSlide}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SixthSlide;
