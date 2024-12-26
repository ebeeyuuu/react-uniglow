"use client";

import { useState } from "react";
import { BsCalculator, BsCurrencyDollar } from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface FinancialData {
  university: string;
  tuition: number;
  housing: number;
  totalCost: number;
  scholarships: {
    name: string;
    amount: number;
    deadline: string;
  }[];
}

const universities: FinancialData[] = [
  {
    university: "Stanford University",
    tuition: 56250,
    housing: 17255,
    totalCost: 74750,
    scholarships: [
      {
        name: "Need-Based Scholarship",
        amount: 45000,
        deadline: "March 1, 2025"
      },
      {
        name: "Merit Scholarship",
        amount: 25000,
        deadline: "January 15, 2025"
      }
    ]
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-white/10 p-3 rounded-lg">
        <p className="text-sm text-white/90">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} className="text-xs text-white/70">
            {item.name}: ${item.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const FinancialAidCalculator: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [selectedUniversity, setSelectedUniversity] = useState<FinancialData>(universities[0]);
  const [income, setIncome] = useState<string>("");

  const getCostData = () => {
    return [
      {
        name: selectedUniversity.university,
        Tuition: selectedUniversity.tuition,
        Housing: selectedUniversity.housing
      }
    ];
  };

  const calculateEligibility = () => {
    const parsedIncome = parseInt(income) || 0;
    if (parsedIncome < 65000) return "High";
    if (parsedIncome < 125000) return "Medium";
    return "Low";
  };

  return (
    <div
      {...divProps}
      className="space-y-4 w-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-sm md:text-base lg:text-lg font-semibold">
            Financial Aid Calculator
          </h2>
          <p className="text-xs text-white/60">Estimate your college costs</p>
        </div>
        <BsCalculator className="text-purple-400 text-lg" />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-white/80">Annual Household Income</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
          placeholder="Enter amount"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white/5 p-4 rounded-xl">
          <h3 className="text-sm font-medium text-white/80 mb-3">Cost Breakdown</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getCostData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Tuition" fill="#818cf8" />
                <Bar dataKey="Housing" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <h3 className="text-sm font-medium text-white/80 mb-3 flex items-center gap-2">
            <BsCurrencyDollar className="text-purple-400" /> Aid & Scholarships
          </h3>
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <div className="text-sm text-white/90 mb-2">Aid Eligibility</div>
              <span className={`text-xs px-2 py-1 rounded-lg ${
                calculateEligibility() === "High"
                  ? "bg-green-500/20 text-green-400 border border-green-500/50"
                  : calculateEligibility() === "Medium"
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                  : "bg-red-500/20 text-red-400 border border-red-500/50"
              }`}>
                {calculateEligibility()} Eligibility
              </span>
            </div>
            {selectedUniversity.scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white/5 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="text-sm text-white/90">{scholarship.name}</div>
                  <span className="text-xs px-2 py-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/50">
                    ${scholarship.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAidCalculator;
