import React from 'react'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaChartLine, FaSearch, FaRocket, FaGlobe, FaPiggyBank } from 'react-icons/fa'

const reasons = [
  { icon: FaUserGraduate, title: "Reach qualified candidates", description: "Connect with students who are the best fit for your institution" },
  { icon: FaChartLine, title: "Enhanced visibility", description: "Increase your university's online presence and reach" },
  { icon: FaSearch, title: "Data-driven insights", description: "Make informed decisions with our advanced analytics" },
  { icon: FaRocket, title: "Streamlined recruitment", description: "Simplify your admissions process with our tools" },
  { icon: FaGlobe, title: "Access to diverse student pool", description: "Expand your reach to students from various backgrounds" },
  { icon: FaPiggyBank, title: "Cost-effective marketing", description: "Optimize your recruitment budget with targeted strategies" },
]

const WhyPartner = () => {
  return (
    <section className="py-20 bg-[#020202]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">Why Partner with Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-purple-900/20 backdrop-blur-md rounded-lg p-6 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(88, 28, 135, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-purple-600/20 rounded-full p-4 mb-4 inline-block"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <reason.icon className="text-4xl text-purple-400" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-white/60 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyPartner


