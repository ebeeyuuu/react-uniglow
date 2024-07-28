import React from 'react'

const Newsletter = () => {
  return (
    <div className="mt-[40px]">
      <div className="flex flex-col gap-y-[20px] max-[900px]:justify-center max-[900px]:ml-[40px]">
        <div className="text-lg font-semibold underline decoration-4 decoration-[#ff992c] underline-offset-[10px]">
          Join our newsletter
        </div>
        <div className="font-light text-base w-1/2">
          Get <span style={{ fontWeight: 700 }}>instant updates</span> on Uniglow&apos;s latest features! Subscribe now to stay informed and <span style={{ fontWeight: 700 }}>enhance your experience with our cutting-edge innovations.</span>
        </div>
        <div className="flex flex-col gap-y-[15px]">
          <div className="font-bold text-lg">
            Email address
          </div>
          <input
            type="text"
            placeholder="Enter your email address here"
            className="w-1/2 p-3 text-sm min-w-[300px] max-w-[400px] rounded-[10px] bg-[#004fa3] placeholder-white max-[900px]:w-full"
          />
          <div className="px-3 py-2 border-white border w-[100px] flex items-center justify-center mt-[10px] rounded-[10px]">
            Sign up
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter