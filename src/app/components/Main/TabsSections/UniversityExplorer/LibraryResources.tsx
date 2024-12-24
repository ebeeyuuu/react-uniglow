"use client";

interface LibraryStats {
  libraries: number;
  digitalAccess: number;
  studySpaces: number;
  features: string[];
}

const libraryData: LibraryStats = {
  libraries: 15,
  digitalAccess: 500000,
  studySpaces: 2500,
  features: ["24/7 Main Library", "Group Rooms", "Tech Labs"],
};

const LibraryResources: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="w-full h-full rounded-2xl p-4 border border-white/5 bg-white/[0.01] overflow-hidden"
    >
      <div className="flex flex-col items-start justify-start mb-2 gap-2">
        <h2 className="text-xs md:text-sm lg:text-base font-semibold">Library & Resources</h2>
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex flex-wrap flex-row items-center justify-between">
            <div className="text-xs text-white/60">Libraries</div>
            <div className="text-sm font-medium">{libraryData.libraries}</div>
          </div>
          <div className="flex flex-wrap flex-row items-center justify-between">
            <div className="text-xs text-white/60">Study Spaces</div>
            <div className="text-sm font-medium">{libraryData.studySpaces}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {libraryData.features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryResources;
