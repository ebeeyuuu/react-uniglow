import React, { useState, useMemo } from "react";
import { universityEnvironmentData } from "@/data";
import UniversityCard from "./UniversityCard";
import { FaTimes } from "react-icons/fa";

interface UniversityEndlessScrollProps {
  selectedCategory: string;
  onClose: () => void;
}

const UniversitiesEndlessScroll: React.FC<UniversityEndlessScrollProps> = ({
  selectedCategory,
  onClose,
}) => {
  const universities = useMemo(
    () => universityEnvironmentData[selectedCategory] || [],
    [selectedCategory],
  );

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;

    if (bottom) {
      setScrollIndex(
        (prevIndex: number) => (prevIndex + 1) % universities.length,
      );
    }
  };

  const visibleUniversities = useMemo(() => {
    const repeatedUniversities = [
      ...universities.slice(scrollIndex),
      ...universities.slice(0, scrollIndex),
    ];

    return repeatedUniversities;
  }, [scrollIndex, universities]);

  const Row: React.FC<{ index: number; style: React.CSSProperties }> = ({
    index,
    style,
  }) => {
    const startIndex = index * 4;
    return (
      <div
        style={style}
        className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 scrollbar-hide p-6"
      >
        {Array.from({ length: 4 }).map((_, offset) => {
          const universityIndex =
            (startIndex + offset) % visibleUniversities.length;
          const university = visibleUniversities[universityIndex];
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
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/50 backdrop-blur-xl">
      <div
        className="overflow-y-auto scrollbar-hide h-full"
        onScroll={handleScroll}
      >
        {Array.from({ length: Math.ceil(universities.length / 4) }).map(
          (_, index) => (
            <div key={index} className="relative h-[620px]">
              <Row index={index} style={{}} />
            </div>
          ),
        )}
      </div>

      <button
        onClick={onClose}
        className="fixed z-50 bottom-6 right-6 bg-white text-black hover:bg-black hover:text-white rounded-full p-5 transition-colors duration-300 ease-in-out"
      >
        <FaTimes size={24} />
      </button>
    </div>
  );
};

UniversitiesEndlessScroll.displayName = "EndlessScroll"; // Fix for missing display name

export default UniversitiesEndlessScroll;
