"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaCode, FaPaintBrush, FaBullhorn, FaHandsHelping } from "react-icons/fa";

const roles = {
  Engineering: {
    description: "Join our engineering team to build cutting-edge solutions.",
    items: [
      {
        title: "Frontend Engineer",
        icon: FaCode,
        description: "Craft sleek and responsive interfaces that delight users.",
        features: ["React, Next.js expertise", "Responsive design", "Collaboration with UX/UI team"],
        price: "Apply Now",
      },
      {
        title: "Backend Engineer",
        icon: FaCode,
        description: "Build scalable APIs and manage databases with efficiency.",
        features: ["Node.js, Django", "API design", "Database optimization"],
        price: "Apply Now",
      },
      {
        title: "DevOps Engineer",
        icon: FaCode,
        description: "Ensure smooth CI/CD pipelines and monitor system performance.",
        features: ["Cloud expertise", "Kubernetes, Docker", "Infrastructure automation"],
        price: "Apply Now",
      },
      {
        title: "Mobile App Developer",
        icon: FaCode,
        description: "Develop mobile applications for iOS and Android platforms.",
        features: ["Flutter, Swift, Kotlin", "Cross-platform development", "Performance optimization"],
        price: "Apply Now",
      },
    ],
  },
  Product: {
    description: "Shape the direction of our products and user experiences.",
    items: [
      {
        title: "Product Manager",
        icon: FaPaintBrush,
        description: "Drive product development and strategy to meet user needs.",
        features: ["Market research", "Roadmap planning", "Cross-functional leadership"],
        price: "Apply Now",
      },
      {
        title: "UX Designer",
        icon: FaPaintBrush,
        description: "Design intuitive experiences that resonate with users.",
        features: ["Wireframing, prototyping", "User research", "Design systems"],
        price: "Apply Now",
      },
      {
        title: "UI Designer",
        icon: FaPaintBrush,
        description: "Create visually stunning user interfaces with creativity.",
        features: ["Visual design", "Interaction design", "Accessibility focus"],
        price: "Apply Now",
      },
      {
        title: "Data Analyst",
        icon: FaPaintBrush,
        description: "Analyze data and extract insights to guide decisions.",
        features: ["Data visualization", "SQL, Python", "A/B testing"],
        price: "Apply Now",
      },
    ],
  },
  Marketing: {
    description: "Join our marketing team to amplify our brand’s reach.",
    items: [
      {
        title: "Social Media Manager",
        icon: FaBullhorn,
        description: "Lead our online presence and engage with our audience.",
        features: ["Content creation", "Platform strategy", "Community building"],
        price: "Apply Now",
      },
      {
        title: "SEO Specialist",
        icon: FaBullhorn,
        description: "Optimize content for search engines and drive traffic.",
        features: ["Keyword research", "Analytics reporting", "SEO tools expertise"],
        price: "Apply Now",
      },
      {
        title: "Content Writer",
        icon: FaBullhorn,
        description: "Create compelling content that resonates with our users.",
        features: ["Blog posts, articles", "Marketing copywriting", "Brand tone alignment"],
        price: "Apply Now",
      },
      {
        title: "Performance Marketer",
        icon: FaBullhorn,
        description: "Run and optimize ad campaigns to maximize ROI.",
        features: ["Campaign management", "PPC, social ads", "Conversion optimization"],
        price: "Apply Now",
      },
    ],
  },
  Support: {
    description: "Support our users and help them succeed with our products.",
    items: [
      {
        title: "Customer Support Specialist",
        icon: FaHandsHelping,
        description: "Assist users with queries and ensure satisfaction.",
        features: ["Helpdesk tools", "Conflict resolution", "Feedback collection"],
        price: "Apply Now",
      },
      {
        title: "Technical Support Engineer",
        icon: FaHandsHelping,
        description: "Solve technical issues and guide users through solutions.",
        features: ["Troubleshooting", "System knowledge", "Team collaboration"],
        price: "Apply Now",
      },
      {
        title: "Onboarding Specialist",
        icon: FaHandsHelping,
        description: "Guide new users and ensure a smooth onboarding process.",
        features: ["Process documentation", "User training", "Relationship building"],
        price: "Apply Now",
      },
      {
        title: "Support Team Lead",
        icon: FaHandsHelping,
        description: "Manage support operations and improve workflows.",
        features: ["Team management", "Escalation handling", "Process optimization"],
        price: "Apply Now",
      },
    ],
  },
};

const Hiring = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold bg-linear-to-r from-white mb-4 via-white to-purple-200 bg-clip-text text-transparent">
            Join Our Team
          </h2>
        </div>

        {Object.entries(roles).map(([section, { description, items }]) => (
          <div key={section} className="mb-16">
            <h3 className="text-lg lg:text-2xl text-center flex justify-center items-center font-semibold bg-linear-to-r from-white mb-4 via-purple-200 to-purple-300 bg-clip-text text-transparent">{section}</h3>
            <p className="text-xs lg:text-base text-center flex justify-center items-center text-white/60 mb-6">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((role, index) => (
                <div
                  key={index}
                  className="group relative bg-white/[0.02] border-white/10 backdrop-blur-xs hover:border-purple-500/20 transition-all duration-300 p-10 rounded-xl"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl smooth-animation" />
                  <div className="relative p-6">
                    <role.icon className="h-8 w-8 text-purple-400 mb-4" />
                    <h4 className="text-lg lg:text-2xl font-bold bg-linear-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent mb-2">
                      {role.title}
                    </h4>
                    <p className="text-white/60 mb-4 text-xs lg:text-base">
                      {role.description}
                    </p>
                    <div className="text-sm lg:text-lg font-bold mb-4 bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      {role.price}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {role.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-white/60 flex items-center"
                        >
                          <BsArrowRight className="h-4 w-4 text-xs lg:text-base text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="text-xs lg:text-base w-full bg-white/5 scale-100 hover:scale-110 smooth-animation border border-white/10 px-5 py-3 rounded-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hiring;

