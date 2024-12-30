"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  status: "online" | "offline" | "in-session";
  lastActive?: string;
}

const formatLastActive = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  if (diff < 60000) return "Just now";
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return date.toLocaleDateString();
};

const MentorCard: React.FC<{
  mentor: Mentor;
  isSelected: boolean;
  isExpanded: boolean;
  onClick: () => void;
  onHover: () => void;
}> = ({ mentor, isSelected, isExpanded, onClick, onHover }) => {
  const getStatusColor = (status: Mentor["status"]) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "in-session":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={onHover}
      layout
      className={`w-full rounded-lg text-left transition-colors ${
        isSelected
          ? "bg-purple-600/10 border border-purple-500/20"
          : "bg-white/[0.01] border border-white/[0.1] hover:bg-white/5"
      }`}
    >
      <motion.div
        className={`${isExpanded ? "px-7 py-5" : "px-7 py-1.5"} smooth-animation`}
        layout
      >
        <motion.div className="flex items-center gap-3" layout>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-white/90 truncate">
                {mentor.name}
              </h3>
              <div className="relative">
                <div
                  className={`w-3 h-3 rounded-full border-2 border-zinc-900 ${getStatusColor(
                    mentor.status,
                  )}`}
                />
              </div>
              {mentor.lastActive &&
                mentor.status === "offline" &&
                isExpanded && (
                  <motion.span
                    className="text-xs text-white/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {formatLastActive(mentor.lastActive)}
                  </motion.span>
                )}
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="text-sm text-white/60 truncate"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mentor.role}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-2 flex flex-wrap gap-1"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mentor.expertise.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/60"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default MentorCard;
