import React from "react";
import { BsArrowRight, BsGraphUp, BsPeople } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

const services = [
  {
    icon: BsGraphUp,
    title: "Professional Growth",
    description: "Accelerate your career growth and maximize your potential",
    price: "$149",
    features: ["Skill assessment", "Growth roadmap", "Leadership development"],
  },
  {
    icon: BsPeople,
    title: "Interview Prep",
    description:
      "Comprehensive preparation for job interviews and negotiations",
    price: "$129",
    features: ["Mock interviews", "Salary negotiation", "Question preparation"],
  },
  {
    icon: FaGraduationCap,
    title: "Student Guidance",
    description:
      "Career planning and guidance for students and recent graduates",
    price: "$99",
    features: ["Major selection", "Resume building", "Network development"],
  },
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Tailored Services <br /> for Your Success
          </h2>
          <p className="text-xs lg:text-base text-white/60 max-w-2xl mx-auto text-center">
            Choose from our range of specialised career counseling services
            designed to meet your specific needs
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] border-white/10 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300 p-10 rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative p-6">
                <service.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-base lg:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/60 mb-4 text-xs lg:text-sm">
                  {service.description}
                </p>
                <div className="text-lg lg:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {service.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
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
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
