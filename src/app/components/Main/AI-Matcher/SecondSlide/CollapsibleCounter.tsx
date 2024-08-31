import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface CollapsibleCounterProps {
  totalSelected: number;
  totalSubjects: number;
  selectedSubjects: string[];
  sectionCounts: { [key: string]: number };
  onSubjectSelect: (subject: string) => void;
  onConfirmClick: () => void;
}

const CollapsibleCounter: React.FC<CollapsibleCounterProps> = ({
  totalSelected,
  totalSubjects,
  selectedSubjects,
  sectionCounts,
  onSubjectSelect,
  onConfirmClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="fixed top-0 right-0 bg-black p-4 rounded-3xl shadow-lg z-50"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex justify-between items-center w-full p-3 gap-x-4">
        <div className="flex items-center gap-x-4">
          <button
            onClick={toggleOpen}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaChevronDown /> : <FaChevronUp />}
          </button>
          <div className="text-white text-lg font-bold">
            {totalSelected} / {totalSubjects} selected
          </div>
        </div>
        <button
          onClick={onConfirmClick}
          className="bg-[#003dcc] text-white px-4 py-2 rounded-lg hover:bg-[#002a8f] transition-colors duration-200"
        >
          Confirm Selection
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            {selectedSubjects.map((subject) => (
              <div
                key={subject}
                className="flex justify-between items-center py-4 border-b border-gray-600"
              >
                <span className="text-white">{subject}</span>
                <span className="text-white">
                  {sectionCounts[subject] || 0}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CollapsibleCounter;
