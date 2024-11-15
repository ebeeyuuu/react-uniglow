"use client";

import { useEffect } from "react";
import { BsLightbulb, BsRocket, BsGlobe } from "react-icons/bs";
import { FaUniversity, FaMapMarkedAlt, FaHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const milestones = [
  {
    year: "2020",
    icon: BsLightbulb,
    title: "The Beginning",
    description:
      "Started with a vision to make university admissions more accessible and efficient through technology.",
    extraInfo: {
      icon: FaUniversity,
      title: "Mission Start",
      points: ["Initial research", "Team formation", "Proof of concept"],
    },
  },
  {
    year: "2021",
    icon: BsRocket,
    title: "Launch of AI Platform",
    description:
      "Introduced our revolutionary AI-powered matching system, transforming how students find their ideal universities.",
    extraInfo: {
      icon: FaMapMarkedAlt,
      title: "AI Platform Milestone",
      points: ["Prototype launch", "User feedback", "First successful match"],
    },
  },
  {
    year: "2022",
    icon: BsGlobe,
    title: "Global Expansion",
    description:
      "Expanded to 45+ countries, helping students worldwide access quality education opportunities.",
    extraInfo: {
      icon: FaHandshake,
      title: "Global Outreach",
      points: [
        "Partnered with 100+ universities",
        "Localized resources",
        "Global community building",
      ],
    },
  },
];

const Journey = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
          >
            Our Journey
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-xs lg:text-base text-white/60 max-w-lg mx-auto"
          >
            From inception to innovation, follow our path of transforming the
            education landscape.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-purple-500/20 to-transparent" />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${400 + 50 * index}`}
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div className="flex-1">
                  <div
                    className={`p-8 bg-white/[0.02] rounded-2xl border border-white/5 backdrop-blur-sm ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                  >
                    <milestone.icon className="inline-block h-5 lg:h-8 w-5 lg:w-8 text-purple-400 mb-4" />
                    <div className="text-xs lg:text-sm font-medium text-purple-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg lg:text-2xl font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-xs lg:text-base text-white/60">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-purple-400" />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay={`${400 + 75 * index}`}
                  className="flex-1 hidden md:flex items-center justify-center text-purple-400/80 text-sm font-medium"
                >
                  <div className="bg-white/[0.03] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                    <milestone.extraInfo.icon className="h-3 lg:h-6 w-3 lg:w-6 text-purple-400 mb-2" />
                    <h4 className="text-xs lg:text-base font-semibold mb-2">
                      {milestone.extraInfo.title}
                    </h4>
                    <ul className="text-xs lg:text-base list-disc list-inside space-y-1 text-white/60">
                      {milestone.extraInfo.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
