"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsSearch, BsChevronDown, BsChevronUp } from "react-icons/bs";

interface CareerPath {
  title: string;
  averageSalary: number;
  jobGrowth: string;
  relatedMajors: string[];
  topEmployers: string[];
  requiredSkills: string[];
  universities: {
    name: string;
    programStrength: number;
    uniqueFeatures: string[];
    notableAlumni: string[];
  }[];
}

const careerPaths: CareerPath[] = [
  {
    title: "Software Engineering",
    averageSalary: 120000,
    jobGrowth: "+22% by 2029",
    relatedMajors: [
      "Computer Science",
      "Software Engineering",
      "Information Technology",
    ],
    topEmployers: ["Google", "Microsoft", "Amazon", "Meta", "Apple"],
    requiredSkills: [
      "Programming",
      "System Design",
      "Algorithms",
      "Cloud Computing",
    ],
    universities: [
      {
        name: "MIT",
        programStrength: 98,
        uniqueFeatures: [
          "AI Research Lab",
          "Industry Partnerships",
          "Innovation Hub",
        ],
        notableAlumni: ["Drew Houston", "Tony Hsieh"],
      },
      {
        name: "Stanford University",
        programStrength: 96,
        uniqueFeatures: ["Silicon Valley Network", "Startup Incubator"],
        notableAlumni: ["Larry Page", "Sergey Brin"],
      },
    ],
  },
  {
    title: "Data Science",
    averageSalary: 115000,
    jobGrowth: "+28% by 2029",
    relatedMajors: [
      "Data Science",
      "Statistics",
      "Mathematics",
      "Computer Science",
    ],
    topEmployers: ["Netflix", "Uber", "IBM", "Facebook", "Amazon"],
    requiredSkills: [
      "Machine Learning",
      "Statistics",
      "Python",
      "Data Visualization",
    ],
    universities: [
      {
        name: "UC Berkeley",
        programStrength: 95,
        uniqueFeatures: ["Data Analytics Lab", "Research Partnerships"],
        notableAlumni: ["Steve Wozniak", "Eric Schmidt"],
      },
      {
        name: "Carnegie Mellon",
        programStrength: 94,
        uniqueFeatures: ["AI Research Center", "Industry Collaborations"],
        notableAlumni: ["Andrew Ng", "Kai-Fu Lee"],
      },
    ],
  },
  {
    title: "Biomedical Engineering",
    averageSalary: 95000,
    jobGrowth: "+6% by 2029",
    relatedMajors: [
      "Biomedical Engineering",
      "Biotech",
      "Mechanical Engineering",
    ],
    topEmployers: ["Johnson & Johnson", "Medtronic", "Boston Scientific"],
    requiredSkills: ["Medical Device Design", "Clinical Research", "Biology"],
    universities: [
      {
        name: "Johns Hopkins",
        programStrength: 97,
        uniqueFeatures: ["Medical Research Center", "Hospital Partnership"],
        notableAlumni: ["Peter Agre", "Adam Riess"],
      },
      {
        name: "Georgia Tech",
        programStrength: 93,
        uniqueFeatures: ["Biotech Innovation Hub", "Industry Connections"],
        notableAlumni: ["John Young", "Mike Duke"],
      },
    ],
  },
];

const CareerPathways: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedPath, setExpandedPath] = useState<string | null>(null);

  const filteredPaths = careerPaths.filter(
    (path) =>
      path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      path.relatedMajors.some((major) =>
        major.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Career Pathway Explorer
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search careers or majors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-10 focus:outline-none focus:border-purple-500 text-xs lg:text-sm"
          />
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredPaths.map((path) => (
          <div
            key={path.title}
            className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
          >
            <div
              className="flex justify-between gap-2 items-start cursor-pointer"
              onClick={() =>
                setExpandedPath(expandedPath === path.title ? null : path.title)
              }
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-xs sm:text-sm lg:text-base">
                  {path.title}
                </h3>
                <div className="flex flex-row gap-1">
                  <p className="text-xs text-white/60">Avg. Salary</p>
                  <p className="text-xs font-medium">
                    ${path.averageSalary.toLocaleString()}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {path.relatedMajors.slice(0, 2).map((major) => (
                    <span
                      key={major}
                      className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-lg"
                    >
                      {major}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: expandedPath === path.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BsChevronDown className="text-white/60" />
                </motion.div>
              </div>
            </div>

            {expandedPath === path.title && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.requiredSkills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Top Employers</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.topEmployers.map((employer) => (
                        <span
                          key={employer}
                          className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-lg"
                        >
                          {employer}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Top Universities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {path.universities.map((uni) => (
                      <div
                        key={uni.name}
                        className="bg-white/5 p-3 rounded-lg space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <h5 className="font-medium text-sm">{uni.name}</h5>
                          <span className="text-purple-400 text-sm">
                            {uni.programStrength}% Match
                          </span>
                        </div>
                        <div className="text-xs text-white/60">
                          {uni.uniqueFeatures.join(" • ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPathways;
