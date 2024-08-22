import React from 'react'
import { motion } from 'framer-motion'

const SecondSlide = () => {
  return (
    <div 
      className="h-full flex justify-center items-center w-4/5 mx-auto flex-col gap-y-4"
    >
      <motion.div 
        className="flex flex-col gap-y-[20px] justify-center items-center"
        initial={{ y: 0 }}
        animate={{ y: 100, transition: { duration: 500, delay: 2 } }}
      >
        <div className="text-center text-lg font-medium">
          Let&apos;s talk about your passions - what subjects light you up? what do you aspire to be?
        </div>
        <div className="text-center text-base">
          <strong>Note</strong> it's okay if you don't know what you want to be right now, even if you don't have a &apos;favourite&apos; subject.
        </div>
      </motion.div>
      {/* add a delayed animation here to the text to have it go up. also animate a bento grid that scrolls so that you can choose a bunch of subjects and jobs*/}
      <motion.div
        className="grid grid-cols-3 grid-rows-5 gap-4 w-full h-1/2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0, transition: { duration: 0.5, delay: 2 }}}
      >
        <div className="bg-white flex justify-center items-center row-span-2 col-span-1 rounded-xl">
          1
        </div>
        <div className="bg-white flex justify-center items-center row-span-1 col-span-1 rounded-xl">
          2
        </div>
        <div className="bg-white flex justify-center items-center row-span-2 col-span-1 rounded-xl">
          3
        </div>
        <div className="bg-white flex justify-center items-center row-span-2 col-span-1 rounded-xl">
          4
        </div>
        <div className="bg-white flex justify-center items-center row-span-2 col-span-1 rounded-xl">
          5
        </div>
        <div className="bg-white flex justify-center items-center row-span-2 col-span-1 rounded-xl">
          6
        </div>
        <div className="bg-white flex justify-center items-center row-span-2 col-span-1 rounded-xl">
          7
        </div>
      </motion.div>
    </div>
  )
}

export default SecondSlide

