import React, { useMemo } from "react";

type Club = {
  type: string;
  description: string;
};

interface TypeClubsProps {
  clubTypes: Club[];
}

const TypeClubs: React.FC<TypeClubsProps> = ({ clubTypes }) => {
  const rowSpans = useMemo(() => {
    return clubTypes.map((_, index) => {
      if (index === clubTypes.length - 1) return false;
      return Math.random() < 0.25;
    });
  }, [clubTypes]);

  return (
    <div className="p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 h-full w-full">
      {clubTypes.map((club, index) => (
        <div
          key={index}
          className={`bg-black border-gray-600 border shadow-md shadow-gray-600 rounded-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 flex flex-col hover:border-black p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 ${
            rowSpans[index] ? "row-span-2" : ""
          }`}
        >
          <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold mb-1 sm:mb-2">
            {club.type}
          </h3>
          <p className="text-xs sm:text-sm md:text-base xl:text-lg flex-grow overflow-auto">
            {club.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TypeClubs;
