import React from 'react'
import { motion } from 'framer-motion'

const SecondSlide = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <div className="flex flex-col gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
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
          className="flex h-screen grid grid-cols-3 grid-rows-5 gap-2"
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
          <div className="bg-gray-500 rounded-xl flex justify-center items-center row-span-2 col-span-1 text-black smooth-animation">9</div>
        </motion.div>
      </div>
    </div>
  )
}

export default SecondSlide
