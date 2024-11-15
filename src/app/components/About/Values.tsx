"use client";

import React from "react";
import { BsHeart, BsLightning, BsShield } from "react-icons/bs";

const values = [
  {
    icon: BsHeart,
    title: "Student First",
    description:
      "Every decision we make is guided by what's best for our students' success and well-being.",
  },
  {
    icon: BsLightning,
    title: "Innovation",
    description:
      "We constantly push boundaries to create better solutions through technology and creativity.",
  },
  {
    icon: BsShield,
    title: "Integrity",
    description:
      "We maintain the highest standards of honesty, transparency, and ethical conduct.",
  },
];

const Values = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="text-xs lg:text-base text-white/60 max-w-2xl mx-auto">
            THe principles that guide us in our mission to transform education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl smooth-animation" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border border-white/5 backdrop-blur-sm h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-500/10">
                  <value.icon className="h-3 lg:h-6 w-3 lg:w-6 text-purple-400" />
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-4">
                  {value.title}
                </h3>
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
