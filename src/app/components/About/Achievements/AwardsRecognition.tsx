import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaStar, FaCertificate, FaGlobe } from 'react-icons/fa'

const awards = [
  {
    name: 'Best Education Platform',
    year: 2023,
    icon: FaTrophy,
    description: 'Recognized for innovative approach to online education and student engagement.',
    organization: 'EdTech Breakthrough Awards'
  },
  {
    name: 'Innovation in EdTech',
    year: 2022,
    icon: FaAward,
    description: 'Awarded for our AI-powered student-university matching algorithm.',
    organization: 'Global EdTech Startups Awards'
  },
  {
    name: 'Student Choice Award',
    year: 2021,
    icon: FaStar,
    description: 'Voted as the most user-friendly platform by international students.',
    organization: 'International Student Association'
  },
  {
    name: 'Global Impact Award',
    year: 2020,
    icon: FaGlobe,
    description: 'Recognized for expanding educational opportunities in developing countries.',
    organization: 'United Nations Educational Initiative'
  },
  {
    name: 'Excellence in Student Support',
    year: 2019,
    icon: FaMedal,
    description: 'Awarded for our comprehensive student support system and resources.',
    organization: 'National Association of Student Affairs Professionals'
  },
  {
    name: 'Best Use of AI in Education',
    year: 2018,
    icon: FaCertificate,
    description: 'Recognized for leveraging AI to improve the university application process.',
    organization: 'AI in Education Summit'
  },
]

const AwardsRecognition = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-[#020202]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Awards & Recognition
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="w-64 h-64 bg-purple-900/20 backdrop-blur-md rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: 180 }}
              animate={{ rotateY: hoveredIndex === index ? 180 : 0 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center" style={{ backfaceVisibility: 'hidden' }}>
                <award.icon className="text-6xl text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-center">{award.name}</h3>
                <p className="text-white/80 mt-2">{award.year}</p>
              </div>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-white/80 mb-2">{award.description}</p>
                <p className="text-purple-400 text-sm">{award.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AwardsRecognition

