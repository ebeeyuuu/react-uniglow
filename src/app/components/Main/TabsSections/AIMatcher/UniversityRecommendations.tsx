import React, { useEffect, useState } from "react";
import { BsSearch, BsChevronDown, BsCheck } from "react-icons/bs";
import { motion } from "framer-motion";

interface University {
  name: string;
  match: number;
  location: string;
  stats: {
    tuition: string;
    acceptanceRate: string;
    popularPrograms: string[];
    tags: string[];
    notableAlumni: string[];
    uniqueFeatures: string[];
  };
}

const universities: University[] = [
  {
    name: "University of Oxford",
    match: 97,
    location: "Oxford, UK",
    stats: {
      tuition: "$45,000",
      acceptanceRate: "17%",
      popularPrograms: ["Law", "Medicine", "Philosophy"],
      tags: ["Historical", "Prestigious", "Research-Driven"],
      notableAlumni: ["Stephen Hawking", "Oscar Wilde"],
      uniqueFeatures: ["Oldest university in the English-speaking world", "Renowned tutorial system"],
    },
  },
  {
    name: "MIT",
    match: 94,
    location: "Cambridge, MA, USA",
    stats: {
      tuition: "$53,000",
      acceptanceRate: "7%",
      popularPrograms: ["Computer Science", "Engineering", "Mathematics"],
      tags: ["Innovative", "Tech-Focused", "Elite"],
      notableAlumni: ["Kofi Annan", "Buzz Aldrin"],
      uniqueFeatures: ["Strong entrepreneurial culture", "Cutting-edge research labs"],
    },
  },
  {
    name: "University of Cambridge",
    match: 91,
    location: "Cambridge, UK",
    stats: {
      tuition: "$50,000",
      acceptanceRate: "21%",
      popularPrograms: ["Engineering", "Economics", "Law"],
      tags: ["Traditional", "Research-Intensive", "Ivy League"],
      notableAlumni: ["Isaac Newton", "Charles Darwin"],
      uniqueFeatures: ["World-class research facilities", "Collegiate system"],
    },
  },
];

const UniversityRecommendations: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState<string | null>(universities[0].name);
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);

  const filteredUniversities = universities.filter(
    (uni) =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelection = (name: string) => {
    setSelectedUniversities((prev) =>
      prev.includes(name) ? prev.filter((uni) => uni !== name) : [...prev, name]
    );
  };

  useEffect(() => {
    if (filteredUniversities.length > 0 && !filteredUniversities.some(u => u.name === expanded)) {
      setExpanded(filteredUniversities[0].name);
    }
  }, [filteredUniversities, expanded]);

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Univeristy Recommendations
        </h2>
      </div>
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

      <div className="space-y-4">
        {filteredUniversities.map((uni) => (
          <div
            key={uni.name}
            className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-medium text-white/90 flex items-center gap-2">
                  {uni.name}
                  <button
                    className={`p-0.5 rounded-full border transition-all mb-0.5 ${
                      selectedUniversities.includes(uni.name)
                        ? "bg-purple-500 border-purple-600"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                    onClick={() => toggleSelection(uni.name)}
                  >
                    <BsCheck
                      className={`text-sm transition-all ${
                        selectedUniversities.includes(uni.name)
                          ? "text-white"
                          : "text-white/60"
                      }`}
                    />
                  </button>
                </h3>
                <p className="text-sm text-white/60">{uni.location}</p>
              </div>
              <motion.div
                animate={{ rotate: expanded === uni.name ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setExpanded(uni.name)}
                className="cursor-pointer"
              >
                <BsChevronDown className="text-white/60" />
              </motion.div>
            </div>

            <div className="mt-2 w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                style={{ width: `${uni.match}%` }}
              />
            </div>
            <p className="text-xs text-white/70 mt-1">Match: {uni.match}%</p>

            {expanded === uni.name && (
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-normal text-white/80">Details</h4>
                  <p className="text-xs text-white/70">Tuition: {uni.stats.tuition}</p>
                  <p className="text-xs text-white/70">
                    Acceptance Rate: {uni.stats.acceptanceRate}
                  </p>
                  <p className="text-xs text-white/70">
                    Popular Programs: {uni.stats.popularPrograms.join(", ")}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-normal text-white/80">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {uni.stats.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-normal text-white/80">Unique Features</h4>
                  <ul className="list-disc list-inside text-xs text-white/70">
                    {uni.stats.uniqueFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-normal text-white/80">Notable Alumni</h4>
                  <ul className="list-disc list-inside text-xs text-white/70">
                    {uni.stats.notableAlumni.map((alumnus, idx) => (
                      <li key={idx}>{alumnus}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedUniversities.length > 0 && (
        <div className="p-4 bg-white/5 rounded-xl">
          <h3 className="text-sm font-medium text-white/80 mb-2">
            Selected Universities
          </h3>
          <ul className="space-y-1 text-sm text-white/70">
            {selectedUniversities.map((uni) => (
              <li key={uni}>{uni}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UniversityRecommendations;
