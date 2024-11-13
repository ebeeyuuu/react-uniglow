"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/app/components/LoadingButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsRobot, BsChat, BsCalendar, BsFileEarmark } from "react-icons/bs";

const features = [
  {
    icon: BsRobot,
    title: "AI University Matcher",
    description: "Our advanced AI analyzes your interests and goals to find your perfect university matches",
    benefits: [
      "Personalized recommendations",
      "Real-time acceptance chances",
      "Program compatibility scoring",
    ]
  },
  {
    icon: BsChat,
    title: "24/7 Support Assistant",
    description: "Get instant answers to your questions with our AI-powered chat assistant and expert counselors",
    benefits: [
      "Instant response time",
      "Multi-language support",
      "Expert escalation",
    ]
  },
  {
    icon: BsCalendar,
    title: "Smart Application Tracker",
    description: "Stay on top of your applications with our intelligent tracking and reminder system",
    benefits: [
      "Deadline management",
      "Document checklist",
      "Timeline visualization"
    ]
  },
  {
    icon: BsFileEarmark,
    title: "One-Click Applications",
    description: "Apply to multiple universities with a single application form and automated document submission",
    benefits: [
      "Time-saving automation",
      "Error prevention",
      "Progress tracking",
    ]
  }
];

const Features: React.FC = () => {
  const router = useRouter();

  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    router.push("/pages/signup");
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xs lg:text-base text-white/60 max-w-lg mx-auto">
            Cutting-edge technology meets expert guidance to transform your university application journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl smooth-animation" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border-2 border-white/5 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-500/10">
                    <feature.icon className="h-4 lg:h-6 w-4 lg:w-6 text-purple-400" />
                  </div>
                  <h3 className="text-base lg:text-xl font-semibold ml-4">{feature.title}</h3>
                </div>
                <p className="text-xs lg:text-base text-white/60 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-xs lg:text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-purple-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
