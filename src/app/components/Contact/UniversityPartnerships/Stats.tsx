import { FaBuilding, FaGlobe, FaTrophy, FaUsers } from "react-icons/fa";

const stats = [
  { icon: FaBuilding, value: "150+", label: "Partner Universities" },
  { icon: FaUsers, value: "50,000+", label: "Exchange Students" },
  { icon: FaGlobe, value: "45", label: "Countries" },
  { icon: FaTrophy, value: "200+", label: "Joint Programs" },
];

const Stats = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative p-6 text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-white/40" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
