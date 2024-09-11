import React, { useMemo } from "react";

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
    .replace(/\s+/g, "") // Remove spaces
    .replace(/clubs?$/i, "Clubs"); // Ensure it ends with 'Clubs'
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
  const filteredClubsList = useMemo(() => {
    if (selectedTypes.length === 0) return clubsList;

    const convertedTypes = selectedTypes.map(convertTypeToKey);

    return Object.fromEntries(
      Object.entries(clubsList).filter(([section]) =>
        convertedTypes.includes(section),
      ),
    );
  }, [clubsList, selectedTypes]);

  console.log("Selected Types:", selectedTypes);
  console.log("Converted Types:", selectedTypes.map(convertTypeToKey));
  console.log("Filtered Clubs List:", filteredClubsList);

  return (
    <div className="w-full h-full flex justify-center items-center relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="absolute top-0 left-0 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Object.entries(filteredClubsList).map(([section, clubs]) => (
          <div
            key={section}
            className="selection min-h-[500px] flex justify-center border rounded-xl p-10 flex-col gap-4 text-wrap"
          >
            <div className="text-lg font-bold">
              {convertKeyToDisplayName(section)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleClubs;
