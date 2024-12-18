"use client";

import { BsCash, BsClock } from "react-icons/bs";

const scholarships = [
  {
    name: "Merit Scholarship",
    amount: "$25,000",
    deadline: "Apr 1, 2024",
    status: "Eligible",
  },
  {
    name: "STEM Excellence",
    amount: "$15,000",
    deadline: "Mar 25, 2024",
    status: "In Progress",
  },
];

const Scholarships: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Scholarships</h2>
        <BsCash className="w-5 h-5 text-purple-400" />
      </div>

      <div className="space-y-3">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">{scholarship.name}</div>
              <div className="text-green-400">{scholarship.amount}</div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-white/60">
                <BsClock className="w-3 h-3" />
                {scholarship.deadline}
              </div>
              <div className="text-purple-400">{scholarship.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
