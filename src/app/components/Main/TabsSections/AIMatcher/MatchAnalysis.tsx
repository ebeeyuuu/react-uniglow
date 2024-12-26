"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface UniversityMatch {
  name: string;
  academics: number;
  culture: number;
  location: number;
  totalMatch: number;
  exceeds: string[];
  meets: string[];
  fallsBelow: string[];
}

const universities: UniversityMatch[] = [
  {
    name: "University of Oxford",
    academics: 95,
    culture: 85,
    location: 80,
    totalMatch: 87,
    exceeds: ["GPA", "Extracurriculars"],
    meets: ["SAT Scores"],
    fallsBelow: ["Community Service"],
  },
  {
    name: "MIT",
    academics: 98,
    culture: 75,
    location: 70,
    totalMatch: 81,
    exceeds: ["Math Skills", "Programming Experience"],
    meets: ["Science Projects"],
    fallsBelow: ["Leadership Experience"],
  },
  {
    name: "Stanford University",
    academics: 90,
    culture: 88,
    location: 85,
    totalMatch: 86,
    exceeds: ["Entrepreneurial Spirit"],
    meets: ["Public Speaking"],
    fallsBelow: ["Volunteer Work"],
  },
];

const MatchAnalysis: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>(
    [],
  );
  const [importance, setImportance] = useState({
    academics: 1,
    culture: 1,
    location: 1,
  });

  const toggleSelection = (name: string) => {
    setSelectedUniversities((prev) => {
      if (prev.includes(name)) {
        return prev.filter((uni) => uni !== name);
      }
      if (prev.length < 3) {
        return [...prev, name];
      }
      return prev;
    });
  };

  const calculateAdjustedMatch = (uni: UniversityMatch) => {
    const totalWeight = Object.values(importance).reduce(
      (sum, weight) => sum + weight,
      0,
    );
    const weightedMatch =
      (uni.academics * importance.academics +
        uni.culture * importance.culture +
        uni.location * importance.location) /
      totalWeight;
    return Math.round(weightedMatch);
  };

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Side-by-Side University Match Analysis
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {universities.map((uni) => (
          <div
            key={uni.name}
            className={`p-4 border rounded-xl transition-all cursor-pointer ${selectedUniversities.includes(uni.name)
                ? "bg-purple-500/20 border-purple-500"
                : "bg-white/[0.05] border-white/10"
              }`}
            onClick={() => toggleSelection(uni.name)}
          >
            <h3 className="text-base font-medium text-white/90">{uni.name}</h3>
            <p className="text-sm text-white/60">
              Total Match: {calculateAdjustedMatch(uni)}%
            </p>
            <motion.div
              className="mt-2 w-full bg-white/10 rounded-full h-2 overflow-hidden"
              animate={{ width: `${uni.totalMatch}%` }}
            >
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                style={{ width: `${calculateAdjustedMatch(uni)}%` }}
              />
            </motion.div>
          </div>
        ))}
      </div>

      {selectedUniversities.length > 0 && (
        <div className="p-4 bg-white/[0.05] border border-white/10 rounded-xl">
          <h3 className="text-base font-medium mb-4 text-white/90">
            Selected Universities
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {selectedUniversities.map((name) => {
              const uni = universities.find((u) => u.name === name)!;
              return (
                <div key={uni.name} className="space-y-4">
                  <h4 className="text-sm font-semibold text-white/80">
                    {uni.name}
                  </h4>
                  <p className="text-sm text-white/70">
                    Academics: {uni.academics}%
                  </p>
                  <p className="text-sm text-white/70">
                    Culture: {uni.culture}%
                  </p>
                  <p className="text-sm text-white/70">
                    Location: {uni.location}%
                  </p>
                  <p className="text-sm text-white/70">
                    Exceeds: {uni.exceeds.join(", ")}
                  </p>
                  <p className="text-sm text-white/70">
                    Meets: {uni.meets.join(", ")}
                  </p>
                  <p className="text-sm text-white/70">
                    Falls Below: {uni.fallsBelow.join(", ")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="p-4 bg-white/[0.05] border border-white/10 rounded-xl">
        <h3 className="text-base font-medium mb-4 text-white/90">
          Adjust Match Criteria
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(importance).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <label
                className="text-sm font-medium text-white/80 capitalize"
                htmlFor={key}
              >
                {key}
              </label>
              <input
                id={key}
                type="range"
                min="1"
                max="5"
                value={value}
                onChange={(e) =>
                  setImportance({
                    ...importance,
                    [key]: parseInt(e.target.value, 10),
                  })
                }
                className="w-full"
              />
              <p className="text-sm text-white/70">Weight: {value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchAnalysis;
