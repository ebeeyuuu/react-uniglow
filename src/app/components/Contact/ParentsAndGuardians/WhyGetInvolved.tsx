"use client";

import { BsCalculator, BsCalendarCheck, BsCompass, BsBuildingCheck } from "react-icons/bs";

const reasons = [
  {
    icon: BsCalculator,
    title: "Financial Planning Support",
    description: "Help navigate tuition costs, financial aid, and create a sustainable education budget.",
    stat: "83%",
    statText: "of students with parent involvement secure better financial aid packages"
  },
  {
    icon: BsCalendarCheck,
    title: "Understanding Timelines",
    description: "Stay on top of crucial application deadlines and requirements.",
    stat: "92%",
    statText: "application success rate with parent involvement"
  },
  {
    icon: BsCompass,
    title: "Decision Support",
    description: "Guide your child through the complex university selection process.",
    stat: "76%",
    statText: "of students feel more confident with parent guidance"
  },
  {
    icon: BsBuildingCheck,
    title: "Campus Visit Planning",
    description: "Organize and optimize university campus visits and tours.",
    stat: "89%",
    statText: "make better choices after campus visits"
  }
];

const WhyGetInvolved = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Why Get Involved?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Your involvement can significantly impact your child&apos;s university journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] rounded-3xl border border-white/5 backdrop-blur-sm p-8 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-2xl mr-4">
                    <reason.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                </div>
                <p className="text-white/60 mb-6">{reason.description}</p>
                <div className="flex items-center">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mr-3">
                    {reason.stat}
                  </span>
                  <span className="text-sm text-white/60">{reason.statText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyGetInvolved;
