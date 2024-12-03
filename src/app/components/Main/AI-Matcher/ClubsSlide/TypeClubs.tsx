import React, { useState, useMemo } from "react";
import Checkmark from "./Checkmark";
import TypeClubsCounter from "./TypeClubsCounter";

type Club = {
  type: string;
  description: string;
  colSpan?: number;
  rowSpan?: 1 | 2;
};

interface TypeClubsProps {
  clubTypes: Club[];
  onConfirm: (selectedTypes: string[]) => void;
}

const TypeClubs: React.FC<TypeClubsProps> = ({ clubTypes, onConfirm }) => {
  const [selectedCards, setSelectedCards] = useState<boolean[]>(
    Array(clubTypes.length).fill(false),
  );

  const toggleSelected = (index: number) => {
    setSelectedCards((prev) =>
      prev.map((selected, idx) => (idx === index ? !selected : selected)),
    );
  };

  const getColumnCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1536) return 6;
      if (window.innerWidth >= 1280) return 5;
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
    }
    return 2;
  };

  const columnCount = getColumnCount();

  const layoutItems = useMemo(() => {
    const layout: Club[] = [];
    const columns = columnCount;
    let remainingSlots = columns;

    clubTypes.forEach((club, index) => {
      const isLastRow =
        Math.floor(index / columns) ===
        Math.floor((clubTypes.length - 1) / columns);
      const canSpanTwo = remainingSlots > 1 && !isLastRow;

      if (canSpanTwo && Math.random() < 0.4) {
        layout.push({ ...club, rowSpan: 2 });
        remainingSlots -= 1;
      } else {
        layout.push({ ...club, rowSpan: 1 });
        remainingSlots -= 1;
      }

      if (remainingSlots <= 0) {
        remainingSlots = columns;
      }
    });

    return layout;
  }, [clubTypes, columnCount]);

  const handleConfirm = () => {
    const selectedTypes = clubTypes
      .filter((_, index) => selectedCards[index])
      .map((club) => club.type);
    onConfirm(selectedTypes);
  };

  return (
    <div
      className={`p-6 mb-10 sm:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-7 md:gap-8 h-full w-full relative`}
    >
      {layoutItems.map((club, index) => (
        <div
          key={index}
          className={`
            bg-[#001f66] shadow-xl shadow-[#003DCC]/50 rounded-lg 
            hover:shadow-[#f4b034]/50 transition-all duration-300 
            flex flex-col w-full h-full hover:border-black gap-2 
            p-6 lg:p-8 xl:p-10 2xl:p-12 scale-100 hover:scale-105 cursor-pointer
            ${club.rowSpan === 2 ? "row-span-2" : ""}
            ${club.colSpan ? `col-span-${club.colSpan}` : ""}
          `}
          onClick={() => toggleSelected(index)}
        >
          {club.type && (
            <>
              <h3 className="text-sm sm:text-base md:text-lg xl:text-xl font-extrabold mb-1 sm:mb-2">
                {club.type}
              </h3>
              <p className="text-xs text-gray-300 sm:text-sm md:text-base xl:text-lg grow overflow-auto">
                {club.description}
              </p>
            </>
          )}
          <Checkmark isSelected={selectedCards[index]} />
        </div>
      ))}
      <div className="fixed top-4 right-4">
        <TypeClubsCounter
          totalCount={clubTypes.length}
          count={selectedCards.filter(Boolean).length}
          onConfirm={handleConfirm}
        />
      </div>
    </div>
  );
};

export default TypeClubs;
