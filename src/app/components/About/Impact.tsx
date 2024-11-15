"use client";

import { BsGlobe, BsGraphUp, BsPeople } from "react-icons/bs";

const stats = [
  {
    icon: BsPeople,
    value: "50,000+",
    label: "Students Helped",
    description: "Successfully placed in their dream universities",
  },
  {
    icon: BsGlobe,
    value: "45+",
    label: "Countries",
    description: "Global presence and cultural diversity",
  },
  {
    icon: BsGraphUp,
    value: "95%",
    label: "Success Rate",
    description: "Students accepted to their top choices",
  },
];

const Impact = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-xs lg:text-base text-white/60 max-w-2xl mx-auto">
            Making a difference in education, one student at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl smooth-animation" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border border-white/5 backdrop-blur-sm text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-500/10">
                  <stat.icon className="h-3 lg:h-6 w-3 lg:w-6 text-purple-400" />
                </div>
                <div className="text-2xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-white/60 text-xs lg:text-base">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
