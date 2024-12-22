"use client";

import { useState } from "react";
import { BsTrach, BsTrash } from "react-icons/bs";

interface University {
  name: string;
  tuition: number;
  location: string;
  acceptanceRate: number;
  programs: string[];
  studentPopulation: number;
}

const sampleUniversities: University[] = [
  {
    name: "Harvard University",
    tuition: 50000,
    location: "Cambridge, MA",
    acceptanceRate: 5,
    programs: ["Computer Science", "Biology", "Mathematics"],
    studentPopulation: 21000,
  },
  {
    name: "Stanford University",
    tuition: 55000,
    location: "Stanford, CA",
    acceptanceRate: 6,
    programs: ["Tech", "Medicine", "Law"],
    studentPopulation: 15000,
  },
  {
    name: "MIT",
    tuition: 52000,
    location: "Cambridge, MA",
    acceptanceRate: 7,
    programs: ["Innovation", "Technology", "Science"],
    studentPopulation: 11000,
  },
]


const UniversityComparison: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [selectedUniversities, setSelectedUniversities] = useState<University[]>([]);

  const toggleSelection = (university: University) => {
    setSelectedUniversities((prev) => {
      if (prev.some((u) => u.name === university.name)) {
        return prev.filter((u) => u.name !== university.name);
      }
      return [...prev, university];
    });
  };

  const getHighlightClass = (value: number, comparison: number, isHigherBetter: boolean) => {
    if (value === comparison) return "text-white/60";
    return value > comparison === isHigherBetter
      ? "text-green-400"
      : "text-red-400";
  }

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col"
    >
      <div className="flex w-full justify-start items-start">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          AI Matcher
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">Select Universities to Compare</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleUniversities.map((uni) => (
              <div
                key={uni.name}
                onClick={() => toggleSelection(uni)}
                className={`p-4 rounded-lg border border-white/10 bg-white/5 cursor-pointer transition hover:bg-white/10 flex justify-between items-center ${
                  selectedUniversities.some((u) => u.name === uni.name)
                    ? "ring-2 ring-purple-500"
                    : ""
                }`}
              >
                <span>{uni.name}</span>
                {selectedUniversities.some((u) => u.name === uni.name) && (
                  <BsTrash className="text-white/60" />
                )}
              </div>
            ))}
          </div>
        </div>

        {selectedUniversities.length > 1 && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border-spacing-2">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-white/10">University</th>
                  <th className="px-4 py-2 border-b border-white/10">Tuition</th>
                  <th className="px-4 py-2 border-b border-white/10">Acceptance Rate</th>
                  <th className="px-4 py-2 border-b border-white/10">Student Population</th>
                </tr>
              </thead>
              <tbody>
                {selectedUniversities.map((uni, idx) => (
                  <tr key={uni.name} className="group hover:bg-white/10">
                    <td className="px-4 py-2 border-b border-white/10 text-white/80">
                      {uni.name}
                    </td>
                    <td
                      className={`px-4 py-2 border-b border-white/10 ${getHighlightClass(
                        uni.tuition,
                        Math.min(...selectedUniversities.map((u) => u.tuition)),
                        false
                      )}`}
                    >
                      ${uni.tuition.toLocaleString()}
                    </td>
                    <td
                      className={`px-4 py-2 border-b border-white/10 ${getHighlightClass(
                        uni.acceptanceRate,
                        Math.max(...selectedUniversities.map((u) => u.acceptanceRate)),
                        false
                      )}`}
                    >
                      {uni.acceptanceRate}%
                    </td>
                    <td
                      className={`px-4 py-2 border-b border-white/10 ${getHighlightClass(
                        uni.studentPopulation,
                        Math.max(
                          ...selectedUniversities.map((u) => u.studentPopulation)
                        ),
                        true
                      )}`}
                    >
                      {uni.studentPopulation.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityComparison;
