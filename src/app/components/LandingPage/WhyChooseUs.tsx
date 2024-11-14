import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGlobe, BsLightning, BsShield, BsTrophy } from "react-icons/bs";

const reasons = [
  {
    icon: BsGlobe,
    title: "Global Network",
    description:
      "Access to over 1000+ universities worldwide with exclusive partnerships and direct admissions support",
  },
  {
    icon: BsLightning,
    title: "Smart Matching",
    description:
      "AI-powered algorithm that matches your profile with universities that best fit your goals and preferences",
  },
  {
    icon: BsShield,
    title: "Guaranteed Success",
    description:
      "95% acceptance rate with our comprehensive application support and preparation services",
  },
  {
    icon: BsTrophy,
    title: "Expert Guidance",
    description:
      "Personal mentorship from experienced advisors who've helped thousands of students achieve their dreams",
  },
];

const WhyChooseUs: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/15 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl lg:text-5xl font-bold pb-6 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
          >
            Why Choose Uniglow?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-xs lg:text-base text-white/60 max-w-lg mx-auto"
          >
            We&apos;re revolutionizing the university application process with
            cutting-edge technology and expert support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={`${300 + 50 * index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity smooth-animation rounded-2xl" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border-2 border-white/15 backdrop-blur-sm h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-500/10">
                  <reason.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs lg:text-base text-white/60">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
