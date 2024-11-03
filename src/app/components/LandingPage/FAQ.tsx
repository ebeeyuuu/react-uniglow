import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does Uniglow's AI matching system work?",
    answer:
      "Our AI analyses your personality traits, academic interests, and preferences to match you with universities that best suit your profile.",
  },
  {
    question: "Are the VR campus tours available for all universities?",
    answer:
      "We currently offer VR tours for our partner universities and are continually expanding our selection.",
  },
  {
    question: "How do I connect with a peer mentor?",
    answer:
      "After creating your profile, you can request a mentor match based on your interests and university preferences.",
  },
  {
    question:
      "Is the Interactive Curriculum Explorer accurate for all listed universities?",
    answer:
      "We regularly update our curriculum data, but always advise verifying with the university's official sources.",
  },
  {
    question: "Is Uniglow's service free?",
    answer:
      "Basic features are free, whilst advanced tools like personalised counselling are available through our premium plan.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="mt-[500px] w-full flex flex-col items-center gap-y-[20px]">
      <div className="flex flex-row gap-x-[10px] text-[15px] items-center font-semibold opacity-50 px-3 py-1 border-white border-2 rounded-[10px]">
        <FaRegQuestionCircle size={18} />
        FAQS
      </div>
      <h2 className="font-bold text-4xl mt-[20px] w-[90%] text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-base font-light w-full max-w-[500px] text-center max-[900px]:w-[90%] mt-[20px]">
        Find related questions and answers related to how our app works, and how
        you can maximise every feature we offer.
      </p>
      <div className="w-full px-6 max-w-[600px] flex flex-col gap-y-[10px] mt-[30px]">
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-sm sm:text-base md:text-lg text-white rounded-md px-4 py-2">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base px-4 py-2 text-white">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <button className="bg-[#003dcc] px-5 py-2 rounded-[10px] font-medium mt-[20px]">
        See all FAQs
      </button>
      <p className="font-medium text-sm mt-[10px]">
        Contact us at
        <span className="underline mx-1 decoration-offset-[5px] italic">
          uniglow@gmail.com
        </span>
        for more information
      </p>
    </div>
  );
};

export default FAQ;
