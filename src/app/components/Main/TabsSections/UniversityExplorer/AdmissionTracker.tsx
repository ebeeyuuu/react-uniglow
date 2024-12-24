"use client";

import { useState } from "react";
import {
  BsFileText,
  BsPeople,
  BsFolder,
  BsPencil,
  BsCalculator,
  BsCode,
  BsMusicNoteBeamed,
  BsCamera,
  BsTrophy,
  BsGlobe,
  BsBook,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import RequirementCard from "./RequirementCard";

interface RequirementDetails {
  description: string;
  dueDate?: string;
  status: "not-started" | "in-progress" | "completed";
  completedItems?: string[];
  totalItems?: number;
  links?: { label: string; url: string }[];
  icon: React.ComponentType;
}

interface University {
  name: string;
  deadline: string;
  requirements: {
    item: string;
    required: boolean;
    details: RequirementDetails;
  }[];
  scores: {
    gpa: number;
    sat?: { min: number; max: number };
    testOptional: boolean;
  };
}

const universities: University[] = [
  {
    name: "Stanford University",
    deadline: "Jan 5, 2025",
    requirements: [
      {
        item: "Common App",
        required: true,
        details: {
          description: "Complete all sections of the Common Application",
          status: "in-progress",
          completedItems: ["Personal Info", "Education", "Activities"],
          totalItems: 7,
          links: [
            { label: "Common App Portal", url: "https://commonapp.org" },
            { label: "Stanford Supplement", url: "https://stanford.edu/apply" },
          ],
          icon: BsFileText,
        },
      },
      {
        item: "3 Essays",
        required: true,
        details: {
          description: "Complete main essay and two supplemental essays",
          dueDate: "Dec 31, 2024",
          status: "not-started",
          completedItems: [],
          totalItems: 3,
          links: [
            { label: "Essay Prompts", url: "https://stanford.edu/essays" },
          ],
          icon: BsPencil,
        },
      },
      {
        item: "2 Recommendations",
        required: true,
        details: {
          description: "Request and track teacher recommendations",
          status: "completed",
          completedItems: ["Math Teacher", "English Teacher"],
          totalItems: 2,
          icon: BsPeople,
        },
      },
      {
        item: "Portfolio",
        required: false,
        details: {
          description: "Optional arts or maker portfolio submission",
          dueDate: "Dec 15, 2024",
          status: "not-started",
          links: [
            {
              label: "Portfolio Guidelines",
              url: "https://stanford.edu/portfolio",
            },
          ],
          icon: BsFolder,
        },
      },
    ],
    scores: {
      gpa: 3.96,
      sat: { min: 1440, max: 1550 },
      testOptional: true,
    },
  },
  {
    name: "MIT",
    deadline: "Jan 5, 2025",
    requirements: [
      {
        item: "MIT Application",
        required: true,
        details: {
          description: "Complete the MIT-specific application",
          status: "in-progress",
          completedItems: ["Basic Info", "Academics"],
          totalItems: 6,
          links: [{ label: "MIT Portal", url: "https://mit.edu/apply" }],
          icon: BsFileText,
        },
      },
      {
        item: "5 Short Essays",
        required: true,
        details: {
          description: "Complete all short answer responses",
          dueDate: "Jan 1, 2025",
          status: "in-progress",
          completedItems: ["Essay 1", "Essay 2"],
          totalItems: 5,
          links: [
            { label: "Writing Guidelines", url: "https://mit.edu/essays" },
          ],
          icon: BsPencil,
        },
      },
      {
        item: "Maker Portfolio",
        required: false,
        details: {
          description: "Document technical projects and innovations",
          dueDate: "Dec 20, 2024",
          status: "not-started",
          links: [{ label: "Maker Guidelines", url: "https://mit.edu/maker" }],
          icon: BsCode,
        },
      },
      {
        item: "Math Level II SAT",
        required: true,
        details: {
          description: "Submit Math Level II Subject Test scores",
          status: "completed",
          completedItems: ["Test Taken", "Scores Sent"],
          totalItems: 2,
          icon: BsCalculator,
        },
      },
    ],
    scores: {
      gpa: 4.0,
      sat: { min: 1500, max: 1570 },
      testOptional: false,
    },
  },
  {
    name: "Harvard University",
    deadline: "Jan 1, 2025",
    requirements: [
      {
        item: "Common App",
        required: true,
        details: {
          description: "Complete Common Application with Harvard supplement",
          status: "in-progress",
          completedItems: ["Profile", "Family", "Education"],
          totalItems: 8,
          links: [
            {
              label: "Harvard Portal",
              url: "https://college.harvard.edu/admissions",
            },
          ],
          icon: BsFileText,
        },
      },
      {
        item: "School Report",
        required: true,
        details: {
          description:
            "Submit official transcript and counselor recommendation",
          status: "not-started",
          completedItems: [],
          totalItems: 2,
          icon: BsBook,
        },
      },
      {
        item: "Arts Supplement",
        required: false,
        details: {
          description: "Optional arts portfolio for visual/performing arts",
          dueDate: "Dec 15, 2024",
          status: "not-started",
          links: [
            { label: "Arts Guidelines", url: "https://harvard.edu/arts" },
          ],
          icon: BsMusicNoteBeamed,
        },
      },
      {
        item: "Interview",
        required: false,
        details: {
          description: "Alumni interview if available in your area",
          status: "not-started",
          icon: BsPeople,
        },
      },
    ],
    scores: {
      gpa: 3.94,
      sat: { min: 1460, max: 1580 },
      testOptional: true,
    },
  },
  {
    name: "Yale University",
    deadline: "Jan 2, 2025",
    requirements: [
      {
        item: "Common App",
        required: true,
        details: {
          description: "Complete Common Application with Yale supplement",
          status: "in-progress",
          completedItems: ["Personal Info", "Activities"],
          totalItems: 6,
          links: [{ label: "Yale Portal", url: "https://admissions.yale.edu" }],
          icon: BsFileText,
        },
      },
      {
        item: "4 Short Responses",
        required: true,
        details: {
          description: "Complete Yale-specific short answer questions",
          dueDate: "Dec 31, 2024",
          status: "not-started",
          completedItems: [],
          totalItems: 4,
          icon: BsPencil,
        },
      },
      {
        item: "Academic Portfolio",
        required: false,
        details: {
          description: "Submit research abstracts or academic works",
          dueDate: "Dec 15, 2024",
          status: "not-started",
          links: [
            {
              label: "Portfolio Guidelines",
              url: "https://yale.edu/portfolio",
            },
          ],
          icon: BsFolder,
        },
      },
      {
        item: "Extracurricular Updates",
        required: false,
        details: {
          description:
            "Additional information about activities and achievements",
          status: "in-progress",
          completedItems: ["Awards", "Leadership"],
          totalItems: 4,
          icon: BsTrophy,
        },
      },
    ],
    scores: {
      gpa: 3.95,
      sat: { min: 1450, max: 1560 },
      testOptional: true,
    },
  },
  {
    name: "Princeton University",
    deadline: "Jan 1, 2025",
    requirements: [
      {
        item: "Common App",
        required: true,
        details: {
          description: "Complete Common Application with Princeton supplement",
          status: "not-started",
          completedItems: [],
          totalItems: 7,
          links: [
            {
              label: "Princeton Portal",
              url: "https://admission.princeton.edu",
            },
          ],
          icon: BsFileText,
        },
      },
      {
        item: "Graded Paper",
        required: true,
        details: {
          description: "Submit graded written paper from high school",
          dueDate: "Dec 20, 2024",
          status: "not-started",
          icon: BsBook,
        },
      },
      {
        item: "Arts Supplement",
        required: false,
        details: {
          description: "Optional creative arts portfolio",
          dueDate: "Dec 15, 2024",
          status: "not-started",
          links: [
            { label: "Arts Guidelines", url: "https://princeton.edu/arts" },
          ],
          icon: BsCamera,
        },
      },
      {
        item: "International Documents",
        required: false,
        details: {
          description: "Additional documents for international students",
          status: "not-started",
          links: [
            {
              label: "International Requirements",
              url: "https://princeton.edu/international",
            },
          ],
          icon: BsGlobe,
        },
      },
    ],
    scores: {
      gpa: 3.91,
      sat: { min: 1440, max: 1570 },
      testOptional: true,
    },
  },
];

const AdmissionTracker: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedBox, setExpandedBox] = useState<string | null>("Tests");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % universities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? universities.length - 1 : prevIndex - 1,
    );
  };

  const currentUniversity = universities[currentIndex];

  const handleExpand = (box: string) => {
    setExpandedBox((prev) => (prev === box ? null : box));
  };

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col"
    >
      <div className="flex flex-col items-start justify-start gap-2 mb-0">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Admissions Tracker
        </h2>
      </div>

      <div className="relative">
        <div className="w-full space-y-2">
          <div className="justify-between w-full flex flex-row items-center">
            <h3 className="font-medium text-sm mb-1">
              {currentUniversity.name}
            </h3>
            <span className="text-xs text-white/60">
              Due: {currentUniversity.deadline}
            </span>
          </div>

          <div
            className={`bg-white/5 p-3 rounded-xl space-y-2 transition-all duration-300 cursor-pointer hover:outline hover:outline-purple-500 hover:outline-1 ${expandedBox === "Tests" ? "max-h-60" : "max-h-10"
              }`}
            onClick={() => handleExpand("Tests")}
          >
            <div className="flex justify-between text-xs">
              <span className="text-white/60">GPA</span>
              <span>{currentUniversity.scores.gpa}</span>
            </div>
            {expandedBox === "Tests" && (
              <div className="space-y-2 mt-2">
                {currentUniversity.scores.testOptional ? (
                  <div className="text-xs bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
                    Test Optional
                  </div>
                ) : (
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">SAT</span>
                    <span>
                      {currentUniversity.scores.sat?.min}-
                      {currentUniversity.scores.sat?.max}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            {currentUniversity.requirements.map((requirement) => (
              <RequirementCard
                key={requirement.item}
                requirement={requirement}
              />
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-row gap-2 mt-5">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition"
          >
            <BsChevronLeft className="text-white/60" size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition"
          >
            <BsChevronRight className="text-white/60" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionTracker;
