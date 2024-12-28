"use client";

import { BsCheckCircle, BsBarChart, BsBook, BsTrophy } from "react-icons/bs";

const AdmissionFitScore: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const fitScores = [
    { 
      name: "Academic Profile", 
      score: 92, 
      status: "Strong", 
      icon: <BsBarChart />,
      details: {
        gpa: "3.8/4.0",
        coursework: "AP/IB Heavy"
      }
    },
    {
      name: "Extracurricular",
      score: 88,
      status: "Good",
      icon: <BsCheckCircle />,
      details: {
        leadership: 3,
        activities: "4+ years"
      }
    },
    {
      name: "Test Scores",
      score: 95,
      status: "Very Strong",
      icon: <BsBook />,
      details: {
        sat: "1480",
        act: "33"
      }
    },
    {
      name: "Achievements",
      score: 85,
      status: "Good",
      icon: <BsTrophy />,
      details: {
        awards: "Regional",
        competitions: "2 wins"
      }
    }
  ];

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex flex-col justify-between items-start">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Admission Fit
        </h2>
        <p className="text-xs text-white/60">Match with target university requirements</p>
      </div>

      <div className="space-y-2">
        {fitScores.map((score, i) => (
          <div key={i} className="bg-white/5 p-3 rounded-lg">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  {score.name}
                  <span className="text-white/60">{score.icon}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-lg bg-purple-500/20 text-purple-400">
                    {score.score}%
                  </span>
                  <span className="text-xs px-2 py-1 rounded-lg bg-blue-500/20 text-blue-400">
                    {score.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2 text-xs text-white/60">
                {Object.entries(score.details).map(([key, value], index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-white/40">{key}:</span>
                    <span className="text-white/80">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionFitScore;
