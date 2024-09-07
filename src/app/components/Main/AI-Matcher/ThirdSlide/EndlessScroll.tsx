import React, { useState, useCallback, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { universityEnvironmentData } from "@/data";
import UniversityCard from "./UniversityCard";
import { FaTimes } from "react-icons/fa";

interface EndlessScrollProps {
  selectedCategory: string;
  onClose: () => void;
}

const EndlessScroll = ({ selectedCategory, onClose }: EndlessScrollProps) => {
  const universities = universityEnvironmentData[selectedCategory] || [];
  const [scrollOffset, setScrollOffset] = useState(0);

  const Row = useMemo(
    () =>
      ({ index, style }) => {
        const startIndex = index * 4; // 4 columns per row
        return (
          <div
            style={style}
            className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 scrollbar-hide"
          >
            {[0, 1, 2, 3].map((offset) => {
              const universityIndex =
                (startIndex + offset) % universities.length;
              const university = universities[universityIndex];
              return (
                <UniversityCard
                  key={universityIndex}
                  university={university}
                  isActive={false}
                />
              );
            })}
          </div>
        );
      },
    [universities],
  );

  const onScroll = useCallback(({ scrollOffset }) => {
    setScrollOffset(scrollOffset);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/50 backdrop-blur-xl scrollbar-hide">
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List scrollbar-hide"
            height={height}
            itemCount={Math.ceil((universities.length * 25) / 4)}
            itemSize={620}
            width={width}
            onScroll={onScroll}
            scrollOffset={scrollOffset}
            overscanCount={3} // Increase overscan to pre-load rows before they appear
          >
            {Row}
          </List>
        )}
      </AutoSizer>
      <button
        onClick={onClose}
        className="fixed z-50 bottom-6 right-6 bg-white text-black hover:bg-black hover:text-white rounded-full p-5 transition-colors duration-300 ease-in-out"
      >
        <FaTimes size={24} />
      </button>
    </div>
  );
};

export default EndlessScroll;
