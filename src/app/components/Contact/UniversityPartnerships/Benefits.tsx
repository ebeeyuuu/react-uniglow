import React from "react";
import { FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";

const BenefitCard = ({ benefit }) => (
  <div className="bg-purple-800/30 backdrop-blur-md rounded-lg p-6 cursor-pointer">
    <div className="flex items-center mb-4">
      {benefit.icon}
      <h3 className="text-lg font-medium text-white ml-4">{benefit.title}</h3>
    </div>
    <p className="text-gray-300">{benefit.description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <FaRocket className="text-3xl text-purple-400" />,
      title: "Fast & Reliable",
      description:
        "Experience quick and dependable service tailored for universities.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-400" />,
      title: "Secure & Safe",
      description:
        "Your data and students' information are protected with top-tier security.",
    },
    {
      icon: <FaUsers className="text-3xl text-purple-400" />,
      title: "Community Driven",
      description:
        "Join a network of universities committed to improving student recruitment.",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-[#020202] to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent text-center">
          Partnership Benefits
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-lg mx-auto">
          Discover the advantages of partnering with Uniglow for your
          university&apos;s recruitment needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
