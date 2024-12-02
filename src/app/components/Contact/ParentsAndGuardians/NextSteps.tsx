"use client";

import {
  BsPersonPlus,
  BsHeartFill,
  BsCalendarCheck,
  BsHeadset,
} from "react-icons/bs";

const steps = [
  {
    icon: BsPersonPlus,
    title: "Create Your Account",
    description:
      "Set up your parent account to access all our tools and resources",
    action: "Get Started",
  },
  {
    icon: BsHeartFill,
    title: "Support Your Child",
    description: "Access guides and resources to help with applications",
    action: "View Resources",
  },
  {
    icon: BsCalendarCheck,
    title: "Track Important Dates",
    description: "Stay on top of application deadlines and requirements",
    action: "View Calendar",
  },
  {
    icon: BsHeadset,
    title: "Get Support",
    description: "Connect with our support team for any questions",
    action: "Contact Us",
  },
];

const NextSteps = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Next Steps
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Begin your journey to support your child&apos;s university
            aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] rounded-3xl border border-white/5 backdrop-blur-sm p-8 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/60 mb-4">{step.description}</p>
                </div>

                <button className="bg-white/10 hover:bg-white/20 px-5 py-3 text-white rounded-full">
                  {step.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white text-black hover:bg-white/90 rounded-full px-5 py-3">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
