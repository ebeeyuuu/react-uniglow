"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsSearch, BsChevronDown } from "react-icons/bs";

interface Mentor {
  name: string;
  expertise: string[];
  university: string;
  experience: number;
  availability: string;
  bio: string;
}

const mentors: Mentor[] = [
  {
    name: "Dr. Emily Carter",
    expertise: ["Computer Science", "AI", "Data Science"],
    university: "Stanford University",
    experience: 10,
    availability: "Mon-Fri, 10am-4pm",
    bio: "Dr. Carter specializes in AI research and has helped numerous students get into top-tier universities.",
  },
  {
    name: "John Smith",
    expertise: ["Biomedical Engineering", "Biotech"],
    university: "MIT",
    experience: 7,
    availability: "Wed-Fri, 1pm-5pm",
    bio: "John has extensive experience in biomedical innovation and mentoring students in research-oriented fields.",
  },
  {
    name: "Sarah Lee",
    expertise: ["Business Management", "Finance"],
    university: "Harvard University",
    experience: 12,
    availability: "Tue-Thu, 9am-3pm",
    bio: "Sarah has a strong background in business and finance, helping students secure spots at Ivy League schools.",
  },
];

const FindAMentor: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Find a Mentor</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search mentors or fields of expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-10 focus:outline-none focus:border-purple-500 text-sm"
          />
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredMentors.map((mentor) => (
          <motion.div
            key={mentor.name}
            className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setSelectedMentor(mentor)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-white/85">
                  {mentor.name}
                </h3>
                <p className="text-xs text-white/60">
                  {mentor.university} · {mentor.experience} years experience
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {mentor.expertise.map((field) => (
                    <span
                      key={field}
                      className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-lg"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
              <BsChevronDown className="text-white/60" />
            </div>
          </motion.div>
        ))}
      </div>

      {selectedMentor && (
        <motion.div
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white/10 rounded-xl p-6 w-3/4 max-w-lg text-white space-y-4">
            <h3 className="text-lg font-semibold">{selectedMentor.name}</h3>
            <p className="text-sm">
              <strong>University:</strong> {selectedMentor.university}
            </p>
            <p className="text-sm">
              <strong>Experience:</strong> {selectedMentor.experience} years
            </p>
            <p className="text-sm">
              <strong>Availability:</strong> {selectedMentor.availability}
            </p>
            <p className="text-sm">{selectedMentor.bio}</p>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={() => setSelectedMentor(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FindAMentor;
