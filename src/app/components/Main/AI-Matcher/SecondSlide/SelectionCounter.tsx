import React from 'react';
import { motion } from 'framer-motion'

const SelectionCounter = ({ count, onConfirm }) => (
  <motion.div 
    className="absolute bottom-4 right-4 bg-black border p-3 gap-x-2 rounded-lg shadow-md flex items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="mr-2">{count}/10 subjects chosen</span>
    <button 
      className="bg-white hover:bg-[#f4b034] text-black font-bold py-1 px-3 rounded-full transition-colors ease-in-out duration-500"
      onClick={onConfirm}
    >
      Confirm
    </button>
  </motion.div>
);

export default SelectionCounter;