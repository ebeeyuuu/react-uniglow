import React from "react";
import { BsHeart, BsPeople, BsGraphUp } from "react-icons/bs";

const valuesStats = [
  {
    icon: BsHeart,
    value: "Inclusivity",
    label: "Supporting Diversity",
    description:
      "Creating a welcoming environment for students of all backgrounds.",
  },
  {
    icon: BsPeople,
    value: "Community",
    label: "Collaborative Learning",
    description: "Fostering a community where students can grow together.",
  },
  {
    icon: BsGraphUp,
    value: "Growth",
    label: "Continuous Improvement",
    description: "Encouraging lifelong learning and adaptability.",
  },
];

const Values = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="text-xs lg:text-base text-white/60 max-w-lg mx-auto text-center">
            At UniGlow, our values define who we are and what we strive to
            achieve. By prioritizing inclusivity, fostering a sense of
            community, and promoting continuous growth, we aim to create an
            environment where every student feels empowered to thrive. These
            principles guide our efforts to support students on their
            educational and personal journeys, ensuring they have the tools and
            opportunities to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {valuesStats.map((value, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl smooth-animation" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border-2 border-white/15 backdrop-blur-sm h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-100">
                  <value.icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-2">
                  {value.value}
                </h3>
                <div className="text-xs lg:text-base text-white/80 italic mb-2">
                  {value.label}
                </div>
                <p className="text-xs lg:text-base text-white/60">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
