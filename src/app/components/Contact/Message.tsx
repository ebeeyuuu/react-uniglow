import React from 'react'

const Message = () => {
  return (
    <div className="ml-[40px] mt-[40px] max-[700px]:w-full">
      <div className="flex flex-col gap-y-[30px] w-[100%]">
        <div className="flex flex-col gap-y-[10px]">
          <div className="font-bold text-lg">
            Full name
          </div>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-1/2 p-3 text-sm min-w-[300px] max-w-[400px] rounded-[10px] bg-[#004fa3] placeholder-white max-[900px]:w-full"
          />
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="font-bold text-lg">
            Email address
          </div>
          <input
            type="text"
            placeholder="Enter your email address here"
            className="w-1/2 p-3 text-sm min-w-[300px] max-w-[400px] rounded-[10px] bg-[#004fa3] placeholder-white max-[900px]:w-full"
          />
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="font-bold text-lg">
            Contact number
          </div>
          <input
            type="text"
            placeholder="Enter your contact number here"
            className="w-1/2 p-3 text-sm min-w-[300px] max-w-[400px] rounded-[10px] bg-[#004fa3] placeholder-white max-[900px]:w-full"
          />
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="font-bold text-lg">
            Message
          </div>
          <textarea
            placeholder="Enter your message here"
            className="w-1/2 p-3 text-sm min-w-[300px] max-w-[400px] h-[200px] rounded-[10px] bg-[#004fa3] placeholder-white resize-none max-[900px]:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Message