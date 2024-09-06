import React, { useMemo } from "react";

type Club = {
  type: string;
  description: string;
  colSpan?: number;
  rowSpan?: 1 | 2;
};

interface TypeClubsProps {
  clubTypes: Club[];
}

const TypeClubs: React.FC<TypeClubsProps> = ({ clubTypes }) => {
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
  const { layoutItems } = useMemo(() => {
    const columns = columnCount;
    const layout: Club[] = [];
    let remainingSlots = columns;

    const totalRows = Math.ceil(clubTypes.length / columns);
    const totalSlots = totalRows * columns;

    clubTypes.forEach((club, index) => {
      const currentRow = Math.floor(index / columns);
      const isLastTwoRows = currentRow >= totalRows - 2;
      const canSpanTwo = remainingSlots >= 2 && !isLastTwoRows;

      if (canSpanTwo && Math.random() < 0.4) {
        layout.push({ ...club, rowSpan: 2 });
        remainingSlots -= 2;
      } else {
        layout.push({ ...club, rowSpan: 1 });
        remainingSlots -= 1;
      }

      if (remainingSlots <= 0) {
        remainingSlots = columns;
      }
    });

    while (layout.length < totalSlots) {
      const remainingInRow = columns - (layout.length % columns);
      console.log(remainingInRow);
      layout.push({
        type: "",
        description: "",
        colSpan: remainingInRow,
        rowSpan: 1,
      });
    }

    for (let i = totalSlots - columns; i < totalSlots; i++) {
      if (layout[i].rowSpan === 2) {
        layout[i].rowSpan = 1;
      }
    }

    return { layoutItems: layout };
  }, [clubTypes, columnCount]);

  return (
    <div
      className={`p-2 sm:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-7 md:gap-8 h-full w-full`}
    >
      <div
        className={`
          col-span-2 
          md:col-span-2 
          lg:col-span-2 
          xl:col-span-5 
          2xl:col-span-2
        `}
      >
        <div className="bg-[#153684] shadow-lg shadow-[#003DCC]/50 rounded-lg hover:shadow-[#f4b034]/50 transition-all duration-300 flex flex-col w-full h-full hover:border-black gap-2 p-6 lg:p-8 xl:p-10 2xl:p-12">
          <h3 className="text-sm sm:text-base md:text-lg xl:text-xl font-extrabold mb-1 sm:mb-2">
            Featured Club
          </h3>
          <p className="text-xs text-gray-300 sm:text-sm md:text-base xl:text-lg flex-grow overflow-auto">
            This is a featured club description. It spans multiple columns based
            on the grid size.
          </p>
        </div>
      </div>

      {layoutItems.map((club, index) => (
        <div
          key={index}
          className={`
            bg-[#153684] shadow-lg shadow-[#003DCC]/50 rounded-lg 
            hover:shadow-[#f4b034]/50 transition-all duration-300 
            flex flex-col w-full h-full hover:border-black gap-2 
            p-6 lg:p-8 xl:p-10 2xl:p-12
            ${club.rowSpan === 2 ? "row-span-2" : ""}
            ${club.colSpan ? `col-span-${club.colSpan}` : ""}
          `}
        >
          {club.type && (
            <>
              <h3 className="text-sm sm:text-base md:text-lg xl:text-xl font-extrabold mb-1 sm:mb-2">
                {club.type}
              </h3>
              <p className="text-xs text-gray-300 sm:text-sm md:text-base xl:text-lg flex-grow overflow-auto">
                {club.description}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TypeClubs;
