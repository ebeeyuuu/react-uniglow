import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaTimes, FaUser } from 'react-icons/fa'

const tiers = [
  {
    name: "Basic",
    price: "Free",
    platformFee: "10% Platform Fee*",
    features: [
      { name: "Standard Profile", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "Student Messaging", included: true },
      { name: "Basic Integration", included: true },
      { name: "Community Access", included: true },
      { name: "Advanced Analytics", included: false },
      { name: "Priority Support", included: false },
      { name: "Custom Branding", included: false },
    ],
    admins: 1,
  },
  {
    name: "Pro",
    price: "$75",
    platformFee: "0% Platform Fee*",
    features: [
      { name: "Standard Profile", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "Student Messaging", included: true },
      { name: "Basic Integration", included: true },
      { name: "Community Access", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Custom Branding", included: true },
    ],
    admins: 5,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$499",
    platformFee: "0% Platform Fee*",
    features: [
      { name: "Standard Profile", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "Student Messaging", included: true },
      { name: "Basic Integration", included: true },
      { name: "Community Access", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Custom Branding", included: true },
    ],
    admins: 10,
  },
]

const PartnershipTiers = () => {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null)

  return (
    <section className="py-20 bg-[#020202]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Partnership Tiers
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`flex-1 rounded-xl overflow-hidden ${
                tier.highlighted ? 'bg-purple-900/40' : 'bg-purple-900/20'
              } backdrop-blur-md ${
                hoveredTier === index ? 'scale-105' : 'scale-100'
              } transition-all duration-300`}
              onMouseEnter={() => setHoveredTier(index)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400">/ Month</span>
                </div>
                <p className="text-sm text-purple-300 mb-6">{tier.platformFee}</p>
                <button
                  className={`py-2 px-4 rounded-lg mb-8 ${
                    tier.highlighted
                      ? 'bg-purple-500 hover:bg-purple-600'
                      : 'bg-purple-600 hover:bg-purple-700'
                  } text-white font-semibold transition-colors duration-300`}
                >
                  Get Started
                </button>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-300">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <FaUser className="w-3 h-3" />
                    </div>
                    <span>
                      {tier.admins} Admin/Instructors {tier.admins > 1 && `($25/month additional)`}
                    </span>
                  </div>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <FaCheck className="w-5 h-5 text-purple-400" />
                      ) : (
                        <FaTimes className="w-5 h-5 text-gray-500" />
                      )}
                      <span className={feature.included ? 'text-white' : 'text-gray-500'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">
          * Additional credit card transaction fees may apply (typically 2.9% + 30 cents).
        </p>
      </div>
    </section>
  )
}

export default PartnershipTiers

