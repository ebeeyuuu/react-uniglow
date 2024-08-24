
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SecondSlide = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [subject, setSubject] = useState("")

  const handleClick = (subject: string) => {
    setIsSelected(true)
    setSubject(subject)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollEnabled(true);
    }, 3000);

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className={`w-full h-screen ${scrollEnabled ? "overflow-y-scroll" : "overflow-hidden"} scrollbar-hide`}>
      <div className="relative w-full h-[100vh] scroll-smooth">
        <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4">
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
          className="h-full w-full grid grid-cols-3 max-[850px]:grid-cols-2 grid-rows-6 max-[850px]:grid-rows-9 gap-[22px] py-10 px-4 absolute"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: {
            delay: 3,
            duration: 0.5,
            ease: "easeInOut",
          } }}
          exit={ isSelected ? { y: 1000, opacity: 0 } : { y: 0, opacity: 1 } }
        >
          <div 
            className="bg-[#00309f]/80 rounded-xl flex justify-center items-center row-span-1 col-span-2 max-[850px]:col-span-1 max-[850px]:9 smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("Science")}
          >
            Science
          </div>
          <div 
            className="bg-[#003dcc] rounded-xl flex justify-center items-center row-span-1 col-span-1 max-[850px]:row-span-2 max-[850px]:8 smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("English")}
          >
            English
          </div>
          <div 
            className="bg-[#003dcc] rounded-xl flex justify-center items-center row-span-2 col-span-2 max-[850px]:row-span-2 max-[850px]:col-span-1 max-[850px]:6 smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("Mathematics")}
          >
            Mathematics
          </div>
          <div 
            className="bg-[#08155e] rounded-xl flex justify-center items-center row-span-2 col-span-1 max-[850px]:row-span-2 max-[850px]:7 smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("Technology")}
          >
            Technology
          </div>
          <div 
            className="bg-[#f4b034]/70 rounded-xl flex justify-center items-center row-span-1 col-span-1 max-[850px]:row-span-2  smooth-animation cursor-pointer max-[850px]:5 text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("History")}
          >
            History
          </div>
          <div
            className="bg-[#02ad83]/70 rounded-xl flex justify-center items-center row-span-1 col-span-2 max-[850px]:row-span-2  max-[850px]:col-span-1 max-[850px]:5 smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("Geography")}
          >
            Geography
          </div>
          <div 
            className="bg-[#08155e] rounded-xl flex justify-center items-center row-span-2 col-span-1 smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("Art")}
          >
            Art
          </div>
          <div
            className="bg-[#00309f]/80 rounded-xl flex justify-center items-center row-span-1 col-span-1 max-[850px]:row-span-2 smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("Music")}
          >
            Music
          </div>
          <div 
            className="bg-[#003dcc]  rounded-xl flex justify-center items-center row-span-1 col-span-1 max-[850px]:row-span-2 smooth-animation cursor-pointer text-xl max-[850]x:5 font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("Physical Education")}
          >
            Physical Education
          </div>
          <div 
            className="bg-[#003dcc] rounded-xl flex justify-center items-center row-span-1 col-span-2 max-[850px]:col-span-1 smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]"
            onClick={() => handleClick("Languages")}
          >
            Languages
          </div>
        </motion.div>
        <motion.div>
          {subject}
        </motion.div>
      </div>
    </div>
  )
}

export default SecondSlide
