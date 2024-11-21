import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsBook, BsPerson, BsTools } from "react-icons/bs";

const initiatives = [
  {
    icon: BsPerson,
    title: "1:1 Mentorship Programs",
    description: "Connect with experienced mentors for personalised advice.",
  },
  {
    icon: BsBook,
    title: "Interactive Workshops",
    description: "Attend workshops to build skills and learn about university applications.",
  },
  {
    icon: BsTools,
    title: "Resource Library",
    description: "Access a wealth of tools and guides to navigate your journey.",
  },
]

const EmpoweringStudents = () => {
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
              Empowering Students <br /> Through Guidance
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-xs lg:text-base text-white/60 max-w-2xl mx-auto text-center"
          >
            Helping students achieve their full potential with tailored support and resources.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${400 + 50 * index}`}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl smooth-animation" />
              <div className="relative p-8 bg-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-500/10">
                  <initiative.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-base lg:text-xl font-semibold mb-4">
                  {initiative.title}
                </h3>
                <p className="text-xs lg:text-base text-white/60">
                  {initiative.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default EmpoweringStudents;
