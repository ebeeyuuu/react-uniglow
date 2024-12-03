import React from "react";
import { BsArrowRight, BsGear } from "react-icons/bs";
import { FaNetworkWired, FaCode } from "react-icons/fa";

const categories = [
  {
    icon: BsGear,
    title: "System Configuration",
    description: "Setup and configuration support for all systems",
    features: ["Installation guide", "System setup", "Configuration help"],
  },
  {
    icon: FaNetworkWired,
    title: "Network Issues",
    description: "Resolve connectivity and network-related problems",
    features: [
      "Connection issues",
      "Network setup",
      "Performance optimization",
    ],
  },
  {
    icon: FaCode,
    title: "API Support",
    description: "Technical assistance with API integration and usage",
    features: ["API documentation", "Integration help", "Troubleshooting"],
  },
];

const Categories = () => {
  return (
    <section className="py-24 relative" style={{ background: "#020202" }}>
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Support Categories <br /> For Every Need
          </h2>
          <p className="text-xs lg:text-base text-white/60 max-w-2xl mx-auto text-center">
            Comprehensive technical support across all major areas
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] border-white/10 backdrop-blur-xs hover:border-purple-500/20 transition-all duration-300 p-10 rounded-xl"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl smooth-animation" />
              <div className="relative p-6">
                <category.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-base lg:text-xl font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-white/60 mb-4 text-xs lg:text-sm">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, i) => (
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
                  Get Support
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
