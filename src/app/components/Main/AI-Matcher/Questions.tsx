import React from 'react'
import SlidePresentation from './SlidePresentation'

// import slides from separate files
import FirstSlide from './FirstSlide'
import SecondSlide from './SecondSlide'
import ThirdSlide from './ThirdSlide'
import FourthSlide from './FourthSlide'
import FifthSlide from './FifthSlide'
import SixthSlide from'./SixthSlide'
import SeventhSlide from './SeventhSlide'
import EighthSlide from './EighthSlide'


const Questions = () => {
  return (
    <SlidePresentation numSlides={20}>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <FifthSlide />
      <SixthSlide />
      <SeventhSlide />
      <EighthSlide />
    </SlidePresentation>
  )
}

export default Questions
