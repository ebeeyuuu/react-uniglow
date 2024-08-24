import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SecondSlide = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollEnabled(true);
    }, 3000);

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={`w-full h-screen ${scrollEnabled ? "overflow-y-scroll" : "overflow-hidden"} scrollbar-hide`}>
      <div className="relative w-full h-[200vh] justify-center items-center scroll-smooth">
        <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 gap-4">
          <motion.div
            className="text-lg font-medium"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -500, opacity: 0, transition: {
              delay: 3,
              duration: 0.5,
              ease: "easeInOut",
            } }}
          >
            Let&apos;s talk about passions - what do subjects light you up? what do you aspire to be?
          </motion.div>
        </div>
        <motion.div 
          className="h-full w-full grid grid-cols-3 grid-rows-5 gap-2"
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: {
            delay: 3,
            duration: 0.5,
            ease: "easeInOut",
          } }}
        >
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-2 col-span-1 text-black smooth-animation">1</div>
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-1 col-span-1 text-black smooth-animation">2</div>
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-2 col-span-1 text-black smooth-animation">3</div>
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-2 col-span-1 text-black smooth-animation">4</div>
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-2 col-span-1 text-black smooth-animation">5</div>
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-2 col-span-1 text-black smooth-animation">6</div>
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-2 col-span-1 text-black smooth-animation">7</div>
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-1 col-span-1 text-black smooth-animation">8</div>
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-1 col-span-1 text-black smooth-animation">9</div>
        </motion.div>
      </div>
    </div>
  )
}

export default SecondSlide
