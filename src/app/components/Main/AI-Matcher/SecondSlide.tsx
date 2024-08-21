import React from 'react'

const SecondSlide = () => {
  return (
    <div className="h-full flex justify-center items-center w-4/5 mx-auto">
      <div className="flex flex-col gap-y-[20px] justify-center items-center">
        <div className="text-center text-lg font-medium">
          Let&apos;s talk about your passions - what subjects light you up? what do you aspire to be?
        </div>
        <div className="text-center text-base">
          <strong>Note</strong> it's okay if you don't know what you want to be right now, even if you don't have a &apos;favourite&apos; subject.
        </div>
      </div>
      {/* add a delayed animation here to the text to have it go up. also animate a bento grid that scrolls so that you can choose a bunch of subjects and jobs*/}
    </div>
  )
}

export default SecondSlide
