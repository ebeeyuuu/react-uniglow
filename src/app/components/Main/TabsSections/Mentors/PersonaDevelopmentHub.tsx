"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsStar, BsTrophy, BsCheck2Circle, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const personaData = {
  skills: [
    {
      name: "Leadership",
      level: 85,
      history: [
        { month: "Jan", level: 75 },
        { month: "Feb", level: 78 },
        { month: "Mar", level: 82 },
        { month: "Apr", level: 85 },
      ],
    },
    {
      name: "Public Speaking",
      level: 72,
      history: [
        { month: "Jan", level: 65 },
        { month: "Feb", level: 68 },
        { month: "Mar", level: 70 },
        { month: "Apr", level: 72 },
      ],
    },
    {
      name: "Critical Thinking",
      level: 90,
      history: [
        { month: "Jan", level: 85 },
        { month: "Feb", level: 87 },
        { month: "Mar", level: 88 },
        { month: "Apr", level: 90 },
      ],
    },
  ],
  personalityTraits: [
    {
      trait: "Openness",
      score: 85,
      description: "High curiosity and creativity",
      developmentAreas: [
        "Explore new perspectives",
        "Try unconventional approaches",
      ],
    },
    {
      trait: "Conscientiousness",
      score: 78,
      description: "Organized and goal-oriented",
      developmentAreas: ["Improve time management", "Develop better habits"],
    },
    {
      trait: "Extraversion",
      score: 65,
      description: "Balanced social energy",
      developmentAreas: ["Practice networking", "Engage in group activities"],
    },
    {
      trait: "Agreeableness",
      score: 82,
      description: "Empathetic and cooperative",
      developmentAreas: ["Set healthy boundaries", "Practice assertiveness"],
    },
    {
      trait: "Stability",
      score: 75,
      description: "Emotionally balanced",
      developmentAreas: ["Stress management", "Mindfulness practice"],
    },
  ],
  strengths: [
    {
      area: "Problem Solving",
      level: 90,
      description: "Strong analytical and creative problem-solving abilities",
      examples: [
        "Math competition wins",
        "Engineering projects",
        "Debate achievements",
      ],
      relatedTraits: ["Critical Thinking", "Creativity", "Persistence"],
    },
    {
      area: "Team Leadership",
      level: 85,
      description: "Effective at guiding and motivating teams",
      examples: ["Club president", "Project team lead", "Sports captain"],
      relatedTraits: ["Communication", "Empathy", "Decision Making"],
    },
    {
      area: "Creativity",
      level: 88,
      description: "Innovative thinking and artistic expression",
      examples: ["Art portfolio", "Creative writing", "Design projects"],
      relatedTraits: ["Imagination", "Originality", "Expression"],
    },
  ],
  goals: [
    {
      title: "Develop Leadership Skills",
      description: "Enhance ability to guide and inspire teams",
      progress: 75,
      deadline: "June 2025",
      milestones: [
        { title: "Complete leadership workshop", completed: true },
        { title: "Lead team project", completed: true },
        { title: "Mentor junior students", completed: false },
        { title: "Organize community event", completed: false },
      ],
    },
    {
      title: "Master Public Speaking",
      description: "Become confident in public presentations",
      progress: 60,
      deadline: "December 2024",
      milestones: [
        { title: "Join speaking club", completed: true },
        { title: "Give 5 presentations", completed: true },
        { title: "Compete in debate", completed: false },
        { title: "Host workshop", completed: false },
      ],
    },
  ],
};

const CarouselButton = ({ direction, onClick }: { direction: 'left' | 'right', onClick: (e: any) => void }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-5' : '-right-5'}`}
  >
    {direction === 'left' ? <BsChevronLeft className="text-white/60" /> : <BsChevronRight className="text-white/60" />}
  </button>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-white/10 p-2 rounded-lg">
        <p className="text-xs text-white/90">{`Month: ${label}`}</p>
        <p className="text-xs text-purple-400">{`Level: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const PersonaDevelopmentHub: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [expandedSection, setExpandedSection] = useState<string>("skills");
  const [selectedSkill, setSelectedSkill] = useState(personaData.skills[0]);
  const [selectedGoal, setSelectedGoal] = useState(personaData.goals[0]);
  const [selectedStrength, setSelectedStrength] = useState(
    personaData.strengths[0],
  );
  const [traitIndex, setTraitIndex] = useState(0);

  const sections = [
    {
      id: "skills",
      title: "Skills Development",
      icon: <FiTarget />,
      color: "purple",
    },
    {
      id: "personality",
      title: "Personality Insights",
      icon: <LuBrain />,
      color: "blue",
    },
    {
      id: "goals",
      title: "Growth Goals",
      icon: <BsStar />,
      color: "purple",
    },
    {
      id: "strengths",
      title: "Core Strengths",
      icon: <BsTrophy />,
      color: "blue",
    },
  ];

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Persona Development
        </h2>
      </div>
      <motion.div className="grid gap-2" layout>
        {sections.map((section) => (
          <motion.div
            key={section.id}
            layout
            className={`
              rounded-2xl border border-white/5 bg-white/[0.01]
              ${expandedSection === section.id ? "p-6" : "p-4"}
              cursor-pointer
              hover:bg-white/[0.02] transition-colors
            `}
            onClick={() => setExpandedSection(section.id)}
          >
            <motion.div className="flex items-center justify-between" layout>
              <div className="flex items-center gap-3">
                <div className={`text-${section.color}-400 text-lg`}>
                  {section.icon}
                </div>
                <h2 className="text-sm md:text-base font-medium">
                  {section.title}
                </h2>
              </div>
              {expandedSection !== section.id && (
                <div className="text-xs text-white/60">Click to expand</div>
              )}
            </motion.div>

            <AnimatePresence mode="wait">
              {expandedSection === section.id && (
                <motion.div
                  initial="collapsed"
                  animate="expanded"
                  exit="exiting"
                  variants={{
                    collapsed: {
                      opacity: 0,
                      height: 0,
                    },
                    expanded: {
                      opacity: 1,
                      height: "auto",
                      transition: {
                        height: {
                          delay: 0.2
                        },
                        opacity: {
                          delay: 0.3,
                        },
                      },
                    },
                    exiting: {
                      opacity: 0,
                      height: 0,
                      transition: {
                        opacity: {
                          duration: 0.2,
                        },
                        height: {
                          delay: 0.2,
                          duration: 0.3,
                        },
                      },
                    },
                  }}
                  className="mt-4 overflow-hidden"
                >
                  {section.id === "skills" && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {personaData.skills.map((skill) => (
                          <motion.button
                            key={skill.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSkill(skill);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap 
                              ${selectedSkill.name === skill.name
                                ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                              }`}
                          >
                            {skill.name}
                          </motion.button>
                        ))}
                      </div>

                      <motion.div layout className="w-full aspect-[2/1]">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={selectedSkill.history}>
                            <defs>
                              <linearGradient
                                id="skillGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="rgb(147, 51, 234)"
                                  stopOpacity={0.3}
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(147, 51, 234)"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            <CartesianGrid
                              strokeDasharray="3 3"
                              stroke="rgba(255,255,255,0.1)"
                            />
                            <XAxis
                              dataKey="month"
                              stroke="rgba(255,255,255,0.5)"
                              fontSize={12}
                            />
                            <YAxis
                              domain={[0, 100]}
                              stroke="rgba(255,255,255,0.5)"
                              fontSize={12}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                              type="monotone"
                              dataKey="level"
                              stroke="rgb(147, 51, 234)"
                              fill="url(#skillGradient)"
                              strokeWidth={2}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </motion.div>
                    </div>
                  )}

                  {section.id === "personality" && (
                    <div className="space-y-4">
                      <motion.div
                        layout
                        className="w-full aspect-square max-w-md mx-auto"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart data={personaData.personalityTraits}>
                            <PolarGrid stroke="rgba(255,255,255,0.1)" />
                            <PolarAngleAxis
                              dataKey="trait"
                              tick={{
                                fill: "rgba(255,255,255,0.6)",
                                fontSize: 12,
                              }}
                            />
                            <PolarRadiusAxis
                              domain={[0, 100]}
                              tick={{ fill: "rgba(255,255,255,0.6)" }}
                            />
                            <Radar
                              name="Personality"
                              dataKey="score"
                              stroke="#3b82f6"
                              fill="#3b82f6"
                              fillOpacity={0.3}
                            />
                          </RadarChart>
                        </ResponsiveContainer>
                      </motion.div>

                      <div className="relative">
                        <motion.div
                          className="bg-white/5 p-4 rounded-xl"
                          layout
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-medium">
                              {personaData.personalityTraits[traitIndex].trait}
                            </h3>
                            <span className="text-blue-400 text-sm">
                              {personaData.personalityTraits[traitIndex].score}%
                            </span>
                          </div>
                          <p className="text-sm text-white/70 mb-2">
                            {
                              personaData.personalityTraits[traitIndex]
                                .description
                            }
                          </p>
                          <div className="space-y-1">
                            {personaData.personalityTraits[
                              traitIndex
                            ].developmentAreas.map((area, idx) => (
                              <div
                                key={idx}
                                className="text-xs text-white/60 flex items-center gap-2"
                              >
                                <div className="w-1 h-1 rounded-full bg-blue-400" />
                                {area}
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        <CarouselButton
                          direction="left"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTraitIndex((prev) =>
                              prev === 0
                                ? personaData.personalityTraits.length - 1
                                : prev - 1,
                            );
                          }}
                        />
                        <CarouselButton
                          direction="right"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTraitIndex((prev) =>
                              prev === personaData.personalityTraits.length - 1
                                ? 0
                                : prev + 1,
                            );
                          }}
                        />

                        <div className="flex justify-center gap-1 mt-3">
                          {personaData.personalityTraits.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setTraitIndex(idx);
                              }}
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === traitIndex
                                ? "bg-blue-400"
                                : "bg-white/20"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "goals" && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {personaData.goals.map((goal) => (
                          <motion.button
                            key={goal.title}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedGoal(goal);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap 
                              ${selectedGoal.title === goal.title
                                ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                              }`}
                          >
                            {goal.title}
                          </motion.button>
                        ))}
                      </div>

                      <motion.div layout className="bg-white/5 p-4 rounded-xl">
                        <div className="mb-4">
                          <h3 className="text-sm font-medium mb-1">
                            {selectedGoal.title}
                          </h3>
                          <p className="text-sm text-white/70">
                            {selectedGoal.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-xs text-white/60">
                            <span>Progress</span>
                            <span>{selectedGoal.progress}%</span>
                          </div>
                          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${selectedGoal.progress}%` }}
                              className="h-full bg-purple-500"
                            />
                          </div>

                          <div className="space-y-2 mt-4">
                            {selectedGoal.milestones.map((milestone, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div
                                  className={`p-0.5 rounded-full ${milestone.completed
                                    ? "bg-purple-500"
                                    : "bg-white/20"
                                    }`}
                                >
                                  <BsCheck2Circle className="text-white w-4 h-4" />
                                </div>
                                <span
                                  className={
                                    milestone.completed
                                      ? "text-white/90"
                                      : "text-white/60"
                                  }
                                >
                                  {milestone.title}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {section.id === "strengths" && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {personaData.strengths.map((strength) => (
                          <motion.button
                            key={strength.area}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedStrength(strength);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap 
                              ${selectedStrength.area === strength.area
                                ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                              }`}
                          >
                            {strength.area}
                          </motion.button>
                        ))}
                      </div>

                      <motion.div layout className="bg-white/5 p-4 rounded-xl">
                        <div className="mb-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-sm font-medium">
                              {selectedStrength.area}
                            </h3>
                            <span className="text-blue-400 text-sm">
                              {selectedStrength.level}%
                            </span>
                          </div>
                          <p className="text-sm text-white/70">
                            {selectedStrength.description}
                          </p>
                        </div>

                        <div className="grid gap-4">
                          <div>
                            <h4 className="text-xs text-white/60 mb-2">
                              Examples & Achievements
                            </h4>
                            <div className="space-y-1">
                              {selectedStrength.examples.map((example, idx) => (
                                <div
                                  key={idx}
                                  className="text-sm text-white/80 flex items-center gap-2"
                                >
                                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                                  {example}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xs text-white/60 mb-2">
                              Related Traits
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedStrength.relatedTraits.map(
                                (trait, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-2 py-1 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/50"
                                  >
                                    {trait}
                                  </span>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PersonaDevelopmentHub;
