import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ExamplesNotif from "./ExamplesNotif";
import ConfirmNotif from "./ConfirmNotif";

interface Club {
  name: string;
  university: string;
  club_description: string;
  university_description: string;
}

interface ClubExamples {
  [section: string]: Club[];
}

interface ExampleClubsProps {
  clubsList: ClubExamples;
  selectedTypes: string[];
  onNextSlide: () => void;
}

const convertTypeToKey = (type: string): string => {
  return type
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/clubs?$/i, "Clubs");
};

const convertKeyToDisplayName = (key: string): string => {
  const words = key.replace(/([A-Z])/g, " $1").trim();
  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const borderVariants = {
  expanded: { borderColor: "#000000" },
  collapsed: { borderColor: "#FFFFFF" },
};

const ExampleClubs: React.FC<ExampleClubsProps> = ({
  clubsList,
  selectedTypes,
  onNextSlide,
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [showConfirmNotif, setShowConfirmNotif] = useState(false);

  const [isBounce, setIsBounce] = useState(true);

  const filteredClubsList = useMemo(() => {
    if (selectedTypes.length === 0) return clubsList;

    const convertedTypes = selectedTypes.map(convertTypeToKey);

    return Object.fromEntries(
      Object.entries(clubsList).filter(([section]) =>
        convertedTypes.includes(section),
      ),
    );
  }, [clubsList, selectedTypes]);

  const gridColumns = useMemo(() => {
    const itemCount = Object.keys(filteredClubsList).length;
    if (itemCount <= 6) {
      return `grid-cols-1 ${itemCount > 1 ? `sm:grid-cols-2` : ""} ${itemCount > 2 ? `md:grid-cols-3` : ""
        } ${itemCount > 3 ? `lg:grid-cols-4` : ""} ${itemCount > 4 ? `xl:grid-cols-5` : ""
        } ${itemCount > 5 ? `2xl:grid-cols-6` : ""}`;
    } else {
      return "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6";
    }
  }, [filteredClubsList]);

  const handleExpand = (section: string) => {
    setIsTransitioning(true);
    if (expandedSection === section) {
      setShowContent(false);
      setTimeout(() => {
        setExpandedSection(null);
        setIsTransitioning(false);
        setIsBounce(true);
        setShowConfirmNotif(true);
      }, 300);
    } else {
      setShowContent(false);
      setIsBounce(false);
      setTimeout(() => {
        setExpandedSection(section);
        setTimeout(() => setShowContent(true), 200);
      }, 100);
    }
  };

  useEffect(() => {
    if (isBounce) {
      const timer = setTimeout(() => {
        setIsBounce(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isBounce]);

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide flex justify-center items-center p-8 relative">
      <ExamplesNotif isBounce={isBounce} />
      {showConfirmNotif && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duratio: 0.3 }}
        >
          <ConfirmNotif onConfirm={onNextSlide} />
        </motion.div>
      )}
      <div className={`grid gap-2 mt-96 sm:mt-0 ${gridColumns}`}>
        {Object.entries(filteredClubsList).map(([section, clubs]) => (
          <motion.div
            key={section}
            layoutId={section}
            onClick={() => handleExpand(section)}
            initial={false}
            animate={{
              zIndex: expandedSection === section ? 10 : 1,
              scale: expandedSection === section ? 1 : 0.95,
              ...borderVariants[
              expandedSection === section ? "expanded" : "collapsed"
              ],
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.3,
              borderColor: {
                delay: expandedSection === section ? 0 : 0.5,
                duration: 0.3,
              },
            }}
            onLayoutAnimationComplete={() => setIsTransitioning(false)}
            className={`selection bg-[#001f66] transition-colors duration-500 ease-in-out flex justify-center items-center rounded-xl p-6 cursor-pointer
              ${expandedSection === section ? "fixed inset-0 text-white" : "hover:scale-105 hover:bg-[#001f66] hover:border-[#001f66]"}
            `}
            style={{
              width: expandedSection === section ? "100%" : "auto",
              height: expandedSection === section ? "100%" : "auto",
            }}
          >
            {expandedSection !== section && !isTransitioning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-2xl p-20 font-bold rounded-xl text-center scale-100 hover:scale-110 transition-all duration-500 ease-in-out"
              >
                {convertKeyToDisplayName(section)}
              </motion.div>
            )}

            {expandedSection === section && (
              <AnimatePresence>
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full overflow-y-auto bg-[#001f66] scrollbar-hide p-12 rounded-xl"
                  >
                    <h2 className="text-4xl font-bold mb-14">
                      {convertKeyToDisplayName(section)}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
                      {clubs.map((club, index) => (
                        <div
                          className="flex flex-col bg-black/50 p-10 rounded-xl"
                          key={index}
                        >
                          <div className="divide-y divide-gray-500">
                            <div className="pb-6">
                              <div className="text-xl font-semibold">
                                {club.name}
                              </div>
                              <div className="text-lg font-light text-gray-300 mt-4">
                                {club.club_description}
                              </div>
                            </div>

                            <div className="pt-6">
                              <div className="text-xl font-semibold">
                                {club.university}
                              </div>
                              <div className="text-lg font-light text-gray-300 mt-4">
                                {club.university_description}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExampleClubs;
