import React, { useEffect } from "react";
import { BsGlobe, BsPeople } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: BsPeople,
    title: "Students Forums",
    description: "Engage with a supportive network of students globally",
  },
  {
    icon: BsGlobe,
    title: "Collaborative Projects",
    description: "Work on real-world challenges with peers from diverse backgrounds.",
  },
  {
    icon: FaHandshake,
    title: "Cultural Exchange",
    description: "Experience the perspectives of students from around the world.",
  },
]

const GlobalCommunity = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  })

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
          >
            Building a Global <br />
            Community of Learners
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-xs lg:text-base text-white/60 max-w-2xl mx-auto text-center">
            Connecting students worldwide through collaboration, communicatoin, and cultural exchange.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${400 + 50 * index}`}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl smooth-animation" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-500/5">
                  <feature.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-xs lg:text-base text-white/60">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default GlobalCommunity;
