"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import Modal, { useModal } from "@/app/components/UI/Modal";

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
];

const FindAMentor: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const handleMentorClick = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    openModal();
  };

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
            onClick={() => handleMentorClick(mentor)}
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

      <Modal isOpen={isOpen} onClose={closeModal} title={selectedMentor?.name}>
        {selectedMentor && (
          <div className="space-y-4">
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
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FindAMentor;
