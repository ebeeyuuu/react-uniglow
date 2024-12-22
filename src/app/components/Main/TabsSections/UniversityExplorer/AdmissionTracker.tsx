"use client";

import { useState } from "react";
import { BsCheck, BsPlus } from "react-icons/bs";

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
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleItem = (uni: string, item: string) => {
    const key = `${uni}-${item}`;
    setCheckedItems((prev) =>
      prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key],
    );
  };

  return (
    <div
      {...divProps}
      className="w-full h-full rounded-2xl p-4 sm:p-6 border border-white/5 bg-white/[0.01] overflow-auto"
    >
      <h2 className="text-sm md:text-base font-semibold mb-4">
        Requirements Tracker
      </h2>

      <div className="grid gap-4">
        {universities.map((uni) => (
          <div key={uni.name} className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-sm">{uni.name}</h3>
              <span className="text-xs text-white/60">Due: {uni.deadline}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                {uni.requirements.map(({ item, required }) => (
                  <div
                    key={item}
                    className="flex items-center justify-between bg-white/5 p-2 rounded-lg"
                  >
                    <span className="text-xs">
                      {item}
                      {!required && " (Optional)"}
                    </span>
                    <button
                      onClick={() => toggleItem(uni.name, item)}
                      className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    >
                      {checkedItems.includes(`${uni.name}-${item}`) ? (
                        <BsCheck className="text-green-400" />
                      ) : (
                        <BsPlus className="text-white/60" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 p-3 rounded-lg space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/60">GPA</span>
                  <span>{uni.scores.gpa}</span>
                </div>
                {uni.scores.testOptional ? (
                  <div className="text-xs text-green-400">Test Optional</div>
                ) : (
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">SAT</span>
                    <span>
                      {uni.scores.sat?.min}-{uni.scores.sat?.max}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionTracker;
