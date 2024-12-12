import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaGraduationCap, FaGlobe, FaRobot, FaUniversity, FaUsers } from 'react-icons/fa'

const milestones = [
  {
    year: 2018,
    title: 'Uniglow Founded',
    description: 'Started with a vision to revolutionize student recruitment.',
    icon: FaTrophy,
    details: 'Founded by a team of education enthusiasts and tech innovators, Uniglow set out to bridge the gap between students and universities worldwide.',
    achievement: 'Secured initial funding of $2 million'
  },
  {
    year: 2019,
    title: '1000 Students Placed',
    description: 'Reached our first major milestone in student placements.',
    icon: FaGraduationCap,
    details: 'Successfully matched and placed 1000 students in universities across 10 countries, achieving a 95% satisfaction rate.',
    achievement: 'Expanded team to 25 members'
  },
  {
    year: 2020,
    title: 'Global Expansion',
    description: 'Expanded our services to 10 new countries.',
    icon: FaGlobe,
    details: 'Despite global challenges, Uniglow expanded its reach to include universities in Europe, Asia, and Australia, doubling our university partnerships.',
    achievement: 'Launched multilingual support in 5 languages'
  },
  {
    year: 2021,
    title: 'AI Integration',
    description: 'Launched AI-powered matching algorithm for better placements.',
    icon: FaRobot,
    details: 'Introduced cutting-edge AI technology to enhance the matching process between students and universities, increasing placement accuracy by 40%.',
    achievement: 'Processed over 50,000 applications'
  },
  {
    year: 2022,
    title: '100 University Partners',
    description: 'Celebrated partnerships with 100 top universities worldwide.',
    icon: FaUniversity,
    details: 'Reached a significant milestone of 100 partner universities, including 15 from the global top 50 rankings.',
    achievement: 'Launched scholarship program worth $1 million'
  },
  {
    year: 2023,
    title: '1 Million Students Served',
    description: 'Reached the incredible milestone of helping 1 million students.',
    icon: FaUsers,
    details: "Uniglow's impact reached new heights, having assisted 1 million students in their educational journeys across 50 countries.",
    achievement: 'Achieved carbon neutrality in operations'
  }
]

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#020202] to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Timeline of Milestones
        </h2>
        <div
          ref={containerRef}
          className="relative flex overflow-x-scroll pb-10 hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 mx-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-purple-900/20 backdrop-blur-md rounded-lg p-6 cursor-pointer h-full"
                onClick={() => handleExpand(index)}
                animate={{ height: expandedIndex === index ? 'auto' : '280px' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <milestone.icon className="text-4xl text-purple-400 mr-4" />
                  <h3 className="text-2xl font-bold">{milestone.year}</h3>
                </div>
                <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                <p className="text-white/80 mb-4">{milestone.description}</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expandedIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedIndex === index && (
                    <>
                      <p className="text-white/70 mb-2">{milestone.details}</p>
                      <p className="text-purple-400 font-semibold">Key Achievement: {milestone.achievement}</p>
                    </>
                  )}
                </motion.div>
                <motion.button
                  className="mt-4 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleExpand(index)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedIndex === index ? 'Read Less' : 'Read More'}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

