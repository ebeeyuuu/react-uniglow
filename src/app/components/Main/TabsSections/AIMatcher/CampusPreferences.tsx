"use client";

const CampusPreferences: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const matches = [
    {
      type: "Environment",
      match: "Urban Campus",
      alignment: 95,
    },
    {
      type: "Size",
      match: "Large Research",
      alignment: 88,
    },
  ];

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex flex-col justify-between items-start">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Campus Match
        </h2>
        <p className="text-xs text-white/60">Environment preferences</p>
      </div>

      <div className="space-y-2">
        {matches.map((item, i) => (
          <div key={i} className="bg-white/5 p-3 rounded-lg">
            <div className="flex flex-row flex-wrap justify-between items-center">
              <div className="flex items-center gap-2">
                <div>
                  <div className="text-sm text-white/90">{item.type}</div>
                  <div className="text-xs text-white/60 mt-1">{item.match}</div>
                </div>
              </div>
              <span className="text-xs px-2 py-1 rounded-lg bg-green-500/20 text-green-400">
                {item.alignment}% Match
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusPreferences;
