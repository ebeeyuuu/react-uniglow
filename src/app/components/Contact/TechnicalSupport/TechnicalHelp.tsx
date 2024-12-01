import React from 'react'
import { BsHeadset, BsClock, BsGlobe, BsArrowRight, BsTerminal } from 'react-icons/bs'
import { FaServer, FaNetworkWired } from 'react-icons/fa'

const TechnicalHelp = () => {
  return (
    <section className="py-24 relative flex justify-center items-center" style={{ background: '#020202' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/15 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Interactive Cards */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-8">
              Advanced Technical <br />Support Solutions
            </h2>

            <div className="grid gap-4">
              {[
                {
                  icon: BsTerminal,
                  title: "Command Center Access",
                  description: "Utilize our advanced diagnostic tools",
                  gradient: "from-purple-500/20 to-pink-500/20"
                },
                {
                  icon: FaServer,
                  title: "Server Management",
                  description: "24/7 server monitoring and support",
                  gradient: "from-purple-500/20 to-blue-500/20"
                },
                {
                  icon: FaNetworkWired,
                  title: "Network Solutions",
                  description: "Enterprise-grade network troubleshooting",
                  gradient: "from-purple-500/20 to-green-500/20"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative p-6 flex items-center gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                    <BsArrowRight className="w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Support Stats & Contact */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent rounded-3xl" />
            <div className="relative p-8 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { value: "99.9%", label: "Resolution Rate" },
                  { value: "<5min", label: "Response Time" },
                  { value: "24/7", label: "Availability" },
                  { value: "100+", label: "Expert Engineers" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Describe your technical issue"
                    rows={4}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <button className="w-full bg-white hover:bg-white/90 text-black font-medium py-4 rounded-xl transition-colors">
                  Request Technical Support
                </button>
                <p className="text-center text-sm text-white/40">
                  Average response time: 5 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalHelp
