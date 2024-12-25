"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsSearch, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Progress } from "@/app/components/UI/Progress";
import DropdownMenu from "@/app/components/UI/DropdownMenu";

const universities = [
  {
    name: "Univeristy of Oxford",
    match: 97,
    location: "Oxford, UK",
    tags: ["Historical", "Research"],
  },
  {
    name: "Massachusetts Institute of Technology",
    match: 94,
    location: "Cambridge, MA, USA",
    tags: ["Tech-Focused", "Innovation"],
  },
  {
    name: "University of Cambridge",
    match: 91,
    location: "Cambridge, UK",
    tags: ["Ivy League", "Research"],
  },
];

const sortOptions = [
  { value: "name", label: "Sort by Name" },
  { value: "match", label: "Sort by Match" },
  { value: "location", label: "Sort by Location" },
];

const UniversityFinder: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("match");

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      const height = containerRef.current.offsetHeight;

      setVisibleCount(Math.floor(height / 150));
    };

    const resizeObserver = new ResizeObserver(updateSize);
    const container = containerRef.current;
    if (container) {
      resizeObserver.observe(container);
      updateSize();
    }

    return () => resizeObserver.disconnect();
  }, []);

  const toggleBookmark = (name: string) => {
    setBookmarked((prev) =>
      prev.includes(name)
        ? prev.filter((uni) => uni !== name)
        : [...prev, name],
    );
  };

  const handleSort = (a: any, b: any) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "match") return b.match - a.match;
    if (sortBy === "location") return a.location.localeCompare(b.location);
    return 0;
  };

  const filteredUniversities = universities
    .filter((uni) => {
      return (
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(uni.match).includes(searchTerm)
      );
    })
    .sort(handleSort);

  return (
    <div
      {...divProps}
      ref={containerRef}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-hidden flex flex-col"
    >
      <div className="flex flex-col items-start justify-start gap-2 mb-0">
        <div className="flex flex-row gap-2 items-center mb-2">
          <h2 className="text-sm md:text-base lg:text-lg font-semibold">
            University Finder
          </h2>
          <div className="flex flex-row gap-1 items-center">
            <BsBookmark className="text-white/50" />
            <span className="text-xs text-white/60">{bookmarked.length}</span>
          </div>
        </div>
        <DropdownMenu
          options={sortOptions}
          placeholder="Sort by"
          onSelect={(value) => setSortBy(value)}
        />
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search universities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="truncate text-xs lg:text-sm w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-10 focus:outline-none focus:border-purple-500"
        />
        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
      </div>
      <div className="space-y-4">
        {filteredUniversities.slice(0, visibleCount).map((uni, index) => (
          <div
            key={index}
            className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-normal truncate text-white/90 text-sm lg:text-base transition-all duration-300">
                {uni.name}
              </h3>
              <button onClick={() => toggleBookmark(uni.name)}>
                {bookmarked.includes(uni.name) ? (
                  <BsBookmarkFill className="text-purple-400" />
                ) : (
                  <BsBookmark className="text-white/60" />
                )}
              </button>
            </div>
            <div className="text-xs lg:text-sm truncate text-white/60 mb-2 transition-all duration-300">
              {uni.location}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {uni.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-purple-500/20 text-xs px-2 py-1 rounded-lg text-purple-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Progress
              value={uni.match}
              className="h-1 bg-zinc-700"
              progressColor="bg-gradient-to-r from-purple-500 to-blue-500"
            />
            <button
              className="text-xs text-white/60 mt-2"
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              {expanded === index ? "- Less Details" : "+ More Details"}
            </button>
            {expanded === index && (
              <div className="mt-2 text-xs text-white/60">
                <p>Average Tuition Fee: $60,000</p>
                <p>Acceptance Rate: 10%</p>
                <p>Popular Programs: Science, Technology, Engineering</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityFinder;
