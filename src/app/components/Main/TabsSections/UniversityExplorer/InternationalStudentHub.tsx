"use client";

interface InternationalStats {
  percentage: number;
  countries: number;
  languages: string[];
  visaSupport: number;
}

const internationalData: InternationalStats = {
  percentage: 24,
  countries: 120,
  languages: ["English", "Spanish", "Mandarin"],
  visaSupport: 95
};

const InternationalStudentHub: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="w-full h-full rounded-2xl p-4 border border-white/5 bg-white/[0.01] overflow-hidden"
    >
      <div className="flex flex-col items-start justify-start mb-2 gap-2">
        <h2 className="text-sm md:text-base font-semibold">Student Hub</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/60">Students</div>
          <div className="text-xs font-medium">{internationalData.percentage}%</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/60">Countries</div>
          <div className="text-xs font-medium">{internationalData.countries}</div>
        </div>
        <div className="flex flex-wrap gap-1">
          {internationalData.languages.map(lang => (
            <span key={lang} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
              {lang}
            </span>
          ))}
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: `${internationalData.visaSupport}%` }}
          />
        </div>
        <div className="text-xs text-white/60">
          {internationalData.visaSupport}% Visa Success Rate
        </div>
      </div>
    </div>
  );
};

export default InternationalStudentHub;
