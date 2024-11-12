import React from "react";

const partners = [
  {
    name: "Oxford University",
    description: "Leading research collaboration in Computer Science and AI",
    type: "Academic Partner",
  },
  {
    name: "Stanford University",
    description: "Join programs in Engineering and Technology Innovation",
    type: "Research Partner",
  },
  {
    name: "MIT",
    description: "Collaborative intiatives in Business and Entrepreneurship",
    type: "Strategic Partner",
  }
]

const Partners = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center bg-white/5 rounded-full px-6 py-2 mb-4 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium text-white/60">Featured Partners</span>
          </div>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            World-Class Institutions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative p-8 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {partner.name}
                </h3>
                <span className="text-sm text-blue-400 mb-4 bg-blue-500/10 px-3 py-1 rounded-full">
                  {partner.type}
                </span>
                <p className="text-white/40 mb-6">{partner.description}</p>
                <button
                  className="border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Partners;
