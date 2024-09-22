import React from "react";
import { motion } from "framer-motion";

interface TypeClubsCounterProps {
  count: number;
  totalCount: number;
  onConfirm: () => void;
}

const TypeClubsCounter: React.FC<TypeClubsCounterProps> = ({
  count,
  totalCount,
  onConfirm,
}) => {
  return (
    <motion.div
      className="flex justify-center items-center px-5 py-3 gap-x-2 z-[1000] rounded-xl shadow-xl bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="mr-2 font-medium">
        {count}/{totalCount}
      </span>
      <button
        onClick={onConfirm}
        disabled={count < 1} // Disable button when count is less than 1
        className={`font-bold py-2 px-4 rounded-full transition-colors ease-in-out duration-500 ${count < 1
            ? "bg-[#003dcc]/40 cursor-not-allowed"
            : "bg-[#003dcc] cursor-pointer"
          }`}
      >
        Confirm
      </button>
    </motion.div>
  );
};

export default TypeClubsCounter;
