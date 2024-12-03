import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaLightbulb } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const goals = [
  {
    label: "Sustainability Projects",
    progress: 70,
    icon: FaLeaf,
    details: [
      { text: "Launched green campus initiatives", icon: "🌱" },
      { text: "Reduced energy consumption by 30%", icon: "⚡" },
      { text: "Ongoing solar panel installations", icon: "🔆" },
    ],
  },
  {
    label: "Community Engagement",
    progress: 50,
    icon: FaUsers,
    details: [
      { text: "Hosted 20+ local workshops", icon: "🎤" },
      { text: "Engaged with over 5,000 students", icon: "👩‍🎓" },
      { text: "Supported regional educational events", icon: "🌍" },
    ],
  },
  {
    label: "Innovation Milestones",
    progress: 80,
    icon: FaLightbulb,
    details: [
      { text: "Developed AI-driven solutions", icon: "🤖" },
      { text: "Introduced AR/VR learning experiences", icon: "🕶️" },
      { text: "Published 15 research papers on EdTech", icon: "📚" },
    ],
  },
];

const CommitmentTracker = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-6xl text-center mx-auto px-4 py-20">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-2xl lg:text-4xl font-bold mb-4 bg-linear-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
        >
          Our Commitments
        </h2>
      </div>
      <div className="space-y-12 max-w-3xl mx-auto">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="group relative bg-white/[0.02] border-2 border-white/10 backdrop-blur-xs hover:border-purple-500/20 transition-all duration-300 p-10 rounded-xl"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl smooth-animation" />
            <div className="flex items-center gap-4 mb-4">
              <goal.icon className="text-purple-400" />
              <div className="flex-1">
                <p className="text-gray-300 font-medium text-xl">
                  {goal.label}
                </p>
              </div>
            </div>

            <div className="relative w-full bg-gray-800 rounded-lg h-4 mb-4">
              <motion.div
                className="h-4 rounded-lg bg-purple-600"
                initial={{ width: "0%" }}
                animate={{ width: `${goal.progress}%` }}
                transition={{ duration: 1, delay: index * 0.3 }}
              ></motion.div>
              <motion.span
                className="absolute -top-6 left-[calc(var(--progress)*1%)] text-purple-400 text-sm font-semibold"
                style={{ "--progress": goal.progress } as React.CSSProperties}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                {goal.progress}%
              </motion.span>
            </div>

            <ul className="space-y-2 text-gray-400 relative z-10">
              {goal.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-2xl">{detail.icon}</span>
                  <p className="text-gray-400">{detail.text}</p>
                </motion.div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommitmentTracker;
