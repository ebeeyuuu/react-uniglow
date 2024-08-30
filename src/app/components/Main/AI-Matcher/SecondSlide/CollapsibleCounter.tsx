import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionCounter from './SectionCounter';
import { mergeSubjects } from './mergeSubjects';
import { FaTimes } from 'react-icons/fa';

interface CollapsibleCounterProps {
  totalSelected: number;
  totalSubjects: number;
  selectedSubjects: string[];
  sectionCounts: { [key: string]: number };
  onSubjectSelect: (subject: string) => void;
}

const CollapsibleCounter: React.FC<CollapsibleCounterProps> = ({
  totalSelected,
  totalSubjects,
  selectedSubjects,
  sectionCounts,
  onSubjectSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubjectSelect = (subject: string) => {
    if (!selectedSections.includes(subject)) {
      setSelectedSections([...selectedSections, subject]);
    }
    onSubjectSelect(subject);
    setIsOpen(false);
  };

  const removeCounter = (section: string) => {
    setSelectedSections(selectedSections.filter((s) => s !== section));
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div className="fixed top-8 right-8 flex flex-col items-end z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-black border rounded-xl p-20 relative">
              <h2 className="text-2xl font-bold mb-4">Select a section</h2>
              {selectedSubjects.map((subject, index) => (
                <button
                  key={index}
                  className="block w-full text-left p-0 px-0 py-0 hover:px-2 hover:py-4 mb-4 rounded-xl hover:bg-gray-700 transition-all duration-500 ease-in-out"
                  onClick={() => handleSubjectSelect(subject)}
                >
                  {index + 1}: {subject}
                </button>
              ))}
              <button
                className="absolute bottom-4 right-4 p-2 rounded-full bg-black hover:bg-white hover:text-black transition-colors duration-500"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes size={24}/>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-2">
        <button
          className="bg-black p-5 rounded-lg flex items-start justify-start cursor-pointer text-white transition-transform duration-300 ease-in-out transform hover:scale-110 w-full z-50 border"
          onClick={toggleOpen}
        >
          <span>
            Selected: <span className="font-bold ml-1">{totalSelected}</span> /{' '}
            <span className="mr-1">{totalSubjects}</span>
          </span>
        </button>

        <AnimatePresence>
          {selectedSections.map((section, index) => (
            <SectionCounter
              key={index}
              count={sectionCounts[section] || 0}
              section={section}
              maxCount={mergeSubjects([section])[section].length}
              onRemove={() => removeCounter(section)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CollapsibleCounter;
