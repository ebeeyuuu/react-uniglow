import React from 'react';
import { motion } from 'framer-motion';

const SectionCounter = ({ count, section, maxCount }) => (
  <motion.div 
    className="bg-black p-5 rounded-lg shadow-md flex items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="mr-2">{section}: <span style={{ fontWeight: 1000 }} className="mr-1">{count}</span> / <span className="ml-1">{maxCount}</span></span>
  </motion.div>
);

export default SectionCounter;