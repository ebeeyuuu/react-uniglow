import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressBarProps {
  currentProgressValue: number;
  maxProgressValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentProgressValue,
  maxProgressValue,
}) => {
  const [progress, setProgress] = useState(0);
  const targetAmount = maxProgressValue;

  useEffect(() => {
    const percentage = Math.min(
      (currentProgressValue / targetAmount) * 100,
      100,
    );
    setProgress(percentage);
  }, [currentProgressValue, targetAmount]);

  return (
    <AnimatePresence>
      <div className="w-full max-w-xl mx-auto mt-10">
        <div className="bg-white rounded-full h-8 w-full overflow-hidden">
          <motion.div
            className="bg-[#003dcc] h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProgressBar;
