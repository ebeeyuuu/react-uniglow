"use client";

import React, { useState, useEffect } from "react";

interface ResearchStats {
  citations: number;
  papers: number;
  strengths: Array<{
    field: string;
    rank: number;
    impact: number;
  }>;
  recentDiscoveries: Array<{
    title: string;
    field: string;
    date: string;
    impact: string;
  }>;
  fundingAmount: number;
  researchCenters: Array<{
    name: string;
    focus: string;
  }>;
}

const researchData: ResearchStats = {
  citations: 245000,
  papers: 12500,
  strengths: [
    { field: "AI & Machine Learning", rank: 3, impact: 94 },
    { field: "Quantum Computing", rank: 2, impact: 96 },
    { field: "Climate Science", rank: 5, impact: 92 },
    { field: "Biotechnology", rank: 4, impact: 93 },
  ],
  recentDiscoveries: [
    {
      title: "Novel Quantum Error Correction Method",
      field: "Quantum Computing",
      date: "2024",
      impact: "High",
    },
    {
      title: "Advanced Neural Network Architecture",
      field: "AI & Machine Learning",
      date: "2024",
      impact: "Medium",
    },
  ],
  fundingAmount: 1200000000,
  researchCenters: [
    { name: "Quantum Innovation Lab", focus: "Quantum Computing" },
    { name: "AI Research Institute", focus: "Machine Learning" },
    { name: "Climate Change Center", focus: "Environmental Science" },
  ],
};

const ResearchImpactMeter: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [currentStrengthIndex, setCurrentStrengthIndex] = useState(0);
  const [currentDiscoveryIndex, setCurrentDiscoveryIndex] = useState(0);

  useEffect(() => {
    const strengthInterval = setInterval(() => {
      setCurrentStrengthIndex((prevIndex) =>
        (prevIndex + 1) % researchData.strengths.length
      );
    }, 3000);

    const discoveryInterval = setInterval(() => {
      setCurrentDiscoveryIndex((prevIndex) =>
        (prevIndex + 1) % researchData.recentDiscoveries.length
      );
    }, 4000);

    return () => {
      clearInterval(strengthInterval);
      clearInterval(discoveryInterval);
    };
  });

  return (
    <div
      {...divProps}
      className="w-full h-full rounded-2xl p-4 border border-white/5 bg-white/[0.01] overflow-hidden"
    >
      <div className="flex flex-col items-start justify-start mb-2 gap-2">
        <h2 className="text-xs md:text-sm lg:text-base font-semibold">
          Research Impact
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex flex-row flex-wrap gap-3">
          <div>
            <div className="text-xs text-white/60">Citations</div>
            <div className="text-sm font-normal text-white/75">
              {researchData.citations.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-xs text-white/60">Annual Funding</div>
            <div className="text-sm font-normal text-white/75">
              ${(researchData.fundingAmount / 1000000).toFixed(0)}M
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-normal text-white/90">Research Strengths</div>
          <div className="relative flex-1 max-h-16 min-h-16">
            {researchData.strengths.map((strength, index) => (
              <div
                key={index}
                className={`bg-white/5 absolute inset-0 flex flex-col p-4 rounded-lg justify-center items-start transition-opacity duration-700 ${index === currentStrengthIndex ? "opacity-100" : "opacity-0"
                  }`}
              >
                <span className="text-xs font-medium mb-1 text-white/85">
                  {strength.field}
                </span>
                <span className="text-xs text-white/60 mb-1">
                  #{strength.rank} Globally
                </span>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    style={{ width: `${strength.impact}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-normal text-white/90">Recent Breakthroughs</div>
          <div className="relative flex-1 max-h-24 min-h-24">
            {researchData.recentDiscoveries.map((discovery, index) => (
              <div
                key={index}
                className={`bg-white/5 p-4 rounded-lg absolute inset-0 flex flex-col justify-center items-start transition-opacity duration-700 ${index === currentDiscoveryIndex
                  ? "opacity-100"
                  : "opacity-0"
                  }`}
              >
                <div className="text-xs font-medium mb-1 text-white/85">
                  {discovery.title}
                </div>
                <span className="text-xs text-purple-400">
                  {discovery.field}
                </span>
                <span className="text-xs text-white/60">
                  {discovery.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchImpactMeter;
