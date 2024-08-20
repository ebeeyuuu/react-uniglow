import React from 'react'
import SlidePresentation from './SlidePresentation'

const Questions = () => {
  return (
    <SlidePresentation numSlides={5}>
      <div>Ok so you need to decide on a university. What concerns do you have regarding any university?</div>
      <div>On a scale of 1-100 how confident do you think you know what university, course, and country you want to go to/settle in?</div>
      <div>Do you have an idea of what country you want to study in? If so what is it?</div>
      <div>Do you know what career you want to be? Its ok if you don't know yet. If you do know what you want to work as enter it here:</div>
      <div>Okay. We are all set and have all the information we need to determine which is the <strong>best university for you.</strong> Generating options...</div>
    </SlidePresentation>
  )
}

export default Questions
