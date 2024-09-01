import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaSearch } from "react-icons/fa";

import ConfirmDialog from "./SecondSlide/ConfirmDialog";
import CollapsibleCounter from "./SecondSlide/CollapsibleCounter";
import SelectionCounter from "./SecondSlide/SelectionCounter";
import Checkmark from "./SecondSlide/Checkmark";
import ConfirmDetailedSubjects from "./SecondSlide/ConfirmDetailedSubjects";

import { Subject, mergeSubjects } from "./SecondSlide/mergeSubjects";

const SubjectButton = ({ subject, onClick, isSelected, className }) => (
  <motion.div
    className={`${className} rounded-xl flex justify-center items-center smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
    onClick={() => onClick(subject)}
  >
    {subject}
    {isSelected && <Checkmark isSelected={isSelected} />}
  </motion.div>
);

const SecondSlide = ({ slideState, setSlideState, onNextSlide }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedDetailedSubjects, setSelectedDetailedSubjects] = useState<
    Subject[]
  >([]);

  const [selectedSection, setSelectedSection] = useState(null);

  const [showSelectedOnly, setShowSelectedOnly] = useState(false);

  const [sectionCounts, setSectionCounts] = useState<{ [key: string]: number }>(
    {},
  );

  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isDetailedConfirmVisible, setIsDetailedConfirmVisible] =
    useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDetailedConfirmVisible(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const [animateGenericSubjects, setAnimateGenericSubjects] = useState(false);
  const [animateSpecificSubjects, setAnimateSpecificSubjects] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortMethod, setSortMethod] = useState("default");

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "alphabeticalAsc", label: "A-Z" },
    { value: "alphabeticalDesc", label: "Z-A" },
    { value: "difficultyAsc", label: "Difficulty (Easy-Hard)" },
    { value: "difficultyDesc", label: "Difficulty (Hard-Easy)" },
    { value: "levelAsc", label: "Level (Lower Secondary-Postgraduate)" },
    { value: "levelDesc", label: "Level (Postgraduate-Lower Secondary)" },
  ];

  const totalSubjects = React.useMemo(() => {
    return Object.values(mergeSubjects(selectedSubjects)).reduce(
      (acc, subjects) => acc + subjects.length,
      0,
    );
  }, [selectedSubjects]);

  const [scrollEnabled, setScrollEnabled] = useState(false);

  const handleSubjectClick = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject].slice(0, 10),
    );
  };

  const handleDetailedSubjectClick = (subject: Subject, category: string) => {
    setSelectedDetailedSubjects((prev) => {
      const isAlreadySelected = prev.some(
        (s) =>
          s.id === subject.id &&
          s.difficulty === subject.difficulty &&
          s.level === subject.level,
      );
      let newSelected;
      if (isAlreadySelected) {
        newSelected = prev.filter(
          (s) =>
            !(
              s.id === subject.id &&
              s.difficulty === subject.difficulty &&
              s.level === subject.level
            ),
        );
      } else {
        newSelected = [...prev, { ...subject, category }];
      }

      const newSectionCounts = Object.entries(
        mergeSubjects(selectedSubjects),
      ).reduce((counts, [section, subjects]) => {
        counts[section] = newSelected.filter((s) =>
          subjects.some(
            (subj) =>
              subj.id === s.id &&
              subj.difficulty === s.difficulty &&
              subj.level === s.level,
          ),
        ).length;
        return counts;
      }, {});

      setSectionCounts(newSectionCounts);

      return newSelected;
    });
  };

  const handleConfirmSelection = () => {
    setIsConfirmVisible(true);
  };

  const handleCancel = () => {
    setIsConfirmVisible(false);
  };

  const handleFinalConfirm = () => {
    setIsConfirmVisible(false);
    setAnimateGenericSubjects(false);
    setAnimateSpecificSubjects(true);
  };

  const handleConfirmClick = () => {
    setIsDetailedConfirmVisible(true);
  };

  const handleRemoveSubject = (subjectToRemove: Subject) => {
    setSelectedDetailedSubjects((prev) =>
      prev.filter(
        (subject) =>
          !(
            subject.id === subjectToRemove.id &&
            subject.difficulty === subjectToRemove.difficulty &&
            subject.level === subjectToRemove.level &&
            subject.category === subject.category
          ),
      ),
    );

    setSectionCounts((prev) => ({
      ...prev,
      [subjectToRemove.category]: prev[subjectToRemove.category] - 1,
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimateGenericSubjects(true);
      setScrollEnabled(true);
    }, 3000);
  });

  useEffect(() => {
    const initialCounts = Object.fromEntries(
      Object.keys(mergeSubjects(selectedSubjects)).map((section) => [
        section,
        0,
      ]),
    );
    setSectionCounts(initialCounts);
  }, [selectedSubjects]);

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  const sortSubjects = (subjects) => {
    const safeCompare = (a, b, property) => {
      const valueA = a[property] || "";
      const valueB = b[property] || "";

      return valueA.toString().localeCompare(valueB.toString());
    };

    const getLevelIndex = (level) => {
      if (level.includes("Lower Secondary")) return 0;
      if (level.includes("Upper Secondary")) return 1;
      if (level.includes("University")) return 2;
      if (level.includes("Postgraduate")) return 3;
    };

    const compareLevels = (a, b, isAscending) => {
      const indexA = getLevelIndex(a.level);
      const indexB = getLevelIndex(b.level);

      return isAscending ? indexA - indexB : indexB - indexA;
    };

    switch (sortMethod) {
      case "alphabeticalAsc":
        return [...subjects].sort((a, b) => safeCompare(a, b, "subject"));
      case "alphabeticalDesc":
        return [...subjects].sort((a, b) => safeCompare(b, a, "subject"));
      case "difficultyAsc":
        return [...subjects].sort((a, b) => safeCompare(a, b, "difficulty"));
      case "difficultyDesc":
        return [...subjects].sort((a, b) => safeCompare(b, a, "difficulty"));
      case "levelAsc":
        return [...subjects].sort((a, b) => compareLevels(a, b, true));
      case "levelDesc":
        return [...subjects].sort((a, b) => compareLevels(a, b, false));
      default:
        return subjects;
    }
  };

  const generic_subjects = [
    {
      name: "Science",
      className: "bg-[#003dcc]/75 row-span-1 col-span-2 max-[850px]:col-span-1",
    },
    {
      name: "English",
      className: "bg-[#08155e] row-span-1 col-span-1 max-[850px]:row-span-2",
    },
    {
      name: "Mathematics",
      className:
        "bg-[#003dcc] row-span-2 col-span-2 max-[850px]:row-span-2 max-[850px]:col-span-1",
    },
    {
      name: "Technology",
      className: "bg-[#00309f] row-span-2 col-span-1 max-[850px]:row-span-2",
    },
    {
      name: "History",
      className: "bg-[#02ad83] row-span-1 col-span-1 max-[850px]:row-span-2",
    },
    {
      name: "Geography",
      className:
        "bg-[#02ad83]/70 row-span-1 col-span-2 max-[850px]:row-span-2 max-[850px]:col-span-1",
    },
    { name: "Art", className: "bg-[#08155e] row-span-2 col-span-1" },
    {
      name: "Music",
      className: "bg-[#00309f]/80 row-span-1 col-span-1 max-[850px]:row-span-2",
    },
    {
      name: "Physical Education",
      className: "bg-[#003dcc]/75 row-span-1 col-span-1 max-[850px]:row-span-2",
    },
    {
      name: "Languages",
      className: "bg-[#003dcc] row-span-1 col-span-2 max-[850px]:col-span-1",
    },
  ];

  return (
    <div
      className={`w-full h-screen ${scrollEnabled ? "overflow-y-scroll" : "overflow-hidden"} scrollbar-hide`}
    >
      <div className="relative w-full h-[100vh] scroll-smooth">
        <AnimatePresence>
          {!animateGenericSubjects && !animateSpecificSubjects && (
            <motion.div className="text-3xl font-bold fixed top-0 left-0 w-full h-full flex justify-center items-center p-12 text-center">
              Let&apos;s talk about you - what subjects light you up?
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {animateGenericSubjects && !animateSpecificSubjects && (
            <motion.div
              className="h-[92%] w-full grid grid-cols-3 max-[850px]:grid-cols-2 grid-rows-6 max-[850px]:grid-rows-9 gap-[22px] py-10 px-4 absolute"
              initial={{ y: 1000, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{
                y: "100%",
                opacity: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              {generic_subjects.map((subject) => (
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

        {selectedSubjects.length > 0 &&
          !isConfirmVisible &&
          animateGenericSubjects &&
          !animateSpecificSubjects && (
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
              className={`font-bold fixed top-0 left-0 flex flex-col scrollbar-hide w-full h-full overflow-y-scroll`}
              initial={{ y: 1000, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              <div className="flex flex-col gap-10 w-full h-full scroll-smooth p-10">
                <div className="w-full max-w-md relative mx-auto mt-[100px]">
                  <input
                    type="text"
                    placeholder="Search specific subjects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-5 pl-14 rounded-lg border bg-black text-white"
                  />
                  <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white" />
                </div>
                <div className="relative w-1/4 mt-[-20px] mx-auto flex justify-center flex-row gap-x-4">
                  <div className="relative w-full mx-auto items-center gap-x-4 flex justify-center">
                    <select
                      value={sortMethod}
                      onChange={(e) => setSortMethod(e.target.value)}
                      className="appearance-none bg-black text-xs border rounded-xl p-4 flex justify-center items-center w-[200px]"
                      style={{ height: "100%" }}
                    >
                      {sortOptions.map((option, index) => (
                        <option
                          key={index}
                          value={option.value}
                          className="bg-black text-center"
                        >
                          Sort by: {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => setShowSelectedOnly(!showSelectedOnly)}
                        className={`p-4 rounded-xl smooth-animation text-xs hover:bg-[#003dcc] border-white bg-black hover:border-[#003dcc] ${
                          showSelectedOnly
                            ? "bg-[#003dcc] border-[#003dcc] border"
                            : "bg-black border border-gray-300"
                        }`}
                      >
                        {showSelectedOnly
                          ? "Show All Subjects"
                          : "Show Selected Subjects"}
                      </button>
                    </div>
                  </div>
                </div>

                {Object.entries(mergeSubjects(selectedSubjects)).map(
                  ([section, subjects], index) => {
                    const filteredSubjects = subjects.filter(
                      (subject) =>
                        subject.subject
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) &&
                        (!showSelectedOnly ||
                          selectedDetailedSubjects.some(
                            (s) =>
                              s.id === subject.id &&
                              s.difficulty === subject.difficulty &&
                              s.level === subject.level,
                          )),
                    );

                    const sortedSubjects = sortSubjects(filteredSubjects);

                    if (sortedSubjects.length === 0) return null;

                    return (
                      <div key={index} className="mb-20 p-10">
                        <h2 className="text-xl font-medium mb-4 text-white/50 uppercase">
                          Section No.{index + 1}
                        </h2>
                        <h1 className="text-3xl font-bold mb-10 text-white">
                          {section}
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-4">
                          {sortedSubjects.map((subject, idx) => (
                            <div
                              key={idx}
                              className="bg-[#001f66] hover:bg-[#003fd3] rounded-xl row-span-1 col-span-1 w-full h-full flex justify-center items-center flex-col gap-2 min-h-[350px] px-10 py-4 scale-100 hover:scale-[105%] transition-all duration-300 ease-in-out"
                              onClick={() =>
                                handleDetailedSubjectClick(subject, section)
                              }
                            >
                              <div className="border-2 border-white/50 text-xs w-full h-[30%] mb-4 rounded-xl justify-center items-center flex">
                                Image
                              </div>
                              <div className="text-base w-full">
                                {subject.subject}
                              </div>
                              <div className="font-medium text-left text-sm w-full">
                                Level: {subject.level}
                              </div>
                              <div className="font-medium text-left text-sm w-full">
                                Difficulty: {subject.difficulty} / 100
                              </div>
                              <Checkmark
                                isSelected={selectedDetailedSubjects.some(
                                  (s) =>
                                    s.id === subject.id &&
                                    s.difficulty === subject.difficulty &&
                                    s.level === subject.level,
                                )}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  },
                )}

                {Object.values(mergeSubjects(selectedSubjects)).every(
                  (subjects) =>
                    subjects.every(
                      (subject) =>
                        !subject.subject
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        (showSelectedOnly &&
                          !selectedDetailedSubjects.some(
                            (s) =>
                              s.id === subject.id &&
                              s.difficulty === subject.difficulty &&
                              s.level === subject.level,
                          )),
                    ),
                ) && (
                  <div className="text-2xl font-bold text-center mt-20">
                    {showSelectedOnly
                      ? "No selected subjects match your search. Try adjusting your filters."
                      : "No results found. Try something else."}
                  </div>
                )}

                {animateSpecificSubjects && (
                  <div className="relative w-full h-full">
                    <CollapsibleCounter
                      totalSelected={selectedDetailedSubjects.length}
                      totalSubjects={totalSubjects}
                      selectedSubjects={selectedSubjects}
                      sectionCounts={sectionCounts}
                      onSubjectSelect={handleSectionSelect}
                      onConfirmClick={handleConfirmClick}
                    />
                  </div>
                )}

                {isDetailedConfirmVisible && (
                  <ConfirmDetailedSubjects
                    onConfirm={() => {
                      setIsDetailedConfirmVisible(false);
                    }}
                    onCancel={() => setIsDetailedConfirmVisible(false)}
                    selectedSubjects={selectedDetailedSubjects}
                    categories={selectedSubjects}
                    onRemoveSubject={handleRemoveSubject}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SecondSlide;
