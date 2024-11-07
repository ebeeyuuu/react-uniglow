import React from "react";

const CTA = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-n from-transparent via-blue-600/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      <div className="max-w-4xl mx-auto text-center px-4 relative">
        <div className="inline-flex items-center bg-white/5 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-white/10">
          <span className="text-sm font-medium text-white/60">
            Ready to Join?
          </span>
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Become a <br /> Partner Institution
        </h2>
        <p className="text-xl mb-8 text-white/60 max-w-[800px] w-full">
          Join our global network of leading educational institutions and create
          new opportunities for your students and faculty!
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black hover:bg-white/90 rounded-xl scale-100 hover:scale-110 px-5 py-3">
            Partner With Us
          </button>
          <button className="px-5 py-3 rounded-xl border border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
