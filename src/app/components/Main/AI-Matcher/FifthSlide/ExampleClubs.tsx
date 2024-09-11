import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const ExampleClubs: React.FC<ExampleClubsProps> = ({
  clubsList,
  selectedTypes,
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const filteredClubsList = useMemo(() => {
    if (selectedTypes.length === 0) return clubsList;

    const convertedTypes = selectedTypes.map(convertTypeToKey);

    return Object.fromEntries(
      Object.entries(clubsList).filter(([section]) =>
        convertedTypes.includes(section),
      ),
    );
  }, [clubsList, selectedTypes]);

  return (
    <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
      <AnimatePresence>
        {expandedSection ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black z-10 overflow-y-auto p-8 scrollbar-hide"
          >
            <button
              onClick={() => setExpandedSection(null)}
              className="mb-4 text-blue-600 hover:text-blue-800"
            >
              Back to all sections
            </button>
            <h2 className="text-2xl font-bold mb-6">
              {convertKeyToDisplayName(expandedSection)}
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {filteredClubsList[expandedSection].map((club, index) => (
                <div className="flex flex-col mb-8 gap-2" key={index}>
                  <div className="text-lg font-semibold">{club.name}</div>
                  <div className="text-base font-medium">{club.university}</div>
                  <div className="text-xs font-light">
                    {club.club_description}
                  </div>
                  <div className="text-xs font-light">
                    {club.university_description}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          >
            {Object.entries(filteredClubsList).map(([section, clubs]) => (
              <motion.div
                key={section}
                layoutId={section}
                onClick={() => setExpandedSection(section)}
                className="selection flex justify-center border rounded-xl p-10 flex-col gap-4 text-wrap cursor-pointer hover:scale-110 scale-100 smooth-animation"
              >
                <div className="text-lg font-bold">
                  {convertKeyToDisplayName(section)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExampleClubs;
