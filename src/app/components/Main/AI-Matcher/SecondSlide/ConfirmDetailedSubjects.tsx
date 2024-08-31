import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DetailedSubject {
  id: string;
  subject: string;
  difficulty: number;
  level: string;
}

interface ConfirmDetailedSubjectsProps {
  onConfirm: () => void;
  onCancel: () => void;
  selectedSubjects: { [key: string]: DetailedSubject[] };
}

const ConfirmDetailedSubjects: React.FC<ConfirmDetailedSubjectsProps> = ({
  onConfirm,
  onCancel,
  selectedSubjects,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isWideScreen = windowWidth > 1200;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`rounded-xl shadow-md ${isWideScreen ? "w-4/5 h-3/4" : "w-11/12 h-5/6"}`}
        >
          <div
            className={`flex ${isWideScreen ? "flex-row" : "flex-col"} h-[calc(100%-100px)] gap-6`}
          >
            <div
              className={`${isWideScreen ? "w-1/2 pr-4" : "h-1/2 mb-4"} p-10 scrollbar-hide rounded-xl bg-black/60 backdrop-blur-lg overflow-y-auto`}
            >
              {Object.entries(selectedSubjects).map((subjects, index) => (
                <div key={index} className="mb-6">
                  <ul>
                    {subjects.map((subject) => (
                      <li key={subject.id} className="text-lg mb-2">
                        {subject.subject}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className={`${isWideScreen ? "w-1/2 pl-4" : "h-1/2"} p-10 scrollbar-hide rounded-xl bg-black/60 backdrop-blur-lg overflow-y-auto`}
            >
              <h3 className="text-xl font-semibold mb-2">
                All Selected Subjects
              </h3>
              <ul>
                {Object.entries(selectedSubjects).map((subjects, index) => (
                  <ul>
                    {subjects.map((subject) => (
                      <li key={subject.id} className="text-lg mb-2">
                        {subject.subject}
                      </li>
                    ))}
                  </ul>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center gap-x-4 mt-6">
            <button
              className="border-[#003dcc] border-2 bg-black hover:bg-[#003dcc] text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 ease-in-out"
              onClick={onConfirm}
            >
              Confirm
            </button>
            <button
              className="border-[#f31722] border-2 bg-black hover:bg-[#f31722] text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 ease-in-out"
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
