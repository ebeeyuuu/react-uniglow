import React from "react";

type Club = {
  type: string;
  description: string;
};

interface TypeClubsProps {
  clubTypes: Club[];
}

const TypeClubs: React.FC<TypeClubsProps> = ({ clubTypes }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 h-full w-full">
      {clubTypes.map((club, index) => (
        <div
          key={index}
          className={`bg-black border-gray-600 border shadow-md shadow-gray-600 rounded-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 flex flex-col hover:border-black p-8 ${
            index !== clubTypes.length - 1 &&
            (index % 7 === 0 || index % 7 === 4)
              ? "row-span-2"
              : ""
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
