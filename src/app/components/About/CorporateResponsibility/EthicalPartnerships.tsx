import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUniversity, FaBookOpen, FaMoneyCheckAlt } from "react-icons/fa";

const EthicalPartnerships = () => {
  const partnerships = [
    {
      icon: FaUniversity,
      title: "Diverse University Network",
      description: "Partnered with universities worldwide to expand student options.",
    },
    {
      icon: FaBookOpen,
      title: "Transparent Admissions Insights",
      description: "Providing clear details about admissions processes.",
    },
    {
      icon: FaMoneyCheckAlt,
      title: "Scholarship Opportunities",
      description: "Facilitating access to financial aid programs.",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl lg:text-4xl font-bold mb-4 bg-linear-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
          >
            Ethical Partnerships with Universities
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-xs lg:text-base text-white/60 max-w-2xl mx-auto"
          >
            Strengthening global education by fostering transparent and ethical collaborations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerships.map((partner, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${400 + 50 * index}`}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl smooth-animation" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-md h-full transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-linear-to-r from-purple-400/20 to-purple-500/20">
                  <partner.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-4 text-white">
                  {partner.title}
                </h3>
                <p className="text-xs lg:text-base text-white/60">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicalPartnerships;
