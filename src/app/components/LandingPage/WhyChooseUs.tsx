import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const WhyChooseUs = () => {
  return (
    <div className="w-full py-[170px] flex justify-center items-center mt-[300px] bg-[#00274f]">
      <div className="flex flex-col justify-center items-center gap-y-[50px]">
        <div className="text-6xl font-bold max-[700px]:text-4xl relative smooth-animation">
          <span className="underline-container">
            Why Choose Us ?
          </span>
        </div>
        <div className="flex flex-row w-2/3 font-semibold max-[900px]:flex-col justify-center">
          <div className="flex-1 mr-4 max-[900px]:mx-auto max-[900px]:mt-4">
            <Accordion sx={{ maxWidth: 300 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="rounded-full w-[40px] h-[40px] border-black border-2 flex items-center justify-center">
                  1
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="font-semibold text-lg">
                  Discover Your Perfect Match!  
                </div>
                <div className="text-xs mt-[30px]">
                  Uniglow's cutting-edge algorithm analyzes your unique profile and aspirations to reveal your ideal university fit. Say goodbye to endless searching and hello to personalized recommendations that align with your dreams!
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex-1 mr-4 max-[900px]:mx-auto max-[900px]:mt-4">
            <Accordion sx={{ maxWidth: 300 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <div className="rounded-full w-[40px] h-[40px] border-black border-2 flex items-center justify-center">
                  2
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="font-semibold text-lg">
                  Experience Campus Life from Your Couch!
                </div>
                <div className="text-xs mt-[30px]">
                  Can't visit every campus? No problem! Uniglow brings the campus to you with stunning 360-degree virtual tours. Explore dorms, lecture halls, and student hangouts as if you were really there. Make informed decisions without leaving your home!
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex-1 max-[900px]:mx-auto max-[900px]:mt-4">
            <Accordion sx={{ maxWidth: 300 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <div className="rounded-full w-[40px] h-[40px] border-black border-2 flex items-center justify-center">
                  3
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="font-semibold text-lg">
                  Hear It Straight from the Source!
                </div>
                <div className="text-xs mt-[30px]">
                  Uniglow gives you the inside scoop with real, unfiltered reviews from current students and recent grads. Get the authentic lowdown on academics, social life, and everything in between. Don't just choose a university. Choose your future community!
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs