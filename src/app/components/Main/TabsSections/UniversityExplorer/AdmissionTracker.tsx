"use client";

import { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsCheck, BsPlus } from "react-icons/bs";
import { Progress } from "@/app/components/UI/Progress";

interface University {
  name: string;
  deadline: string;
  requirements: {
    item: string;
    required: boolean;
  }[];
  scores: {
    gpa: number;
    sat?: { min: number; max: number };
    testOptional: boolean;
  };
}

const universities: University[] = [
  {
    name: "Stanford University",
    deadline: "Jan 5, 2025",
    requirements: [
      { item: "Common App", required: true },
      { item: "3 Essays", required: true },
      { item: "2 Recommendations", required: true },
      { item: "Portfolio", required: false },
    ],
    scores: {
      gpa: 3.96,
      sat: { min: 1440, max: 1550 },
      testOptional: true,
    },
  },
  {
    name: "MIT",
    deadline: "Jan 5, 2025",
    requirements: [
      { item: "MIT Application", required: true },
      { item: "5 Short Essays", required: true },
      { item: "2 Recommendations", required: true },
      { item: "Maker Portfolio", required: false },
    ],
    scores: {
      gpa: 4.0,
      sat: { min: 1500, max: 1570 },
      testOptional: false,
    },
  },
];

const AdmissionTracker: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [expandedBox, setExpandedBox] = useState<string | null>("Tests");

  const toggleItem = (uni: string, item: string) => {
    const key = `${uni}-${item}`;
    setCheckedItems((prev) =>
      prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]
    );
  };

  const calculateProgress = (university: University) => {
    const total = university.requirements.length;
    const completed = university.requirements.filter((req) =>
      checkedItems.includes(`${university.name}-${req.item}`)
    ).length;
    return (completed / total) * 100;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % universities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? universities.length - 1 : prevIndex - 1
    );
  };

  const currentUniversity = universities[currentIndex];

  const handleExpand = (box: string) => {
    setExpandedBox((prev) => (prev === box ? null : box));
  };

  return (
    <div
      {...divProps}
      className="w-full h-full rounded-2xl p-4 sm:p-6 border border-white/5 bg-white/[0.01] overflow-hidden"
    >
      <h2 className="mb-4 text-sm md:text-base lg:text-lg font-semibold">
        Admissions Tracker
      </h2>

      <div className="w-full h-full">
        <div className="w-80 bg-white/5 rounded-xl p-4 space-y-2">
          <div className="justify-between w-full flex flex-row items-center">
            <h3 className="font-medium text-sm mb-1">{currentUniversity.name}</h3>
            <span className="text-xs text-white/60">
              Due: {currentUniversity.deadline}
            </span>
          </div>

          <div
            className={`bg-white/10 p-3 rounded-xl space-y-2 transition-all duration-300 cursor-pointer hover:outline hover:outline-purple-500 hover:outline-1 ${
              expandedBox === "Tests" ? "max-h-60" : "max-h-10"
            }`}
            onClick={() => handleExpand("Tests")}
          >
            <div className="flex justify-between text-xs">
              <span className="text-white/60">GPA</span>
              <span>{currentUniversity.scores.gpa}</span>
            </div>
            {expandedBox === "Tests" && (
              <div className="space-y-2 mt-2">
                {currentUniversity.scores.testOptional ? (
                  <div className="text-xs bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
                    Test Optional
                  </div>
                ) : (
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">SAT</span>
                    <span>
                      {currentUniversity.scores.sat?.min}-
                      {currentUniversity.scores.sat?.max}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {currentUniversity.requirements.map(({ item, required }) => (
            <div
              key={item}
              className={`flex items-center justify-between bg-white/5 px-4 py-2 rounded-xl cursor-pointer hover:outline hover:outline-purple-500 hover:outline-1 transition-all duration-300 ${
                expandedBox === item ? "max-h-40" : "max-h-12"
              }`}
              onClick={() => handleExpand(item)}
            >
              <span className="text-xs">
                {item}
                {!required && " (Optional)"}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(currentUniversity.name, item);
                }}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                {checkedItems.includes(`${currentUniversity.name}-${item}`) ? (
                  <BsCheck className="text-green-400" />
                ) : (
                  <BsPlus className="text-white/60" />
                )}
              </button>
              {expandedBox === item && (
                <div className="text-xs mt-2">
                  Additional information about {item}...
                </div>
              )}
            </div>
          ))}

          <div className="mt-4">
            <Progress
              value={calculateProgress(currentUniversity)}
              className="h-3 bg-zinc-700"
              progressColor="bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-row gap-2 mt-5">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition"
          >
            <BsChevronLeft className="text-white/60" size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition"
          >
            <BsChevronRight className="text-white/60" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionTracker;
