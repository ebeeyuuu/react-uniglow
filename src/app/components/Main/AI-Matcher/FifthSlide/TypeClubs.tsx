import React, { useMemo } from "react";

type Club = {
  type: string;
  description: string;
};

interface TypeClubsProps {
  clubTypes: Club[];
}

const TypeClubs: React.FC<TypeClubsProps> = ({ clubTypes }) => {
  // Generate random boolean array for row spans
  const rowSpans = useMemo(() => {
    return clubTypes.map((_, index) => {
      // Ensure the last item is always false (row span 1)
      if (index === clubTypes.length - 1) return false;
      // Randomly decide for other items (25% chance of being true)
      return Math.random() < 0.25;
    });
  }, [clubTypes]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 h-full w-full">
      {clubTypes.map((club, index) => (
        <div
          key={index}
          className={`bg-black border-gray-600 border shadow-md shadow-gray-600 rounded-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 flex flex-col hover:border-black p-8 ${
            rowSpans[index] ? "row-span-2" : ""
          }`}
        >
          <h3 className="text-lg font-semibold mb-2">{club.type}</h3>
          <p className="text-xs flex-grow overflow-auto">{club.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TypeClubs;
