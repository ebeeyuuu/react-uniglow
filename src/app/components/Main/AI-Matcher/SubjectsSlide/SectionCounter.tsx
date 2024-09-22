import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const SectionCounter = ({ count, section, maxCount, onRemove }) => (
  <motion.div 
    className="bg-black border scale-100 hover:scale-110 p-5 rounded-lg shadow-md flex items-start justify-between transition-all duration-300 ease-in-out w-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="mr-2">{section}: <span style={{ fontWeight: 1000 }} className="mr-1">{count}</span> / <span className="ml-1">{maxCount}</span></span>
    <button
      className="ml-2 p-1 rounded-full bg-black hover:bg-white hover:text-black transition-colors duration-500"
      onClick={onRemove}
    >
      <FaTimes />
    </button>
  </motion.div>
);

export default SectionCounter;
