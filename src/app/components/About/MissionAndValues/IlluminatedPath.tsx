import React, { useState, useEffect } from "react";
import { BsLightbulb, BsRocket, BsGlobe } from "react-icons/bs";
import { FaUniversity, FaMapMarkedAlt, FaHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const milestones = [
  {
    year: "2020",
    icon: BsLightbulb,
    title: "The Spark of Inspiration",
    description:
      "Our journey began with a vision to illuminate pathways to education and innovation.",
    extraInfo: {
      icon: FaUniversity,
      title: "Our Roots",
      points: [
        "Established our core mission",
        "Built the initial team",
        "Defined our goals",
      ],
    },
  },
  {
    year: "2021",
    icon: BsRocket,
    title: "Reaching New Heights",
    description:
      "We launched our first initiatives, bringing transformative opportunities to life.",
    extraInfo: {
      icon: FaMapMarkedAlt,
      title: "First Milestones",
      points: [
        "Rolled out key programs",
        "Connected with early adopters",
        "Received critical feedback",
      ],
    },
  },
  {
    year: "2023",
    icon: BsGlobe,
    title: "Global Impact",
    description:
      "With a growing community, we expanded globally to make a difference everywhere.",
    extraInfo: {
      icon: FaHandshake,
      title: "A Global Community",
      points: [
        "Reached 1M users",
        "Forged partnerships",
        "Fostered inclusivity worldwide",
      ],
    },
  },
];

const IlluminatedPath = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
          >
            Illuminated Path
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-xs lg:text-base text-white/60 max-w-lg mx-auto"
          >
            Our journey of progress, innovation, and global reach has been
            driven by purpose and passion.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-purple-500/20 to-transparent" />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${400 + 50 * index}`}
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div
                  className={`flex-1 scale-100 hover:scale-105 transition-all duration-300 ease-in-out shadow-2xl ${hoveredIndex === index ? "shadow-purple-950 scale-105 filter brightness-105" : "shadow-none"}`}
                >
                  <div
                    className={`p-8 bg-white/[0.02] rounded-2xl border-2 border-white/5 backdrop-blur-sm ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                  >
                    <milestone.icon className="inline-block h-5 lg:h-8 w-5 lg:w-8 text-purple-400 mb-4" />
                    <div className="text-xs lg:text-sm font-medium text-purple-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg lg:text-2xl font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-xs lg:text-base text-white/60">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute left-1/2 border-2 transform -translate-x-1/2 w-12 h-12 rounded-full ${hoveredIndex === index
                      ? "bg-purple-400/30 border-purple-500"
                      : "bg-purple-500/10 border-purple-500/20"
                    } flex items-center justify-center cursor-pointer`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-4 h-4 rounded-full bg-purple-400" />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay={`${400 + 75 * index}`}
                  className="flex-1 hidden md:flex items-center justify-center text-purple-400/80 text-sm font-medium group"
                >
                  <div
                    className={`bg-white/[0.03] p-6 rounded-lg border border-white/10 backdrop-blur-sm group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 ease-in-out shadow-2xl ${hoveredIndex === index ? "shadow-purple-950 scale-105 filter brightness-105" : "shadow-none"}`}
                  >
                    <milestone.extraInfo.icon className="h-3 lg:h-6 w-3 lg:w-6 text-purple-400 mb-2" />
                    <h4 className="text-xs lg:text-base font-semibold mb-2">
                      {milestone.extraInfo.title}
                    </h4>
                    <ul className="text-xs lg:text-base list-disc list-inside space-y-1 text-white/60">
                      {milestone.extraInfo.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IlluminatedPath;
