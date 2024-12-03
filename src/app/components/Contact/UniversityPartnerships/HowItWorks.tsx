import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaUserPlus, FaCogs, FaRocket, FaChartLine } from 'react-icons/fa'

const steps = [
  { 
    title: "Initial Consultation", 
    description: "We'll discuss your goals and needs to tailor our partnership.",
    icon: FaComments
  },
  { 
    title: "Profile Setup", 
    description: "We'll help you create an engaging university profile that stands out.",
    icon: FaUserPlus
  },
  { 
    title: "Integration", 
    description: "Our team will seamlessly integrate our tools with your existing systems.",
    icon: FaCogs
  },
  { 
    title: "Launch & Support", 
    description: "Your partnership goes live with our full support and guidance.",
    icon: FaRocket
  },
  { 
    title: "Ongoing Optimization", 
    description: "We'll continuously analyze and improve your results for maximum impact.",
    icon: FaChartLine
  },
]

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 bg-linear-to-b from-[#020202] to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">How It Works</h2>
        <div className="relative">
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index === activeStep ? 'bg-purple-600' : 'bg-gray-700'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <step.icon className={`text-2xl ${index === activeStep ? 'text-white' : 'text-gray-400'}`} />
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-8"
            >
              <h3 className="text-2xl font-semibold mb-4">{steps[activeStep].title}</h3>
              <p className="text-white/80">{steps[activeStep].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


