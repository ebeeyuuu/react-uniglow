import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const statistics = [
  { label: 'Students Placed', value: 100000, color: '#8B5CF6' },
  { label: 'University Partners', value: 500, color: '#EC4899' },
  { label: 'Countries Reached', value: 50, color: '#10B981' },
  { label: 'Satisfaction Rate', value: 98, color: '#F59E0B' },
]

const ImpactStatistics = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 1 })
  const [counts, setCounts] = useState(statistics.map(() => 0))

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      const intervals = statistics.map((stat, index) => {
        return setInterval(() => {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts]
            newCounts[index] = Math.min(newCounts[index] + Math.ceil(stat.value / 100), stat.value)
            return newCounts
          })
        }, 20)
      })

      return () => intervals.forEach(clearInterval)
    } else {
      controls.start('hidden')
      setCounts(statistics.map(() => 0))
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#020202] to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Impact Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <svg className="w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#4B5563"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke={stat.color}
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 60}
                  animate={{ strokeDashoffset: 2 * Math.PI * 60 * (1 - counts[index] / stat.value) }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                  transform="rotate(-90 64 64)"
                />
              </svg>
              <motion.div
                className="text-4xl font-bold mt-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {counts[index].toLocaleString()}
              </motion.div>
              <motion.div
                className="text-xl text-white/80 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStatistics

