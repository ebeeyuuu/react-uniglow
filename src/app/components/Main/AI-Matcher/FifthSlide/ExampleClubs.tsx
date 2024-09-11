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
  const [showContent, setShowContent] = useState(false);

  const filteredClubsList = useMemo(() => {
    if (selectedTypes.length === 0) return clubsList;

    const convertedTypes = selectedTypes.map(convertTypeToKey);

    return Object.fromEntries(
      Object.entries(clubsList).filter(([section]) =>
        convertedTypes.includes(section),
      ),
    );
  }, [clubsList, selectedTypes]);

  const handleExpand = (section: string) => {
    if (expandedSection === section) {
      setShowContent(false);
      setTimeout(() => setExpandedSection(null), 300); // Close after content fade out
    } else {
      setExpandedSection(section);
      setShowContent(false);
      setTimeout(() => setShowContent(true), 500); // Show content after expansion animation
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Object.entries(filteredClubsList).map(([section, clubs]) => (
          <motion.div
            key={section}
            layoutId={section}
            onClick={() => handleExpand(section)}
            initial={false}
            animate={{
              zIndex: expandedSection === section ? 10 : 1,
            }}
            transition={{ duration: 0.5 }}
            className={`selection flex justify-center items-center border rounded-xl p-6 cursor-pointer
              ${expandedSection === section ? "fixed inset-0 bg-black text-white" : "hover:scale-105"}
            `}
            style={{
              width: expandedSection === section ? "100%" : "auto",
              height: expandedSection === section ? "100%" : "auto",
            }}
          >
            {expandedSection !== section && (
              <div className="text-lg font-bold text-center">
                {convertKeyToDisplayName(section)}
              </div>
            )}

            {expandedSection === section && (
              <AnimatePresence>
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full overflow-y-auto scrollbar-hide p-8"
                  >
                    <h2 className="text-2xl font-bold mb-6">
                      {convertKeyToDisplayName(section)}
                    </h2>
                    {clubs.map((club, index) => (
                      <div className="flex flex-col mb-8 gap-2" key={index}>
                        <div className="text-lg font-semibold">{club.name}</div>
                        <div className="text-backgroundColor">
                          {club.club_description}
                        </div>
                        <div className="text-base font-medium">
                          {club.university}
                        </div>
                        <div className="text-xs font-light">
                          {club.university_description}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExpand(section);
                      }}
                      className="mt-4 text-blue-400 hover:text-blue-300"
                    >
                      Back to all sections
                    </button>
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
