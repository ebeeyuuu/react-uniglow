import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface DetailedSubject {
  id: string;
  subject: string;
  difficulty: number;
  level: string;
  category: string;
}

interface ConfirmDetailedSubjectsProps {
  onConfirm: () => void;
  onCancel: () => void;
  selectedSubjects: DetailedSubject[];
  categories: string[];
  onRemoveSubject: (subject: DetailedSubject) => void;
}

const ConfirmDetailedSubjects: React.FC<ConfirmDetailedSubjectsProps> = ({
  onConfirm,
  onCancel,
  selectedSubjects,
  categories,
  onRemoveSubject,
}) => {
  const [removingSubject, setRemovingSubject] = useState<string | null>(null);

  useEffect(() => {
    if (removingSubject) {
      const timer = setTimeout(() => {
        setRemovingSubject(null);
      }, 300); // Match this with the animation duration
      return () => clearTimeout(timer);
    }
  }, [removingSubject]);

  const groupedSubjects = categories.reduce(
    (acc, category) => {
      acc[category] = selectedSubjects.filter(
        (subject) => subject.category === category,
      );
      return acc;
    },
    {} as Record<string, DetailedSubject[]>,
  );

  const handleRemoveSubject = (subject: DetailedSubject) => {
    setRemovingSubject(subject.id);
    onRemoveSubject(subject);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center p-4 scrollbar-hide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-xl shadow-md w-full max-w-7xl h-[90vh] overflow-hidden flex flex-col">
          <div className="flex-grow overflow-y-auto p-10 scrollbar-hide">
            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-6">
              {categories.map((category, index) => {
                const subjects = groupedSubjects[category] || [];
                return (
                  <div
                    key={index}
                    className="bg-[#02ad83]/40 backdrop-blur-sm p-10 rounded-lg"
                  >
                    <div className="text-xl font-medium mb-3 text-[#f4b034]">
                      Section No.{index + 1}
                    </div>
                    <div className="text-3xl font-bold mb-8 text-white">
                      {category}
                    </div>
                    <AnimatePresence>
                      {subjects.length > 0 ? (
                        subjects.map((subject) => (
                          <motion.div
                            key={subject.id}
                            initial={{ opacity: 1, height: "auto" }}
                            animate={{
                              opacity: removingSubject === subject.id ? 0 : 1,
                              height:
                                removingSubject === subject.id ? 0 : "auto",
                            }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex justify-between items-center text-base text-gray-200 mb-2"
                          >
                            <span style={{ fontWeight: 600 }}>
                              {subject.subject}
                            </span>
                            <button
                              onClick={() => handleRemoveSubject(subject)}
                              className="text-white hover:text-red-500 transition-colors duration-200"
                            >
                              <FaTimes />
                            </button>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-gray-300">
                          No selected subjects in this section
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-4 mb-16 bg-transparent">
            <button
              className="border-[#003dcc] border-2 bg-[#003dcc] text-white font-bold py-2 px-4 rounded-lg text-lg"
              onClick={onConfirm}
            >
              Confirm
            </button>
            <button
              className="border-[#f31722] border-2 bg-[#f31722] text-white font-bold py-2 px-4 rounded-lg text-lg"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConfirmDetailedSubjects;
