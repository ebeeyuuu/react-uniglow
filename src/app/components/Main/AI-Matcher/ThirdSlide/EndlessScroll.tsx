import { universityEnvironmentData } from "@/data";
import UniversityCard from "./UniversityCard";
import { FaTimes } from "react-icons/fa";

interface EndlessScrollProps {
  selectedCategory: string;
  onClose: () => void;
}

const EndlessScroll = ({ selectedCategory, onClose }: EndlessScrollProps) => {
  const universities = universityEnvironmentData[selectedCategory] || [];

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/20 backdrop-blur-sm">
      <div className="overflow-y-auto scrollbar-hide flex flex-col gap-8 p-4 h-full">
        {universities.length ? (
          universities.map((university, index) => (
            <UniversityCard key={index} university={university} />
          ))
        ) : (
          <p>No universities available</p>
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

export default EndlessScroll;