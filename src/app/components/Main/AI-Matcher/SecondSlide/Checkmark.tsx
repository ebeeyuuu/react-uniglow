import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Checkmark = ({ isSelected }) => (
  <motion.div
    className={`absolute bottom-3 right-3 rounded-full ${isSelected ? "opacity-100" : "opacity-0"}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.5 }}
  >
    <FaCheck size={14} />
  </motion.div>
);

export default Checkmark;
