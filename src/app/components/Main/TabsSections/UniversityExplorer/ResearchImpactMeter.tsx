"use client";

import { useState, useEffect } from "react";

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
  const [currentStrength, setCurrentStrength] = useState(0);
  const [currentDiscovery, setCurrentDiscovery] = useState(0);

  useEffect(() => {
    const strengthTimer = setInterval(() => {
      setCurrentStrength((prev) =>
        prev === researchData.strengths.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    const discoveryTimer = setInterval(() => {
      setCurrentDiscovery((prev) =>
        prev === researchData.recentDiscoveries.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => {
      clearInterval(strengthTimer);
      clearInterval(discoveryTimer);
    };
  }, []);

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
            <div className="text-sm font-medium">
              {researchData.citations.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-xs text-white/60">Annual Funding</div>
            <div className="text-sm font-medium">
              ${(researchData.fundingAmount / 1000000).toFixed(0)}M
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium">Research Strengths</div>
          <div className="bg-white/5 rounded-lg p-3 h-16">
            <div className="relative h-full">
              {researchData.strengths.map((strength, index) => (
                <div
                  key={strength.field}
                  className={`absolute w-full transition-all duration-500 ${
                    index === currentStrength
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex flex-col mb-1">
                    <span className="text-xs">{strength.field}</span>
                    <span className="text-xs text-white/60">
                      #{strength.rank} Globally
                    </span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000"
                      style={{ width: `${strength.impact}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium">Recent Breakthroughs</div>
          <div className="bg-white/5 rounded-lg p-3 h-24">
            <div className="relative h-full">
              {researchData.recentDiscoveries.map((discovery, index) => (
                <div
                  key={discovery.title}
                  className={`absolute w-full transition-all duration-500 ${
                    index === currentDiscovery
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-xs mb-1">{discovery.title}</div>
                  <div className="flex flex-col">
                    <span className="text-xs text-purple-400">
                      {discovery.field}
                    </span>
                    <span className="text-xs text-white/60">
                      {discovery.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchImpactMeter;
