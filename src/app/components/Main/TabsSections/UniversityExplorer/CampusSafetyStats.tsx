"use client";

interface SafetyStats {
  safetyScore: number;
  responseTime: number;
  features: string[];
  incidentRate: number;
}

const safetyData: SafetyStats = {
  safetyScore: 92,
  responseTime: 3,
  features: ["24/7 patrol", "Emergency Phones", "Safe Ride"],
  incidentRate: 0.8,
};

const CampusSafetyStats: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col"
    >
      <div className="flex flex-col items-start justify-start gap-2 mb-0">
        <h2 className="text-xs md:text-sm lg:text-base font-semibold">
          Campus Safety
        </h2>
      </div>
      <div className="space-y-3">
        <div className="flex flex-col">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <span className="text-xs text-green-400">
              {safetyData.safetyScore}
            </span>
          </div>
          <span className="text-xs mt-2 text-white/60">
            {safetyData.responseTime} min response
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {safetyData.features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-1 bg-white/5 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusSafetyStats;
