import React from "react";

const goals = [
  { label: "Sustainability Projects", progress: 70 },
  { label: "Community Engagement", progress: 50 },
  { label: "Innovation Milestones", progress: 80 },
];

const CommitmentTracker = () => (
  <section data-aos="fade-up">
    <h2 className="text-3xl font-bold text-center mb-8">
      Commitment to the Future
    </h2>
    <div className="space-y-6 max-w-xl mx-auto">
      {goals.map((goal, index) => (
        <div key={index} className="space-y-2">
          <p className="text-gray-300">{goal.label}</p>
          <div className="w-full bg-gray-800 rounded-lg h-4">
            <div
              className="h-4 rounded-lg bg-purple-600"
              style={{ width: `${goal.progress}%` }}
              data-aos="fade-right"
              data-aos-delay={`${index * 150}`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CommitmentTracker;
