import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock } from "react-icons/fa";

interface ProgressBarProps {
  currentProgressValue: number;
  maxProgressValue: number;
  timeLimitDays: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentProgressValue,
  maxProgressValue,
  timeLimitDays,
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
      <div className="w-full max-w-xl mt-10">
        <div className="w-full justify-between items-center flex flex-row p-2">
          <div className="text-base font-medium">${currentProgressValue}</div>
          <div className="text-base font-medium">${targetAmount}</div>
        </div>
        <div className="bg-white rounded-[15px] h-10 w-full overflow-hidden mt-2">
          <motion.div
            className="bg-[#003dcc] h-full rounded-xl"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <div className="w-full justify-between items-center flex flex-row p-2 mt-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-base font-medium">{timeLimitDays} days</div>
            <FaClock />
          </div>
          <div className="text-base font-medium">{progress}%</div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProgressBar;
