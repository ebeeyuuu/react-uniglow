import React from 'react';
import { motion } from 'framer-motion'

const SelectionCounter = ({ count, onConfirm }) => (
  <motion.div 
    className="absolute bottom-8 right-4 bg-black border border-gray-500 p-5 gap-x-2 z-[1000] rounded-lg shadow-md flex items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="mr-2">{count}/10 subjects chosen</span>
    <button 
      className="bg-white hover:bg-[#f4b034] text-black font-bold py-2 px-4 rounded-full transition-colors ease-in-out duration-500"
      onClick={onConfirm}
    >
      Confirm
    </button>
  </motion.div>
);

export default SelectionCounter;
