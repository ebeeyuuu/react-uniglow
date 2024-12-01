"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsCalculator, BsCalendarCheck, BsCompass, BsGraphUp, BsGlobe } from "react-icons/bs";

const reasons = [
  {
    icon: BsCalculator,
    title: "Financial Planning Support",
    description: "Help navigate tuition costs, financial aid, and create a sustainable education budget.",
    stat: "83%",
    statText: "of students with parent involvement secure better financial aid packages",
  },
  {
    icon: BsCalendarCheck,
    title: "Understanding Timelines",
    description: "Stay on top of crucial application deadlines and requirements.",
    stat: "92%",
    statText: "application success rate with parent involvement",
  },
  {
    icon: BsCompass,
    title: "Decision Support",
    description: "Guide your child through the complex university selection process.",
    stat: "76%",
    statText: "of students feel more confident with parent guidance",
  },
  {
    icon: BsGraphUp,
    title: "Track Progress",
    description: "Keep tabs on your child's application and admission progress effectively.",
    stat: "85%",
    statText: "of parents report feeling more informed with tracking tools",
  },
  {
    icon: BsGlobe,
    title: "Explore Opportunities",
    description: "Discover international education options and scholarships for your child.",
    stat: "67%",
    statText: "of students benefit from exploring international options",
  },
];

const WhyGetInvolved = () => {
  const [selectedReason, setSelectedReason] = useState<number | null>(null);

  const handleReasonClick = (index: number) => {
    setSelectedReason(index);
  };

  const handleClose = () => {
    setSelectedReason(null);
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Why Get Involved?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Your involvement can significantly impact your child&apos;s university journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-1">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative w-36 h-40 bg-white/10 rounded-lg aspect-square hexagon cursor-pointer`}
              onClick={() => handleReasonClick(index)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-purple-400/50">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedReason !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
              onClick={handleClose}
            >
              <motion.div
                className="w-[600px] h-[600px] bg-white/5 backdrop-blur-2xl rounded-lg hexagon relative p-8"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white text-2xl"
                >
                  ×
                </button>

                <div className="flex flex-col items-center justify-center p-10 h-full text-center">
                  {selectedReason !== null && (
                    <>
                      {(() => {
                        const Icon = reasons[selectedReason].icon;
                        return <Icon className="text-purple-400 w-16 h-16 mb-6" />;
                      })()}
                      <h3 className="text-3xl font-semibold text-white mb-4">
                        {reasons[selectedReason].title}
                      </h3>
                      <p className="text-lg text-white/60 mb-6">
                        {reasons[selectedReason].description}
                      </p>
                      <div>
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                          {reasons[selectedReason].stat}
                        </span>
                        <span className="text-base text-white/60 block mt-2">
                          {reasons[selectedReason].statText}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default WhyGetInvolved;
