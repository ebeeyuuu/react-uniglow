import React from 'react'

const Contacts = () => {
  return (
    <div className="flex flex-row gap-x-[50px] max-[900px]:ml-[40px] max-[400px]:flex-col gap-y-[40px]">
      <div className="flex flex-col gap-y-[10px]">
        <div className="font-semibold text-lg max-[900px]:text-base">Customer Support:</div>
        <div className="mt-[10px] max-[900px]:text-sm">Bug Reporting</div>
        <div>Performance Issues</div>
        <div>Suggestions</div>
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <div className="font-semibold text-lg max-[900px]:text-base">Alternatively contact us at:</div>
        <div className="mt-[10px] max-[900px]:text-sm">+62 811 333 0106</div>
        <div className="max-[900px]:text-sm">uniglow@gmail.com</div>
      </div>
    </div>
  )
}

export default Contacts