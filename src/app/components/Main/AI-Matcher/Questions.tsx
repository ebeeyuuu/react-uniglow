import React from 'react'
import SlidePresentation from './SlidePresentation'

// import slides from separate files
import FirstSlide from './FirstSlide'
import SecondSlide from './SecondSlide'
import ThirdSlide from './ThirdSlide'
import FourthSlide from './FourthSlide'
import FifthSlide from './FifthSlide'

const Questions = () => {
  return (
    <SlidePresentation numSlides={20}>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <FifthSlide />
    </SlidePresentation>
  )
}

export default Questions
