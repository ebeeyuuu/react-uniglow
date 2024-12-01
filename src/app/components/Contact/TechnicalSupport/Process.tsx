"use client";
import React, { useState } from "react";
import { BsSearch, BsHeadset, BsCheckCircle, BsArrowRight, BsClock, BsShieldCheck } from "react-icons/bs";

const steps = [
  {
    icon: BsSearch,
    title: "Identify Issue",
    description: "Describe your problem or search our knowledge base",
    details: [
      { icon: BsArrowRight, text: "Advanced search algorithm" },
      { icon: BsClock, text: "Quick matching with existing solutions" },
      { icon: BsShieldCheck, text: "Secure submission of new tickets" },
    ],
  },
  {
    icon: BsHeadset,
    title: "Connect with Expert",
    description: "Get matched with a specialist for your specific issue",
    details: [
      { icon: BsArrowRight, text: "Intelligent expert routing system" },
      { icon: BsClock, text: "Minimized wait times" },
      { icon: BsShieldCheck, text: "Verified expert credentials" },
    ],
  },
  {
    icon: BsCheckCircle,
    title: "Resolve and Verify",
    description: "Receive guidance and confirm the solution works",
    details: [
      { icon: BsArrowRight, text: "Step-by-step resolution process" },
      { icon: BsClock, text: "Efficient problem-solving" },
      { icon: BsShieldCheck, text: "Quality assurance checks" },
    ],
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Support Process
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A streamlined approach to resolve your technical issues quickly and efficiently
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl smooth-animation" />
              <div className="relative p-6 bg-white/[0.02] rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:transform group-hover:scale-105">
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
                <div 
                  className={`mt-4 text-sm text-white/80 bg-purple-500/10 p-4 rounded-lg transition-all duration-300 ease-in-out overflow-hidden ${
                    activeStep === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {step.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex} 
                      className={`flex text-xs mb-2 lg:text-base transition-all duration-300 ${
                        activeStep === index ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${detailIndex * 100}ms` }}
                    >
                      <detail.icon className="h-3 w-4 text-purple-400 mr-2" />
                      <span className="text-white/80">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;


