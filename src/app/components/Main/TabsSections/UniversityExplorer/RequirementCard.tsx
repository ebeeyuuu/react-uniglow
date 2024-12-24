import { Progress } from "@/app/components/UI/Progress";
import {
  BsCalendar,
  BsLink45Deg,
  BsCheckCircle,
  BsExclamationCircle,
} from "react-icons/bs";

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

const RequirementCard: React.FC<{
  requirement: University["requirements"][0];
}> = ({ requirement }) => {
  const { item, required, details } = requirement;
  const Icon = details.icon as React.ElementType;

  return (
    <div
      className="group relative bg-white/5 rounded-xl p-4 hover:bg-white/[0.08] transition-all duration-300
                    hover:outline hover:outline-purple-500/50 hover:outline-1
                    hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="relative flex flex-col items-start gap-3">
        <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
          <Icon size={20} />
        </div>
        <div className="flex flex-wrap">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-medium">{item}</h4>
            {!required && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                Optional
              </span>
            )}
          </div>

          <p className="text-xs text-white/60 mt-1">{details.description}</p>

          {details.status === "in-progress" && details.completedItems && (
            <div className="mt-2">
              <div className="flex items-center gap-2 text-xs">
                <Progress
                  value={
                    (details.completedItems.length /
                      (details.totalItems || 1)) *
                    100
                  }
                  className="h-1.5 bg-white/10 flex-1"
                  progressColor="bg-gradient-to-r from-purple-500 to-blue-500"
                />
                <span className="text-white/60">
                  {details.completedItems.length}/{details.totalItems}
                </span>
              </div>
            </div>
          )}

          {details.dueDate && (
            <div className="flex items-center gap-1 mt-2 text-xs text-white/60">
              <BsCalendar size={12} />
              <span>Due: {details.dueDate}</span>
            </div>
          )}

          {details.links && (
            <div className="mt-2 flex flex-wrap gap-2">
              {details.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <BsLink45Deg size={14} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="absolute top-2 right-2 text-lg">
          {details.status === "completed" && (
            <BsCheckCircle className="text-green-400" />
          )}
          {details.status === "not-started" && (
            <BsExclamationCircle className="text-white/40" />
          )}
        </div>
      </div>
    </div>
  );
};

export default RequirementCard;
