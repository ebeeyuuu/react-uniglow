"use client";
import React from "react";
import { BsClipboard, BsBullseye, BsCheckCircle } from "react-icons/bs";

const steps = [
  {
    icon: BsClipboard,
    title: "Assessment",
    description:
      "Complete an in-depth assessment and strategy session to identify your goals and skills.",
  },
  {
    icon: BsBullseye,
    title: "Action",
    description:
      "Develop a personalized roadmap with specific steps to achieve your objectives.",
  },
  {
    icon: BsCheckCircle,
    title: "Implementation",
    description:
      "Put your plan into action with ongoing support and guidance from your counselor.",
  },
];

const Process = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A structured approach to help you achieve your career goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative p-6 bg-white/[0.02] rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <step.icon className="h-8 w-8 text-purple-400" />
                  <div className="ml-4 text-sm font-medium text-white/40">
                    Step {index + 1}
                  </div>
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-xs lg:text-base text-white/60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
