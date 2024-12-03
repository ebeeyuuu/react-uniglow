"use client";

import Image from "next/image";
import Accordion from "../../UI/Accordion";
import {
  BsShieldCheck,
  BsWallet2,
  BsGlobe,
  BsBriefcase,
  BsHeartPulse,
} from "react-icons/bs";

const concerns = [
  {
    icon: BsShieldCheck,
    title: "Student Safety",
    description:
      "Learn about campus security measures, emergency protocols, and safety resources available to students.",
    details: [
      "24/7 campus security",
      "Emergency response systems",
      "Health services access",
      "Safe transportation options",
    ],
  },
  {
    icon: BsWallet2,
    title: "Cost Management",
    description:
      "Understand tuition, living expenses, and financial aid opportunities to plan effectively.",
    details: [
      "Scholarship opportunities",
      "Payment plans",
      "Living expense breakdown",
      "Financial aid guidance",
    ],
  },
  {
    icon: BsGlobe,
    title: "Distance from Home",
    description:
      "Tips for supporting your child while they're away and maintaining strong communication.",
    details: [
      "Regular communication plans",
      "Travel arrangements",
      "Care packages ideas",
      "Holiday planning",
    ],
  },
  {
    icon: BsBriefcase,
    title: "Career Prospects",
    description:
      "Explore career outcomes, internship opportunities, and employment rates for graduates.",
    details: [
      "Industry connections",
      "Career services",
      "Alumni network",
      "Internship programs",
    ],
  },
  {
    icon: BsHeartPulse,
    title: "Student Support",
    description:
      "Discover academic, emotional, and social support services available on campus.",
    details: [
      "Counseling services",
      "Academic tutoring",
      "Wellness programs",
      "Peer support groups",
    ],
  },
];

const CommonConcerns = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Common Concerns Addressed
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Get answers to the most common questions parents have about
            university life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Accordion items={concerns} />

          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20" />
            <div className="relative aspect-3/4 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xs overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                alt="Parent and student"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonConcerns;
