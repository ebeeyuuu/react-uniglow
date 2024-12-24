"use client";

import { useState } from "react";

interface AlumniStats {
  employmentRate: number;
  topEmployers: Array<{
    name: string;
    hireCount: number;
    avgSalary: number;
  }>;
  graduateStudies: {
    continuingEdu: number;
    topPrograms: string[];
  };
}

const alumniData: AlumniStats = {
  employmentRate: 96,
  topEmployers: [
    { name: "Google", hireCount: 45, avgSalary: 145000 },
    { name: "McKinsey", hireCount: 32, avgSalary: 165000 },
    { name: "Goldman Sachs", hireCount: 28, avgSalary: 155000 },
    { name: "Microsoft", hireCount: 25, avgSalary: 140000 },
  ],
  graduateStudies: {
    continuingEdu: 28,
    topPrograms: ["MBA", "Data Science", "Medicine"],
  },
};

const AlumniSnapshot: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [currentEmployerIndex, setCurrentEmployerIndex] = useState(0);
  const currentEmployer = alumniData.topEmployers[currentEmployerIndex];

  return (
    <div
      {...divProps}
      className="w-full h-full rounded-2xl p-4 border border-white/5 bg-white/[0.01] overflow-hidden"
    >
      <div className="flex flex-col items-start justify-start mb-2 gap-2">
        <h2 className="text-xs md:text-sm lg:text-base font-semibold">
          Alumni Success
        </h2>
      </div>
      <div className="space-y-4">
        <div className="gap-2 grid grid-cols-1">
          <div className="flex flex-wrap flex-row items-center justify-between">
            <div className="text-xs text-white/60">Employed Percentage:</div>
            <div className="text-sm font-medium text-green-400">
              {alumniData.employmentRate}%
            </div>
          </div>
          <div className="flex flex-wrap flex-row items-center justify-between">
            <div className="text-xs text-white/60">Further Education:</div>
            <div className="text-sm font-medium">
              {alumniData.graduateStudies.continuingEdu}%
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium">Top Employers</div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="flex justify-between mb-1">
              <span className="text-xs">{currentEmployer.name}</span>
              <span className="text-xs text-green-400">
                ${(currentEmployer.avgSalary / 1000).toFixed(0)}k
              </span>
            </div>
            <div className="text-xs text-white/60">
              {currentEmployer.hireCount} recent hires
            </div>
            <div className="flex justify-between mt-2">
              <button
                onClick={() =>
                  setCurrentEmployerIndex((prev) =>
                    prev === 0 ? alumniData.topEmployers.length - 1 : prev - 1,
                  )
                }
                className="text-xs text-white/60 hover:text-white"
              >
                ←
              </button>
              <div className="text-xs text-white/60">
                {currentEmployerIndex + 1} / {alumniData.topEmployers.length}
              </div>
              <button
                onClick={() =>
                  setCurrentEmployerIndex((prev) =>
                    prev === alumniData.topEmployers.length - 1 ? 0 : prev + 1,
                  )
                }
                className="text-xs text-white/60 hover:text-white"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSnapshot;
