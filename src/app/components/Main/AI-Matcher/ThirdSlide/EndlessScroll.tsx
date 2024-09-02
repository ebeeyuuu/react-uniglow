import { universityEnvironmentData } from "@/data";
import UniversityCard from "./UniversityCard";

interface EndlessScrollProps {
  selectedCategory: string;
}

const EndlessScroll = ({ selectedCategory }: EndlessScrollProps) => {
  const universities = universityEnvironmentData[selectedCategory] || [];

  return (
    <div className="flex h-[100vh]">
      <div className="flex flex-col gap-4">
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
