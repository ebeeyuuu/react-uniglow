import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { 
  math_subjects, 
  art_subjects, 
  science_subjects, 
  english_subjects, 
  history_subjects, 
  geography_subjects, 
  physical_education_subjects, 
  music_subjects, 
  language_subjects, 
  technology_subjects 
} from '@/data'

function flattenSubjects(arrays) {
  return arrays.reduce((acc, array) => acc.concat(array), [])
}

const allSubjects = flattenSubjects([
  math_subjects,
  art_subjects,
  science_subjects,
  english_subjects,
  history_subjects,
  geography_subjects,
  physical_education_subjects,
  music_subjects,
  language_subjects,
  technology_subjects,
])

const ConfirmDialog = ({ onConfirm, onCancel, subjects }) => (
  <motion.div 
    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-black px-24 py-20 rounded-xl shadow-md">
      <p className="text-xl font-bold mb-2">Confirm chosen subjects:</p>
      <ol className="mb-10">
        {(subjects.sort((a, b) => a.localeCompare(b))).map((subject, index) => (
          <li key={subject} className="text-lg font-medium">{index + 1}. {subject}</li>
        ))}
      </ol>
      <div className="flex justify-center gap-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onConfirm}>
          Yes
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  </motion.div>
);

const SelectionCounter = ({ count, onConfirm }) => (
  <motion.div 
    className="absolute bottom-4 right-4 bg-black p-5 gap-x-4 rounded-lg shadow-md flex items-center border"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="mr-2">{count}/10 subjects chosen</span>
    <button 
      className="bg-green-500 hover:bg-green-950/80 text-black font-bold py-2 px-4 rounded-full"
      onClick={onConfirm}
    >
      Confirm
    </button>
  </motion.div>
);

const Checkmark = ({ isSelected }) => (
  <motion.div 
    className={`absolute bottom-4 right-4 bg-black p-4 rounded-full ${isSelected ? 'opacity-100' : 'opacity-0'}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
  >
    <FaCheck size={14} />
  </motion.div>
);

const SubjectButton = ({ subject, onClick, isSelected, className }) => (
  <motion.div 
    className={`${className} rounded-xl flex justify-center items-center smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
    onClick={() => onClick(subject)}
  >
    {subject}
    {isSelected && (
      <Checkmark isSelected={isSelected} />
    )}
  </motion.div>
);

const SecondSlide = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [animateGenericSubjects, setAnimateGenericSubjects] = useState(false);
  const [animateSpecificSubjects, setAnimateSpecificSubjects] = useState(false);

  const [scrollEnabled, setScrollEnabled] = useState(false)  

  const handleSubjectClick = (subject) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject].slice(0, 10)
    );
  };

  const handleConfirmSelection = () => {
    setIsConfirmVisible(true);
  };

  const handleFinalConfirm = () => {
    setIsConfirmVisible(false);
    setAnimateGenericSubjects(false);
    setAnimateSpecificSubjects(true);
  };

  const handleCancel = () => {
    setIsConfirmVisible(false);
    setAnimateGenericSubjects(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimateGenericSubjects(true)
      setScrollEnabled(true)
    }, 3000);

    
  })


  const subjects = [
    { name: "Science", className: "bg-[#003dcc]/75 row-span-1 col-span-2 max-[850px]:col-span-1 max-[850px]:9" },
    { name: "English", className: "bg-[#08155e] row-span-1 col-span-1 max-[850px]:row-span-2 max-[850px]:8" },
    { name: "Mathematics", className: "bg-[#003dcc] row-span-2 col-span-2 max-[850px]:row-span-2 max-[850px]:col-span-1 max-[850px]:6" },
    { name: "Technology", className: "bg-[#00309f] row-span-2 col-span-1 max-[850px]:row-span-2 max-[850px]:7" },
    { name: "History", className: "bg-[#02ad83] row-span-1 col-span-1 max-[850px]:row-span-2 max-[850px]:5" },
    { name: "Geography", className: "bg-[#02ad83]/70 row-span-1 col-span-2 max-[850px]:row-span-2 max-[850px]:col-span-1 max-[850px]:5" },
    { name: "Art", className: "bg-[#08155e] row-span-2 col-span-1" },
    { name: "Music", className: "bg-[#00309f]/80 row-span-1 col-span-1 max-[850px]:row-span-2" },
    { name: "Physical Education", className: "bg-[#003dcc]/75 row-span-1 col-span-1 max-[850px]:row-span-2 max-[850]x:5" },
    { name: "Languages", className: "bg-[#003dcc] row-span-1 col-span-2 max-[850px]:col-span-1" }
  ];

  return (
    <div className={`w-full h-screen ${scrollEnabled ? "overflow-y-scroll" : "overflow-hidden"} scrollbar-hide`}>
      <div className="relative w-full h-[100vh] scroll-smooth">
        <AnimatePresence>
          {!animateGenericSubjects && !animateSpecificSubjects && (
            <motion.div
              className="text-3xl font-bold fixed top-0 left-0 w-full h-full flex justify-center items-center"
            >
              Let&apos; talk about you - what subjects light you up?
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {animateGenericSubjects && !animateSpecificSubjects && (
            <motion.div
              className="h-full w-full grid grid-cols-3 max-[850px]:grid-cols-2 grid-rows-6 max-[850px]:grid-rows-9 gap-[22px] py-10 px-4 absolute"
              initial={{ y: 1000, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
              exit={{ y: '100%', opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              {subjects.map(subject => (
                <SubjectButton 
                  key={subject.name}
                  subject={subject.name}
                  onClick={handleSubjectClick}
                  isSelected={selectedSubjects.includes(subject.name)}
                  className={subject.className}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {selectedSubjects.length > 0 && !isConfirmVisible && animateGenericSubjects && !animateSpecificSubjects && (
          <SelectionCounter 
            count={selectedSubjects.length} 
            onConfirm={handleConfirmSelection}
          />
        )}

        {isConfirmVisible && (
          <ConfirmDialog 
            onConfirm={handleFinalConfirm} 
            onCancel={handleCancel} 
            subjects={selectedSubjects}
          />
        )}
        <AnimatePresence>
          {animateSpecificSubjects && (
            <motion.div
              className={`text-3xl font-bold fixed top-0 left-0 flex justify-center scrollbar-hide w-full h-full overflow-y-scroll`}
              initial={{ y: 1000, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" }}}
              exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" }}}
            >
              <div className="flex flex-col gap-10 w-4/5 h-[200vh] scroll-smooth">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-4">
                  {math_subjects.map((subject) => (
                    <div key={subject.id} className="p-4 border border-white/50 rounded-lg bg-gray-950">
                      <h3 className="text-lg font-bold mb-2">{subject.subject}</h3>
                      <p className="text-sm">Level: {subject.level}</p>
                      <p className="text-sm">Difficulty: {subject.difficulty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SecondSlide;
