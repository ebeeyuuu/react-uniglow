import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa'

const stories = [
  { name: 'John Doe', achievement: 'Graduated from Harvard', type: 'education', year: 2022 },
  { name: 'Jane Smith', achievement: 'Landed job at Google', type: 'career', year: 2021 },
  { name: 'Mike Johnson', achievement: 'Won Fulbright Scholarship', type: 'award', year: 2023 },
  { name: 'Sarah Brown', achievement: 'Started successful startup', type: 'career', year: 2022 },
  { name: 'Chris Lee', achievement: 'Published groundbreaking research', type: 'education', year: 2021 },
  { name: 'Emily Chen', achievement: 'Received Nobel Prize nomination', type: 'award', year: 2023 },
]

const SuccessStories = () => {
  const [filter, setFilter] = useState('all')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filteredStories = stories.filter(story => filter === 'all' || story.type === filter)

  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return <FaGraduationCap className="text-2xl text-purple-400" />
      case 'career': return <FaBriefcase className="purple-400" />
      case 'award': return <FaAward className="text-2xl text-purple-400" />
      default: return null
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-[#020202]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Success Stories Gallery
        </h2>
        <div className="flex justify-center mb-8">
          <button
            className={`mx-2 px-4 py-2 rounded-full ${filter === 'all' ? 'bg-purple-600' : 'bg-purple-900/20'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-full ${filter === 'education' ? 'bg-purple-600' : 'bg-purple-900/20'}`}
            onClick={() => setFilter('education')}
          >
            Education
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-full ${filter === 'career' ? 'bg-purple-600' : 'bg-purple-900/20'}`}
            onClick={() => setFilter('career')}
          >
            Career
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-full ${filter === 'award' ? 'bg-purple-600' : 'bg-purple-900/20'}`}
            onClick={() => setFilter('award')}
          >
            Awards
          </button>
        </div>
        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-purple-900/20 backdrop-blur-md rounded-lg p-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-center mb-4">
                  {getIcon(story.type)}
                  <h3 className="text-xl font-semibold ml-2">{story.name}</h3>
                </div>
                <p className="text-white/80 mb-2">{story.achievement}</p>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-purple-400 mt-2">Year: {story.year}</p>
                      <p className="text-white/60 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SuccessStories

