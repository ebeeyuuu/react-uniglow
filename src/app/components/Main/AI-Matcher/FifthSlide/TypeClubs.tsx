import React, { useMemo } from "react";

type Club = {
  type: string;
  description: string;
};

interface TypeClubsProps {
  clubTypes: Club[];
}

const TypeClubs: React.FC<TypeClubsProps> = ({ clubTypes }) => {
  const getColumnCount = () => {
    if (window.innerWidth >= 1536) return 6; // 2xl
    if (window.innerWidth >= 1280) return 5; // xl
    if (window.innerWidth >= 1024) return 4; // lg
    if (window.innerWidth >= 768) return 3; // md
    return 2; // sm and default
  };

  const rowSpans = useMemo(() => {
    const columns = getColumnCount();
    let remainingSlots = columns; // Track available slots per row

    return clubTypes.map((_, index) => {
      if (index === clubTypes.length - 1) {
        return false;
      }

      if (remainingSlots <= 1 || Math.random() >= 0.3) {
        remainingSlots -= 1;
        if (remainingSlots === 0) remainingSlots = columns;
        return false;
      }

      remainingSlots -= 2;
      if (remainingSlots <= 0) remainingSlots = columns;

      return true;
    });
  }, [clubTypes]);

  return (
    <div className="p-2 sm:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-7 md:gap-8 h-full w-full">
      {clubTypes.map((club, index) => (
        <div
          key={index}
          className={`bg-[#161616] shadow-md shadow-gray-800 rounded-lg hover:shadow-lg hover:shadow-gray-600 transition-all duration-300 flex flex-col w-full h-full hover:border-black gap-2 p-6 lg:p-8 xl:p-10 2xl:p-12 ${
            rowSpans[index] ? "row-span-2" : ""
          }`}
        >
          <h3 className="text-sm sm:text-base md:text-lg xl:text-xl font-extrabold mb-1 sm:mb-2">
            {club.type}
          </h3>
          <p className="text-xs text-gray-300 sm:text-sm md:text-base xl:text-lg flex-grow overflow-auto">
            {club.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TypeClubs;
