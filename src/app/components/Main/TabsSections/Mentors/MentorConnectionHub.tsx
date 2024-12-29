"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChat, BsClock, BsBook, BsPerson, BsDownload } from "react-icons/bs";

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  university: string;
  availability: {
    day: string;
    slots: string[];
  }[];
  rating: number;
  totalSessions: number;
}

interface Session {
  id: string;
  mentorId: string;
  mentorName: string;
  date: string;
  duration: string;
  topic: string;
  notes: string;
  rating: number;
  status: "completed" | "upcoming" | "cancelled";
}

interface Message {
  id: string;
  mentorId: string;
  mentorName: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: {
    name: string;
    type: string;
    size: string;
  }[];
}

interface Resource {
  id: string;
  title: string;
  type: string;
  sharedBy: string;
  sharedDate: string;
  description: string;
  tags: string[];
  downloadUrl: string;
}

interface MentorData {
  activeMentors: Mentor[];
  sessions: Session[];
  messages: Message[];
  resources: Resource[];
}

const mentorData: MentorData = {
  activeMentors: [
    {
      id: "m1",
      name: "Dr. Sarah Chen",
      role: "Senior Admissions Advisor",
      expertise: ["Computer Science", "Engineering", "Research"],
      university: "MIT",
      availability: [
        {
          day: "Monday",
          slots: ["10:00 AM", "2:00 PM", "4:00 PM"],
        },
        {
          day: "Wednesday",
          slots: ["11:00 AM", "3:00 PM"],
        },
      ],
      rating: 4.9,
      totalSessions: 156,
    },
    {
      id: "m2",
      name: "Prof. James Wright",
      role: "Academic Counselor",
      expertise: ["Mathematics", "Physics", "Standardized Tests"],
      university: "Stanford",
      availability: [
        {
          day: "Tuesday",
          slots: ["9:00 AM", "1:00 PM"],
        },
        {
          day: "Thursday",
          slots: ["2:00 PM", "4:00 PM", "6:00 PM"],
        },
      ],
      rating: 4.8,
      totalSessions: 203,
    },
  ],
  sessions: [
    {
      id: "s1",
      mentorId: "m1",
      mentorName: "Dr. Sarah Chen",
      date: "2024-12-28",
      duration: "60 min",
      topic: "Application Strategy Review",
      notes: "Discussed essay topics and timeline for submissions",
      rating: 5,
      status: "completed",
    },
    {
      id: "s2",
      mentorId: "m2",
      mentorName: "Prof. James Wright",
      date: "2024-12-30",
      duration: "45 min",
      topic: "Math Preparation Strategy",
      notes: "Pending",
      rating: 0,
      status: "upcoming",
    },
  ],
  messages: [
    {
      id: "msg1",
      mentorId: "m1",
      mentorName: "Dr. Sarah Chen",
      content:
        "I've reviewed your essay draft. Let's discuss the improvements in our next session.",
      timestamp: "2024-12-28T14:30:00",
      read: false,
      attachments: [
        {
          name: "Essay_Feedback.pdf",
          type: "PDF",
          size: "2.4 MB",
        },
      ],
    },
    {
      id: "msg2",
      mentorId: "m2",
      mentorName: "Prof. James Wright",
      content: "Here are some practice problems for our upcoming session.",
      timestamp: "2024-12-28T16:45:00",
      read: true,
      attachments: [
        {
          name: "Practice_Set_1.pdf",
          type: "PDF",
          size: "1.8 MB",
        },
      ],
    },
  ],
  resources: [
    {
      id: "r1",
      title: "Application Essay Guidelines",
      type: "PDF",
      sharedBy: "Dr. Sarah Chen",
      sharedDate: "2024-12-27",
      description:
        "Comprehensive guide for writing compelling college application essays",
      tags: ["Essays", "Writing", "Applications"],
      downloadUrl: "/resources/essay-guidelines.pdf",
    },
    {
      id: "r2",
      title: "Math Preparation Workbook",
      type: "PDF",
      sharedBy: "Prof. James Wright",
      sharedDate: "2024-12-28",
      description: "Advanced mathematics practice problems with solutions",
      tags: ["Mathematics", "Practice", "SAT"],
      downloadUrl: "/resources/math-workbook.pdf",
    },
  ],
};

const MentorConnectionHub: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [expandedSection, setExpandedSection] = useState<string>("mentors");
  const [selectedMentor, setSelectedMentor] = useState(
    mentorData.activeMentors[0],
  );

  const sections = [
    {
      id: "mentors",
      title: "Active Mentors",
      icon: <BsPerson />,
      color: "purple",
    },
    {
      id: "sessions",
      title: "Session History",
      icon: <BsClock />,
      color: "blue",
    },
    {
      id: "messages",
      title: "Communication Center",
      icon: <BsChat />,
      color: "purple",
    },
    {
      id: "resources",
      title: "Resource Exchange",
      icon: <BsBook />,
      color: "blue",
    },
  ];

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <motion.div className="grid gap-4" layout>
        {sections.map((section) => (
          <motion.div
            key={section.id}
            layout="position"
            className={`
              rounded-2xl border border-white/5 bg-white/[0.01]
              ${expandedSection === section.id ? "p-6" : "p-4"}
              cursor-pointer hover:bg-white/[0.02] transition-colors
            `}
            onClick={() => setExpandedSection(section.id)}
            whileHover={{ scale: 1.005 }}
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
                          delay: 0.2,
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
                  <motion.div
                    variants={{
                      collapsed: { opacity: 0 },
                      expanded: { opacity: 1 },
                      exiting: { opacity: 0 },
                    }}
                  >
                    {section.id === "mentors" && (
                      <div className="space-y-4">
                        {mentorData.activeMentors.map((mentor) => (
                          <motion.div
                            key={mentor.id}
                            className={`p-4 rounded-xl border transition-colors ${selectedMentor.id === mentor.id
                              ? "bg-purple-500/20 border-purple-500/50"
                              : "bg-white/5 border-white/10"
                              }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMentor(mentor);
                            }}
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="text-sm font-medium">
                                  {mentor.name}
                                </h3>
                                <p className="text-xs text-white/60">
                                  {mentor.role} • {mentor.university}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-yellow-400">★</span>
                                <span className="text-sm">{mentor.rating}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-3">
                              {mentor.expertise.map((skill) => (
                                <span
                                  key={skill}
                                  className="text-xs px-2 py-1 rounded-lg bg-white/5 text-white/60"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <div className="text-xs text-white/60">
                              <p>Upcoming availability:</p>
                              <div className="mt-2 space-y-1">
                                {mentor.availability.map((day) => (
                                  <div key={day.day} className="flex gap-2">
                                    <span className="w-24">{day.day}:</span>
                                    <span>{day.slots.join(", ")}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {section.id === "sessions" && (
                      <div className="space-y-4">
                        {mentorData.sessions.map((session) => (
                          <motion.div
                            key={session.id}
                            className="p-4 rounded-xl bg-white/5 border border-white/10"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-sm font-medium">
                                  {session.topic}
                                </h3>
                                <p className="text-xs text-white/60">
                                  {session.mentorName} • {session.duration}
                                </p>
                              </div>
                              <span
                                className={`text-xs px-2 py-1 rounded-lg ${session.status === "completed"
                                  ? "bg-green-500/20 text-green-400 border border-green-500/50"
                                  : session.status === "upcoming"
                                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                                    : "bg-red-500/20 text-red-400 border border-red-500/50"
                                  }`}
                              >
                                {session.status}
                              </span>
                            </div>

                            {session.status === "completed" && (
                              <div className="mt-2 text-xs text-white/70">
                                <p className="mb-1">Notes:</p>
                                <p>{session.notes}</p>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {section.id === "messages" && (
                      <div className="space-y-4">
                        {mentorData.messages.map((message) => (
                          <motion.div
                            key={message.id}
                            className="p-4 rounded-xl bg-white/5 border border-white/10"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-sm font-medium">
                                  {message.mentorName}
                                </h3>
                                <p className="text-xs text-white/60">
                                  {new Date(message.timestamp).toLocaleString()}
                                </p>
                              </div>
                              {!message.read && (
                                <span className="text-xs px-2 py-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/50">
                                  New
                                </span>
                              )}
                            </div>

                            <p className="text-sm text-white/80 mb-3">
                              {message.content}
                            </p>

                            {message.attachments &&
                              message.attachments.length > 0 && (
                                <div className="space-y-2">
                                  {message.attachments.map(
                                    (attachment, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10"
                                      >
                                        <div className="flex items-center gap-2">
                                          <BsDownload className="text-white/60" />
                                          <span className="text-sm">
                                            {attachment.name}
                                          </span>
                                        </div>
                                        <span className="text-xs text-white/60">
                                          {attachment.size}
                                        </span>
                                      </div>
                                    ),
                                  )}
                                </div>
                              )}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {section.id === "resources" && (
                      <div className="space-y-4">
                        {mentorData.resources.map((resource) => (
                          <motion.div
                            key={resource.id}
                            className="p-4 rounded-xl bg-white/5 border border-white/10"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-sm font-medium">
                                  {resource.title}
                                </h3>
                                <p className="text-xs text-white/60">
                                  Shared by {resource.sharedBy} •{" "}
                                  {resource.sharedDate}
                                </p>
                              </div>
                              <span className="text-xs px-2 py-1 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/50">
                                {resource.type}
                              </span>
                            </div>

                            <p className="text-sm text-white/70 mb-3">
                              {resource.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {resource.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2 py-1 rounded-lg bg-white/5 text-white/60"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MentorConnectionHub;
