
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionCounter from './SectionCounter';
import { mergeSubjects } from './mergeSubjects';

const CollapsibleCounter = ({ totalSelected, totalSubjects, selectedSubjects, sectionCounts, onSubjectSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSections, setSelectedSections] = useState([]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedSections([]);
    }
  };

  const handleSubjectSelect = (subject) => {
    if (!selectedSections.includes(subject)) {
      setSelectedSections([...selectedSections, subject]);
    }
    onSubjectSelect(subject);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end z-[9999] scale-100 hover:scale-110">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-2 bg-black rounded-lg overflow-hidden shadow-lg"
          >
            {selectedSubjects.map((subject, index) => (
              <motion.button
                key={index}
                className="flex w-full text-left px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => handleSubjectSelect(subject)}
              >
                {subject}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-2">
        <AnimatePresence>
          {selectedSections.map((section) => (
            <SectionCounter
              key={section}
              count={sectionCounts[section] || 0}
              section={section}
              maxCount={mergeSubjects([section])[section].length}
            />
          ))}
        </AnimatePresence>

        <motion.div 
          className="bg-black p-5 rounded-lg shadow-md flex items-center cursor-pointer text-white"
          onClick={toggleOpen}
          whileHover={{ scale: 1.2 }}  // Scaling on hover
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">
            Selected: <span style={{ fontWeight: 1000 }} className="ml-1">{totalSelected}</span> / <span className="mr-1">{totalSubjects}</span>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default CollapsibleCounter;
