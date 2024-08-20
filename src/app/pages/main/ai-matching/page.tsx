import React from 'react'
import MainLayout from '@/app/MainLayout'
import AIMatching from '@/app/components/Main/AIMatching'

const page = () => {
  return (
    <MainLayout includeNavBar={false}>
      <div className="flex justify-center items-center w-full h-full">
        <AIMatching />
      </div>
    </MainLayout>
  )
}

export default page
