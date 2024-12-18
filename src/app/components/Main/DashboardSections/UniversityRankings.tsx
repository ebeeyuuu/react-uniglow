"use client";

const rankings = [
  {
    university: "Harvard",
    rank: 1,
    change: "up",
    score: 100,
  },
  {
    university: "Stanford",
    rank: 2,
    change: "same",
    score: 98,
  },
  {
    university: "MIT",
    rank: 3,
    change: "down",
    score: 97,
  },
];

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "text-yellow-400";
    case 2:
      return "text-gray-400";
    case 3:
      return "text-orange-400";
    default:
      return "text-white";
  }
};

const UniversityRankings: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex flex-col justify-center items-center"
    >
      <div className="flex w-full items-start justify-start">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Rankings
        </h2>
      </div>

      <div className="space-y-1.5 w-full items-start flex flex-col">
        {rankings.map((uni, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`text-base font-bold ${getRankColor(uni.rank)}`}>
              #{uni.rank}
            </div>
            <div className="font-normal">{uni.university}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityRankings;
