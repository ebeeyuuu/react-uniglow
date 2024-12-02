import React from 'react'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaChartLine, FaSearch, FaRocket, FaGlobe, FaPiggyBank } from 'react-icons/fa'

const reasons = [
  { icon: FaUserGraduate, title: "Reach qualified candidates" },
  { icon: FaChartLine, title: "Enhanced visibility" },
  { icon: FaSearch, title: "Data-driven insights" },
  { icon: FaRocket, title: "Streamlined recruitment" },
  { icon: FaGlobe, title: "Access to diverse student pool" },
  { icon: FaPiggyBank, title: "Cost-effective marketing" },
]

const WhyPartner = () => {
  return (
    <section className="py-20">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Why Partner with Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-purple-600/20 rounded-full p-4 mb-4">
                <reason.icon className="text-4xl text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyPartner


