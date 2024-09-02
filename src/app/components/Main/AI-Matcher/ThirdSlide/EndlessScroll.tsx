import { universityEnvironmentData } from "@/data";
import UniversityCard from "./UniversityCard";

interface EndlessScrollProps {
  selectedCategory: string;
}

const EndlessScroll = ({ selectedCategory }: EndlessScrollProps) => {
  const universities = universityEnvironmentData[selectedCategory] || [];

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 overflow-y-auto bg-black/20 backdrop-blur-sm scrollbar-hide">
      <div className="flex flex-col gap-4 p-4">
        {universities.length ? (
          universities.map((university, index) => (
            <UniversityCard key={index} university={university} />
          ))
        ) : (
          <p>No universities available</p>
        )}
      </div>
    </div>
  );
};

export default EndlessScroll;
