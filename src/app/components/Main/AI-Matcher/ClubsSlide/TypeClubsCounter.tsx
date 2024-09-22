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
        className="bg-[#003dcc] hover:bg-transparent border border-[#003dcc] hover:border-white font-bold py-2 px-4 rounded-full transition-colors ease-in-out duration-500"
        onClick={onConfirm}
      >
        Confirm
      </button>
    </motion.div>
  );
};

export default TypeClubsCounter;
