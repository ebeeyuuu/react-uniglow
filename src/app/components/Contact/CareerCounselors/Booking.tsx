import React from "react";
import { BsCalendar, BsClock, BsCameraVideo } from "react-icons/bs";

const Booking = () => {
  return (
    <section className="py-24 relative flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/15 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto px-4 relative flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
        <div className="text-left md:w-1/2">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xs lg:text-base text-white/60 mb-8">
            Schedule a free 15-minute consultation to discuss your career goals
            and how we can help you achieve them.
          </p>
          <div className="space-y-4">
            {[
              {
                icon: BsCameraVideo,
                title: "Virtual Sessions",
                description: "Connect from anywhere via video call",
              },
              {
                icon: BsClock,
                title: "Flexible Scheduling",
                description: "Sessions available 7 days a week",
              },
              {
                icon: BsCalendar,
                title: "Free Consultation",
                description: "15-minute initial discussion",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="p-2 bg-purple-500/10 rounded-lg mr-4">
                  <feature.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-50 rounded-xl" />
          <div className="relative px-14 py-20 bg-white/[0.02] rounded-xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Book Your Session
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs lg:text-sm font-medium text-white/60 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium text-white/60 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium text-white/60 mb-2">
                  Career Goals
                </label>
                <textarea className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 h-20"></textarea>
              </div>
              <button className="w-full px-5 py-3 bg-white text-black hover:bg-white/90 smooth-animation rounded-xl">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
