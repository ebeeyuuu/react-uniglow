import React from "react";
import { BsArrowRight, BsStars, BsBullseye, BsCompass } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center, rgba(255, 255, 255, 0.1)_0%,transparent_100%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center itext-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <BsStars className="w-4 h-4 text-purple-400" />
            <span className="text-xs lg:text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Your Career Journey Starts Here
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent text-center">
            Navigate Your <br />
            Career Path with <br />
            Confidence
          </h1>
          <p className="text-sm lg:text-lg text-white/60 max-w-2xl mb-8 text-center">
            Expert guidance to help you make informed career decisions, develop
            professionally, and achieve your career goals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-xs lg:text-base bg-white rounded-xl bg-white hover:bg-white/90 flex-row flex justify-center items-center text-black smooth-animation px-5 py-3">
              Book a Session
              <BsArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="text-xs lg:text-base border border-white/10 hover:bg-white/5 px-5 py-3 rounded-xl smooth-animation">
              View Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: BsBullseye,
              title: "Career Strategy",
              description:
                "Develop a clear roadmap aligned with your goals and values",
            },
            {
              icon: BsCompass,
              title: "Industry Insights",
              description: "Get expert knowledge about your target industry",
            },
            {
              icon: BsStars,
              title: "Personal Growth",
              description: "Build confidence and develope professional skills",
            },
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative p-6 bg-white/[0.03] rounded-xl border border-white/10 backdrop-blur-sm">
                <feature.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-base lg:text-xl font-semibold mb-2">
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
  );
};

export default Hero;
