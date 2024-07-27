import React from 'react'
import Link from 'next/link'

const Page404 = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="font-light text-9xl text-[#0070e0]">
          404
        </div>
        <div className="text-xl font-bold">
          Page not found
        </div>
        <div className="">
          Oops! The page you were looking for doesn't exist. It might have been moved or deleted.
        </div>
        <div className="px-5 py-3 border border-[#e07000] hover:bg-[#e07000] hover:text-black hover:font-bold smooth-animation">
          <Link href="/">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page404