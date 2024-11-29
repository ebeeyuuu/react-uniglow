'use client'

import React, { useEffect } from 'react'
import { BsArrowRight, BsHeadset, BsLightning, BsChatDots, BsTools, BsTerminal } from 'react-icons/bs'
import { FaServer } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className="relative min-h-screen py-20"
      style={{ background: '#020202' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-6 border border-white/10">
              <BsHeadset className="w-4 h-4 text-purple-400" />
              <span className="text-xs lg:text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                24/7 Technical Support
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
              Expert Support <br />
              When You Need <br />
              It Most
            </h1>
            <p className="text-sm lg:text-lg text-white/60 max-w-xl mb-8">
              Get instant access to our technical support team and comprehensive resources
              to resolve any issues quickly and efficiently
            </p>

            <div className="grid grid-cols-2 gap-6 w-full max-w-lg mb-8">
              {[
                { value: "99.9%", label: "Resolution Rate" },
                { value: "<5min", label: "Response Time" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              {[
                {
                  icon: BsTerminal,
                  title: "Command Center",
                },
                {
                  icon: FaServer,
                  title: "Server Support",
                },
                {
                  icon: BsTools,
                  title: "Quick Fixes",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/[0.03] rounded-xl p-4 border border-white/10">
                  <feature.icon className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent rounded-3xl" />
            <div className="relative p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl lg:text-3xl font-semibold mb-6">Get Instant Support</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-xs"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Issue Type
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white">
                    <option value="" className="bg-[#020202]">Select issue type</option>
                    <option value="technical" className="bg-[#020202]">Technical Issue</option>
                    <option value="account" className="bg-[#020202]">Account Access</option>
                    <option value="billing" className="bg-[#020202]">Billing Support</option>
                    <option value="other" className="bg-[#020202]">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Describe your issue..."
                  />
                </div>
                <button className="w-full bg-white hover:bg-white/90 text-black font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                  Submit Support Ticket
                  <BsArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-sm text-white/40">
                  Average response time: less than 5 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


