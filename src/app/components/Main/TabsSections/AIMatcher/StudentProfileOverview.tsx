"use client";

import { useState } from "react";
import { BsPencil, BsGraphUp, BsAward, BsBook, BsClock, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const studentData: StudentData = {
  name: "Alex Thompson",
  grade: 11,
  gpa: 3.92,
  academicMetrics: [
    {
      subject: "Mathematics",
      grade: "A",
      level: "AP Calculus BC",
      strength: 95,
      history: [
        { term: "Q1", grade: 92 },
        { term: "Q2", grade: 94 },
        { term: "Q3", grade: 95 },
        { term: "Q4", grade: 96 }
      ]
    },
    {
      subject: "Physics",
      grade: "A-",
      level: "AP Physics C",
      strength: 88,
      history: [
        { term: "Q1", grade: 87 },
        { term: "Q2", grade: 89 },
        { term: "Q3", grade: 88 },
        { term: "Q4", grade: 90 }
      ]
    },
    {
      subject: "Computer Science",
      grade: "A",
      level: "AP CS A",
      strength: 92,
      history: [
        { term: "Q1", grade: 90 },
        { term: "Q2", grade: 92 },
        { term: "Q3", grade: 94 },
        { term: "Q4", grade: 92 }
      ]
    }
  ],
  activities: [
    {
      name: "Robotics Team",
      role: "Captain",
      duration: "3 years",
      hours: 8,
      impact: "Led team to state finals, mentored 10 junior members"
    },
    {
      name: "Math Club",
      role: "President",
      duration: "2 years",
      hours: 4,
      impact: "Organized weekly competitions, increased membership by 50%"
    },
    {
      name: "Science Olympiad",
      role: "Team Lead",
      duration: "2 years",
      hours: 6,
      impact: "Won gold in Physics and Chemistry events"
    }
  ],
  interests: [
    {
      field: "Artificial Intelligence",
      projects: ["Neural Network Project", "Machine Learning Research"],
      relatedCourses: ["AP Computer Science", "Data Science"]
    },
    {
      field: "Quantum Computing",
      projects: ["Quantum Algorithm Simulation"],
      relatedCourses: ["Advanced Physics", "Linear Algebra"]
    }
  ],
  achievements: [
    {
      title: "National Merit Semifinalist",
      type: "Academic",
      description: "Top 1% of PSAT scores nationally",
      date: "2024"
    },
    {
      title: "State Science Fair Winner",
      type: "Research",
      description: "First place in Computer Science category",
      date: "2023"
    }
  ]
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-white/10 p-2 rounded-lg">
        <p className="text-xs text-white/90">{`Term: ${label}`}</p>
        <p className="text-xs text-purple-400">{`Grade: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const CarouselButton = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-5' : '-right-5'}`}
  >
    {direction === 'left' ? <BsChevronLeft className="text-white/60" /> : <BsChevronRight className="text-white/60" />}
  </button>
);

const StudentProfileOverview: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [selectedSubject, setSelectedSubject] = useState(studentData.academicMetrics[0]);
  const [activityIndex, setActivityIndex] = useState(0);
  const [interestIndex, setInterestIndex] = useState(0);
  const [achievementIndex, setAchievementIndex] = useState(0);

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-sm md:text-base lg:text-lg font-semibold">
            Student Profile
          </h2>
          <p className="text-xs text-white/60">Grade {studentData.grade} • GPA {studentData.gpa}</p>
        </div>
        <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition">
          <BsPencil className="text-white/60" />
        </button>
      </div>

      <div className="bg-white/5 p-4 rounded-xl space-y-2">
        <h3 className="text-sm font-medium text-white/80 flex items-center gap-2">
          <BsGraphUp className="text-purple-400" /> Academic Performance
        </h3>

        <div className="flex flex-row flex-wrap gap-2">
          {studentData.academicMetrics.map((metric) => (
            <button
              key={metric.subject}
              onClick={() => setSelectedSubject(metric)}
              className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${
                selectedSubject.subject === metric.subject
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {metric.subject}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
            <div>
              <div className="text-sm text-white/90">{selectedSubject.level}</div>
              <div className="text-xs text-white/60">Current Grade: {selectedSubject.grade}</div>
            </div>
            <div className="text-xs px-2 py-1 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/50">
              {selectedSubject.strength}% Strength
            </div>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={selectedSubject.history}>
                <defs>
                  <linearGradient id="gradeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="term" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <YAxis domain={[80, 100]} stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="grade"
                  stroke="rgb(147, 51, 234)"
                  fill="url(#gradeGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative">
          <div className="transition-all duration-300 ease-in-out">
            <div className="bg-white/[0.03] p-4 rounded-lg border border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-white/90">{studentData.activities[activityIndex].name}</div>
                  <div className="text-xs text-purple-400">{studentData.activities[activityIndex].role}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/50">
                    {studentData.activities[activityIndex].duration}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/50">
                    {studentData.activities[activityIndex].hours}h/week
                  </span>
                </div>
              </div>
              <div className="mt-3 text-sm text-white/70">{studentData.activities[activityIndex].impact}</div>
            </div>
          </div>
          <CarouselButton
            direction="left"
            onClick={() => setActivityIndex((prev) => (prev === 0 ? studentData.activities.length - 1 : prev - 1))}
          />
          <CarouselButton
            direction="right"
            onClick={() => setActivityIndex((prev) => (prev === studentData.activities.length - 1 ? 0 : prev + 1))}
          />
        </div>
      </div>

      <div className="relative">
        <div className="relative">
          <div className="bg-white/[0.03] p-4 rounded-lg border border-white/10">
            <div className="text-sm text-white/90 mb-3">{studentData.interests[interestIndex].field}</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-purple-400 mb-2">Projects</div>
                {studentData.interests[interestIndex].projects.map((project, idx) => (
                  <div key={idx} className="text-xs text-white/80 mb-1">• {project}</div>
                ))}
              </div>
              <div>
                <div className="text-xs text-blue-400 mb-2">Related Courses</div>
                {studentData.interests[interestIndex].relatedCourses.map((course, idx) => (
                  <div key={idx} className="text-xs text-white/80 mb-1">• {course}</div>
                ))}
              </div>
            </div>
          </div>
          <CarouselButton
            direction="left"
            onClick={() => setInterestIndex((prev) => (prev === 0 ? studentData.interests.length - 1 : prev - 1))}
          />
          <CarouselButton
            direction="right"
            onClick={() => setInterestIndex((prev) => (prev === studentData.interests.length - 1 ? 0 : prev + 1))}
          />
        </div>
      </div>

      <div className="relative">
        <div className="relative">
          <div className="bg-white/[0.03] p-4 rounded-lg border border-white/10">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-white/90">{studentData.achievements[achievementIndex].title}</span>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/50">
                  {studentData.achievements[achievementIndex].type}
                </span>
                <span className="text-xs px-2 py-1 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/50">
                  {studentData.achievements[achievementIndex].date}
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70">{studentData.achievements[achievementIndex].description}</p>
          </div>
          <CarouselButton
            direction="left"
            onClick={() => setAchievementIndex((prev) => (prev === 0 ? studentData.achievements.length - 1 : prev - 1))}
          />
          <CarouselButton
            direction="right"
            onClick={() => setAchievementIndex((prev) => (prev === studentData.achievements.length - 1 ? 0 : prev + 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentProfileOverview;
