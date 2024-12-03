import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + 1000
          return newCount >= 100000 ? 100000 : newCount
        })
      }, 20)
      return () => clearInterval(interval)
    }
  }, [isInView, controls])

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-[#020202]" />
      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Impact in Numbers
        </motion.h1>
        <motion.div
          className="text-6xl md:text-8xl font-bold mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {count.toLocaleString()}
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl text-white/80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Students Helped and Counting
        </motion.p>
      </div>
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          variants={particleVariants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 0.5,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <FaGraduationCap className="text-4xl text-purple-400" />
      </motion.div>
    </section>
  )
}

export default Hero


