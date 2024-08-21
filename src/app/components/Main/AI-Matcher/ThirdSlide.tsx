import React from 'react'

const ThirdSlide = () => {
  return (
    <div className="w-4/5 h-full flex justify-center items-center mx-auto">
      <div className="flex flex-col gap-y-4">
        <div className="text-center text-lg font-medium">
          When you think about your ideal college location, do you picture yourself in a bustling city, a quieter suburban area, or a rural settings surrounded by nature?
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-1/3">
          <div className="text-black bg-white rounded-sm flex justify-center items-center">
            1
          </div>
          <div className="text-black bg-white rounded-sm flex justify-center items-center">
            2
          </div>
          <div className="text-black bg-white rounded-sm flex justify-center items-center">
            3
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSlide
