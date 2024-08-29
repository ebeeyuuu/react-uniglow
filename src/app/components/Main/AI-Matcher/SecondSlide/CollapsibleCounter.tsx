import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionCounter from './SectionCounter'
import { mergeSubjects } from './mergeSubjects';


const CollapsibleCounter = ({ totalSelected, totalSubjects, selectedSubjects, sectionCounts, onSubjectSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedSection(null)
    }
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSection(subject);
    onSubjectSelect(subject)
  };

  return (
    <div className="fixed bottom-4 right-4 flex items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mr-2 bg-black rounded-lg overflow-hidden"
          >
            {selectedSubjects.map((subject, index) => (
              <motion.button
                key={index}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                onClick={() => handleSubjectSelect(subject)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {subject}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex flex-col items-end">
        <AnimatePresence>
          {selectedSection && (
            <SectionCounter
              key={selectedSection}
              count={sectionCounts[selectedSection] || 0}
              section={selectedSection}
              maxCount={mergeSubjects([selectedSection])[selectedSection].length}
            />
          )}
        </AnimatePresence>
        
        <motion.div 
          className="bg-black p-5 rounded-lg shadow-md flex items-center cursor-pointer"
          onClick={toggleOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">
            Selected: <span style={{ fontWeight: 1000 }} className="ml-1">{totalSelected}</span> / <span className="mr-1">{totalSubjects}</span>
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default CollapsibleCounter;