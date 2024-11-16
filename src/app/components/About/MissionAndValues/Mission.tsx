import React from "react";
import { BsBullseye, BsCompass, BsStars } from "react-icons/bs";

const missionStats = [
  {
    icon: BsBullseye,
    value: "Guidance",
    label: "University Planning",
    description:
      "Offering insights and resources to help students find the right fit.",
  },
  {
    icon: BsCompass,
    value: "Support",
    label: "Student Assistance",
    description:
      "Helping students navigate the application process with confidence.",
  },
  {
    icon: BsStars,
    value: "Empowerment",
    label: "Career Development",
    description:
      "Providing tools to help students explore career paths and opportunities.",
  },
];

const Mission = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xs lg:text-base text-white/60 max-w-lg mx-auto text-center">
            Our values represent the principles that drive us to create a
            better, more inclusive environment for students. We are dedicated to
            supporting diversity, fostering collaboration, and encouraging
            continuous growth in both learning and life.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {missionStats.map((mission, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl smooth-animation" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border-2 border-white/15 backdrop-blur-sm h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-100">
                  <mission.icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-2">
                  {mission.value}
                </h3>
                <div className="text-xs lg:text-base text-white/80 italic mb-2">
                  {mission.label}
                </div>
                <p className="text-xs lg:text-base text-white/60">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
