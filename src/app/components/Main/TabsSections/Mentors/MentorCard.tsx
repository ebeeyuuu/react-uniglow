"use client";

import Image from "next/image";

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  status: "online" | "offline" | "in-session";
  lastActive?: string;
  avatarUrl: string;
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
  onClick: () => void;
}> = ({ mentor, isSelected, onClick }) => {
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
    <button
      onClick={onClick}
      className={`w-full p-3 rounded-lg text-left transition-colors ${isSelected
          ? "bg-purple-600/20 border border-purple-500/50"
          : "hover:bg-white/5"
        }`}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            src={mentor.avatarUrl}
            alt={mentor.name}
            fill
            className="w-10 h-10 rounded-full object-cover"
          />
          <div
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-zinc-900 ${getStatusColor(
              mentor.status,
            )}`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate">{mentor.name}</h3>
            {mentor.lastActive && mentor.status === "offline" && (
              <span className="text-xs text-white/40">
                {formatLastActive(mentor.lastActive)}
              </span>
            )}
          </div>
          <p className="text-sm text-white/60 truncate">{mentor.role}</p>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-1">
        {mentor.expertise.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/60"
          >
            {skill}
          </span>
        ))}
      </div>
    </button>
  );
};

export default MentorCard;
