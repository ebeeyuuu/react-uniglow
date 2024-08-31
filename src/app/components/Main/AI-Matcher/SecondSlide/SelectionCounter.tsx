import React from "react";
import { motion } from "framer-motion";

const SelectionCounter = ({ count, onConfirm }) => (
  <motion.div
    className="absolute top-6 right-0 bg-[#003dcc] px-5 text-white py-3 gap-x-2 z-[1000] rounded-lg shadow-md flex items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="mr-2 font-medium">{count}/10 </span>
    <button
      className="bg-[#003dcc] border-white border-2 hover:border-[#e1960c] font-bold py-2 px-4 rounded-full transition-colors ease-in-out duration-500"
      onClick={onConfirm}
    >
      Confirm
    </button>
  </motion.div>
);

export default SelectionCounter;
