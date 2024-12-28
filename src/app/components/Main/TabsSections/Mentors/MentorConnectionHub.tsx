"use client";

import { useState } from "react";
import {
  BsChatDots,
  BsCalendar,
  BsClock,
  BsPerson,
  BsPlus,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

interface Mentor {
  name: string;
  expertise: string[];
}

interface Session {
  date: string;
  time: string;
  topic: string;
  notes: string;
}

const mentors: Mentor[] = [
  { name: "Dr. Susan Parker", expertise: ["Physics", "Data Science"] },
  { name: "John Smith", expertise: ["AI", "Machine Learning"] },
  { name: "Elena Martinez", expertise: ["Mathematics", "Cryptography"] },
];

const upcomingSessions: Session[] = [
  {
    date: "2024-12-30",
    time: "10:00 AM",
    topic: "Quantum Computing",
    notes: "",
  },
  { date: "2024-12-31", time: "2:00 PM", topic: "Linear Algebra", notes: "" },
];

const sessionHistory: Session[] = [
  {
    date: "2024-12-20",
    time: "11:00 AM",
    topic: "Neural Networks",
    notes: "Discussed deep learning architectures.",
  },
  {
    date: "2024-12-15",
    time: "1:30 PM",
    topic: "Calculus",
    notes: "Reviewed integration techniques.",
  },
];

const MentorConnectionHub: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
        </h2>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white/85 flex items-center gap-2">
          <BsPerson className="text-purple-400" /> Your Assigned Mentors
        </h2>
        <div className="flex flex-row flex-wrap gap-2">
          {mentors.map((mentor) => (
            <button
              key={mentor.name}
              onClick={() => setSelectedMentor(mentor)}
              className={`px-4 py-2 rounded-lg text-xs whitespace-nowrap ${selectedMentor?.name === mentor.name
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                }`}
            >
              {mentor.name}
            </button>
          ))}
        </div>
        {selectedMentor && (
          <div className="bg-white/5 p-3 rounded-lg">
            <h3 className="text-sm text-white/80">{selectedMentor.name}</h3>
            <p className="text-xs text-white/60">
              Expertise: {selectedMentor.expertise.join(", ")}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-normal text-white/85 flex items-center gap-2">
          <BsCalendar className="text-blue-400" /> Upcoming Mentoring Sessions
        </h2>
        <div className="space-y-2">
          {upcomingSessions.map((session, index) => (
            <div
              key={index}
              onClick={() => setSelectedSession(session)}
              className="bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 cursor-pointer"
            >
              <div className="text-sm text-white/85">{session.topic}</div>
              <div className="text-xs text-white/60">
                {session.date} at {session.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-normal text-white/85 flex items-center gap-2">
          <BsChatDots className="text-green-400" /> Chat with Mentors
        </h2>
        <button className="w-full text-xs px-4 py-2 bg-white/5 text-white/60 rounded-lg border border-white/10 hover:bg-white/10">
          Open Chat Interface
        </button>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-normal text-white/85 flex items-center gap-2">
          <BsClock className="text-yellow-400" /> Session History
        </h2>
        <div className="space-y-2">
          {sessionHistory.map((session, index) => (
            <div
              key={index}
              className="bg-white/5 p-3 rounded-lg border border-white/10"
            >
              <div className="text-sm text-white/85">{session.topic}</div>
              <div className="text-xs text-white/60">
                {session.date} at {session.time}
              </div>
              <p className="text-xs text-white/70 mt-1">{session.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-normal text-white/85 flex items-center gap-2">
          <BsPlus className="text-red-400" /> Book New Sessions
        </h2>
        <button className="w-full text-xs px-4 py-2 bg-white/5 text-white/60 rounded-lg border border-white/10 hover:bg-white/10">
          Schedule a New Session
        </button>
      </div>
    </div>
  );
};

export default MentorConnectionHub;
