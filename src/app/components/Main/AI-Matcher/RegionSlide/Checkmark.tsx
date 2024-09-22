import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface CheckmarkProps {
  isSelected: boolean;
}

const Checkmark: React.FC<CheckmarkProps> = ({ isSelected }) => {
  return (
    <motion.div
      className={`absolute bottom-3 right-3 p-3 bg-black rounded-full ${isSelected ? "opacity-100" : "opacity-0"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isSelected ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaCheck size={16} />
    </motion.div>
  );
};

export default Checkmark;
