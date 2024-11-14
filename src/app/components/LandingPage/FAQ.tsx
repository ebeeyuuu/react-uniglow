"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const faqs = [
  {
    question: "How does Uniglow's AI matching system work?",
    answer: "Our AI analyzes multiple factors including your academic performance, extracurricular activities, career goals, and preferences to match you with universities where you have the highest chance of acceptance and success. The system continuously learns and improves its recommendations based on successful admissions data."
  },
  {
    question: "What services are included in Uniglow's packages?",
    answer: "Our comprehensive packages include AI university matching, personalized counseling, application strategy development, essay review and editing, interview preparation, and 24/7 support. We also offer additional services such as visa assistance and pre-departure orientation."
  },
  {
    question: "What is Uniglow's success rate?",
    answer: "We maintain a 95% success rate in helping students get accepted to their top-choice universities. This high success rate is achieved through our combination of AI-powered matching, expert guidance, and comprehensive application support."
  },
  {
    question: "How early should I start working with Uniglow?",
    answer: "We recommend starting at least 12 months before your intended enrollment date. This gives us enough time to develop a strong application strategy, prepare all necessary documents, and meet application deadlines. However, we also offer expedited services for students with shorter timelines."
  },
  {
    question: "Does Uniglow offer financial aid guidance?",
    answer: "Yes, we provide comprehensive financial aid guidance including scholarship searches, application assistance, and advice on funding options. Our AI system also considers your budget when recommending universities and helps identify institutions offering the best financial aid packages."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="bg-white/[0.02] rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden">
      <button
        className="w-full px-6 py-6 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg font-semibold">{question}</span>
        <BsChevronDown className={`w-3 h-3 lg:w-5 lg:h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 text-white/60">
          {answer}
        </div>
      </div>
    </div>
  );
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-3xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ;
