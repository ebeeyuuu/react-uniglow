"use client";

import { useState } from "react";
import { BsSearch, BsPlus, BsX } from "react-icons/bs";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend
} from "recharts";

interface MatchFactor {
  name: string;
  weight: number;
  description: string;
}

interface University {
  id: string;
  name: string;
  location: string;
  overallMatch: number;
  factors: {
    [key: string]: number;
  };
  studentProfile: {
    avgGPA: number;
    avgSAT: number;
    acceptanceRate: string;
  };
}

const matchFactors: MatchFactor[] = [
  { name: "Academic", weight: 35, description: "Match with academic requirements and programs" },
  { name: "Cultural", weight: 20, description: "Campus culture and student life alignment" },
  { name: "Location", weight: 15, description: "Geographic and environmental preferences" },
  { name: "Financial", weight: 15, description: "Cost and financial aid compatibility" },
  { name: "Career", weight: 15, description: "Career outcomes and opportunities" },
];

const universities: University[] = [
  {
    id: "1",
    name: "Stanford University",
    location: "Stanford, CA",
    overallMatch: 92,
    factors: {
      Academic: 95,
      Cultural: 88,
      Location: 90,
      Financial: 85,
      Career: 98
    },
    studentProfile: {
      avgGPA: 3.96,
      avgSAT: 1440,
      acceptanceRate: "4%"
    }
  },
  {
    id: "2",
    name: "MIT",
    location: "Cambridge, MA",
    overallMatch: 89,
    factors: {
      Academic: 92,
      Cultural: 85,
      Location: 82,
      Financial: 88,
      Career: 96
    },
    studentProfile: {
      avgGPA: 4.0,
      avgSAT: 1500,
      acceptanceRate: "7%"
    }
  },
  {
    id: "3",
    name: "UC Berkeley",
    location: "Berkeley, CA",
    overallMatch: 87,
    factors: {
      Academic: 88,
      Cultural: 92,
      Location: 85,
      Financial: 90,
      Career: 89
    },
    studentProfile: {
      avgGPA: 3.89,
      avgSAT: 1415,
      acceptanceRate: "14%"
    }
  }
];

const MatchAnalysis: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [selectedUniversities, setSelectedUniversities] = useState<University[]>([universities[0]]);
  const [searchTerm, setSearchTerm] = useState("");

  const addUniversity = (university: University) => {
    if (selectedUniversities.length < 3 && !selectedUniversities.find(u => u.id === university.id)) {
      setSelectedUniversities([...selectedUniversities, university]);
    }
  };

  const removeUniversity = (universityId: string) => {
    setSelectedUniversities(selectedUniversities.filter(u => u.id !== universityId));
  };

  const getChartData = () => {
    return matchFactors.map(factor => ({
      factor: factor.name,
      ...selectedUniversities.reduce((acc, uni) => ({
        ...acc,
        [uni.name]: uni.factors[factor.name]
      }), {})
    }));
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-blue-400";
    return "text-purple-400";
  };

  return (
    <div
      {...divProps}
      className="space-y-6 w-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Match Analysis
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search universities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-10 text-sm focus:outline-none focus:border-purple-500"
          />
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-white/80">Selected Universities</h3>
            <span className="text-xs text-white/60">
              {selectedUniversities.length}/3 Selected
            </span>
          </div>

          <div className="space-y-3">
            {selectedUniversities.map((uni) => (
              <div
                key={uni.id}
                className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm text-white/90">{uni.name}</h4>
                    <p className="text-xs text-white/60">{uni.location}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className={`text-lg font-medium ${getMatchColor(uni.overallMatch)}`}>
                      {uni.overallMatch}%
                    </span>
                    <button
                      onClick={() => removeUniversity(uni.id)}
                      className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <BsX className="text-white/60" />
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-white/5 p-2 rounded-lg">
                    <div className="text-white/60">Avg GPA</div>
                    <div className="text-white/90">{uni.studentProfile.avgGPA}</div>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <div className="text-white/60">Avg SAT</div>
                    <div className="text-white/90">{uni.studentProfile.avgSAT}</div>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <div className="text-white/60">Accept Rate</div>
                    <div className="text-white/90">{uni.studentProfile.acceptanceRate}</div>
                  </div>
                </div>
              </div>
            ))}

            {selectedUniversities.length < 3 && (
              <button
                className="w-full p-4 rounded-xl border border-dashed border-white/20 hover:border-purple-500/50 
                          text-white/40 hover:text-purple-400 transition-colors flex items-center justify-center gap-2"
                onClick={() => {
                  const unselectedUni = universities.find(u => !selectedUniversities.find(su => su.id === u.id));
                  if (unselectedUni) addUniversity(unselectedUni);
                }}
              >
                <BsPlus className="text-lg" />
                Add University
              </button>
            )}
          </div>
        </div>

        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <h3 className="text-sm font-medium text-white/80 mb-4">Match Comparison</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={getChartData()}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis
                  dataKey="factor"
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
                />
                <PolarRadiusAxis stroke="rgba(255,255,255,0.1)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
                {selectedUniversities.map((uni, index) => (
                  <Radar
                    key={uni.id}
                    name={uni.name}
                    dataKey={uni.name}
                    stroke={index === 0 ? "#818cf8" : index === 1 ? "#34d399" : "#f472b6"}
                    fill={index === 0 ? "#818cf8" : index === 1 ? "#34d399" : "#f472b6"}
                    fillOpacity={0.1}
                  />
                ))}
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchAnalysis;
