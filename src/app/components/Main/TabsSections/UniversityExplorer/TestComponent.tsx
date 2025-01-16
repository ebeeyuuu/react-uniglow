import React from 'react'

const TestComponent: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col"
    >
      TestComponent
    </div>
  )
}

export default TestComponent
