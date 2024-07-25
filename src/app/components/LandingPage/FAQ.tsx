import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FAQ = () => {
  return (
    <div className="mt-[500px] w-full justify-center items-center flex flex-col gap-y-[20px]">
      <div className="flex flex-row gap-x-[10px] text-[15px] items-center font-semibold opacity-50 px-3 py-1 border-white border-2 rounded-[10px]">
        <FaRegQuestionCircle size={18}/>
        FAQS
      </div>
      <div className="font-bold text-4xl mt-[20px] w-[90%] text-center">
        Frequently Asked Questions
      </div>
      <div className="text-base font-light w-5/12 text-center">
        Find related questions and answers related to how our app works, and how you can maximise every feature we offer. 
      </div>
      <div className="flex flex-col w-3/4 font-semibold justify-center items-center gap-y-[10px] mt-[30px]">
        <div className="flex-1 max-[900px]:mx-auto">
          <Accordion sx={{ maxWidth: 450, backgroundColor: '#00356a', color: 'white' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How does Uniglow's AI matching system work?
            </AccordionSummary>
            <AccordionDetails>
              <div className="font-normal">
                Our AI analyses your personality traits, academic interests, and preferences to match you with universities that best suit your profile.
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="flex-1 max-[900px]:mx-auto">
          <Accordion sx={{ maxWidth: 450, backgroundColor: '#00356a', color: 'white' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Are the VR campus tours available for all universities?
            </AccordionSummary>
            <AccordionDetails>
              <div className="font-normal">
                We currently offer VR tours for our partner universities and are continually expanding our selection.
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="flex-1 max-[900px]:mx-auto">
          <Accordion sx={{ maxWidth: 450, backgroundColor: '#00356a', color: 'white' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              How do I connect with a peer mentor?
            </AccordionSummary>
            <AccordionDetails>
              <div className="font-normal">
                After creating your profile, you can request a mentor match based on your interests and university preferences.
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="flex-1 max-[900px]:mx-auto">
          <Accordion sx={{ maxWidth: 450, backgroundColor: '#00356a', color: 'white' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Is the Interactive Curriculum Explorer accurate for all listed universities?
            </AccordionSummary>
            <AccordionDetails>
              <div className="font-normal">
                We regularly update our curriculum data, but always advise verifying with the university's official sources.
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="flex-1 max-[900px]:mx-auto">
          <Accordion sx={{ maxWidth: 450, backgroundColor: '#00356a', color: 'white' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Is Uniglow's service free?
            </AccordionSummary>
            <AccordionDetails>
              <div className="font-normal">
                Basic features are free, whilst advanced tools like personalised counselling are available through our premium plan.
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="bg-[#ca6200] px-5 py-2 rounded-[10px] font-medium mt-[20px]">
        See all FAQs
      </div>
      <div className="font-medium text-sm mt-[10px]">
        Contact us at <span className="underline decoration-offset-[5px] italic">uniglow@gmail.com</span> for more information
      </div>
    </div>
  )
}

export default FAQ