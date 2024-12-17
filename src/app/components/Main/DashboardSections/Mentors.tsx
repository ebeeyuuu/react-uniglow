"use client";

import { BsPeople, BsClock } from "react-icons/bs";

const upcomingMentors = [
  {
    name: "Dr. Sarah Chen",
    role: "Computer Science Professor",
    day: "Today",
    time: "3:00 PM",
  },
  {
    name: "Michael Rodriguez",
    role: "Industry Expert",
    day: "Tomorrow",
    time: "2:00 PM",
  },
];

const Mentors: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex flex-col justify-center items-center"
    >
      <div className="flex items-start justify-start w-full">
        <div className="flex items-center gap-2">
          <h2 className="text-sm md:text-base lg:text-lg font-semibold">
            Mentors
          </h2>
          <BsPeople className="w-5 h-5 text-purple-400" />
        </div>
      </div>

      <div className="space-y-3 w-full">
        {upcomingMentors.map((mentor, index) => (
          <div
            key={index}
            className="flex items-center w-full gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="flex-1 min-w-0">
              <div className="font-medium mb-1 text-xs md:text-sm lg:text-base">
                {mentor.name}
              </div>
              <div className="text-xs lg:text-sm text-white/60">
                {mentor.role}
              </div>
            </div>
            <div className="text-xs flex flex-col truncate items-center gap-1 text-purple-400">
              <span>{mentor.day}</span>
              <span>{mentor.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
