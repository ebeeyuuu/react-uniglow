"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import harvard from "@/images/harvard.jpg";
import stanford from "@/images/3.jpg";
import mit from "@/images/4.jpg";
import yale from "@/images/5.jpg";
import princeton from "@/images/8.jpg";
import columbia from "@/images/9.jpg";
import chicago from "@/images/10.jpg";
import upenn from "@/images/11.jpg";
import duke from "@/images/13.jpg";
import caltech from "@/images/16.jpg";

import TrustedCompaniesMarquee from "./TrustedCompaniesMarquee";

interface University {
  src: StaticImageData;
  alt: string;
  info: string;
  description: string;
}

const universities: University[] = [
  {
    src: harvard,
    alt: "Harvard University",
    info: "Harvard University",
    description:
      "Founded in 1636, Harvard is the oldest higher education institution in the United States. It's renowned for its influential alumni, world-class faculty, and exceptional research facilities. The university is particularly famous for its law school and business school (Harvard Business School). With an acceptance rate of 4.6%, Harvard is one of the most selective universities globally. Notable alumni include 8 U.S. presidents and 188 living billionaires.",
  },
  {
    src: stanford,
    alt: "Stanford University",
    info: "Stanford University",
    description:
      "Located in the heart of Silicon Valley, Stanford University is a powerhouse for innovation and entrepreneurship. It's especially famous for its engineering and computer science programs, which have produced many tech industry leaders. Stanford's acceptance rate is around 4.3%, making it one of the most competitive universities. The university is also known for its strong athletics program and has produced numerous Olympic athletes.",
  },
  {
    src: mit,
    alt: "MIT",
    info: "Massachusetts Institute of Technology (MIT)",
    description:
      "MIT is world-renowned for its STEM programs, particularly in engineering and physical sciences. The university is a leader in research and innovation, with numerous breakthroughs in fields like artificial intelligence, climate adaptation, and cancer research. MIT's acceptance rate is approximately 6.7%. The institution is famous for its hands-on approach to learning, epitomized by its motto, 'Mens et Manus' (Mind and Hand).",
  },
  {
    src: yale,
    alt: "Yale University",
    info: "Yale University",
    description:
      "Founded in 1701, Yale is known for its strong liberal arts curriculum and its drama and music programs. The Yale School of Drama is particularly prestigious, having produced numerous acclaimed actors. Yale's secret societies, including Skull and Bones, have long been a source of intrigue. With an acceptance rate of about 6.1%, Yale is highly selective. The university is also famous for its extensive library system, which includes over 15 million volumes.",
  },
  {
    src: princeton,
    alt: "Princeton University",
    info: "Princeton University",
    description:
      "Princeton is renowned for its commitment to undergraduate education and its beautiful campus architecture. The university is particularly strong in economics, mathematics, and public affairs. Princeton's senior thesis requirement is a distinctive feature of its undergraduate program. With an acceptance rate of 5.8%, it's one of the most selective universities in the world. Notable alumni include numerous U.S. presidents and Supreme Court justices.",
  },
  {
    src: columbia,
    alt: "Columbia University",
    info: "Columbia University",
    description:
      "Located in New York City, Columbia University is known for its diverse student body and its strength in fields like journalism, business, and the arts. The Columbia Journalism School is considered one of the best in the world. The university's Core Curriculum, which all undergraduates must complete, is a hallmark of its education. Columbia's acceptance rate is around 5.4%. The university has produced numerous influential alumni, including three U.S. presidents and over 100 Nobel laureates.",
  },
  {
    src: chicago,
    alt: "University of Chicago",
    info: "University of Chicago",
    description:
      "The University of Chicago is renowned for its rigorous academic environment and its contributions to economics and the social sciences. It's associated with nearly 100 Nobel laureates. The university is famous for its Core curriculum and its emphasis on critical thinking. UChicago's acceptance rate is about 6.2%. The institution is also known for its distinctive Gothic architecture and its location in the vibrant Hyde Park neighborhood of Chicago.",
  },
  {
    src: upenn,
    alt: "University of Pennsylvania",
    info: "University of Pennsylvania",
    description:
      "Founded by Benjamin Franklin, UPenn is known for its multidisciplinary approach and its top-ranked Wharton School of Business. It's one of the few Ivy League schools to offer undergraduate business degrees. Penn's acceptance rate is approximately 7.7%. The university is also famous for its work in medical research and its state-of-the-art hospitals. Penn's campus in Philadelphia offers a unique blend of colonial history and modern innovation.",
  },
  {
    src: caltech,
    alt: "California Institute of Technology",
    info: "California Institute of Technology (Caltech)",
    description:
      "Caltech is a world-leading science and engineering institute known for its exceptionally bright students and faculty. Despite its small size, Caltech has produced a high number of Nobel laureates. The university is famous for managing NASA's Jet Propulsion Laboratory. With an acceptance rate of about 6.4%, Caltech is highly selective. The institution is known for its rigorous curriculum and its focus on theoretical and applied sciences.",
  },
  {
    src: duke,
    alt: "Duke University",
    info: "Duke University",
    description:
      "Duke University is renowned for its top-ranked medical school, strong athletics, and beautiful Gothic-style campus. The university is particularly known for its programs in public policy, engineering, and business. Duke's acceptance rate is around 7.8%. The institution is famous for its research initiatives and its interdisciplinary approach to education. Duke's basketball program, the Blue Devils, is one of the most successful in NCAA history.",
  },
];

const Hero: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setExpandedImage(index);
  };

  const handleClose = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const imageVariants = {
    initial: { scale: 1, filter: 'grayscale(100%) brightness(70%)' },
    hover: { scale: 1.08, filter: 'grayscale(0%) brightness(100%)' },
  };

  const expandedVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex flex-row justify-center items-center max-[900px]:flex-col mx-auto">
        <div className="w-[90%] h-auto grid grid-rows-11 grid-cols-11 gap-[20px] mt-[100px] text-black max-[900px]:gap-[15px] max-[700px]:grid-rows-none max-[700px]:grid-cols-3 max-[700px]:gap-[10px]">
          <motion.div
            className="row-span-3 col-span-3 max-[700px]:row-span-1 max-[700px]:col-span-2 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(0)}
          >
            <Image
              src={harvard}
              alt="University 1"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div
            className="row-span-2 col-span-3 max-[700px]:row-span-1 max-[700px]:col-span-1 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(1)}
          >
            <Image
              src={stanford}
              alt="University 2"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div
            className="row-span-2 col-span-2 max-[700px]:row-span-1 max-[700px]:col-span-1 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(2)}
          >
            <Image
              src={mit}
              alt="University 3"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div
            className="row-span-2 col-span-3 max-[700px]:row-span-1 max-[700px]:col-span-2 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(3)}
          >
            <Image
              src={yale}
              alt="University 4"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <div className="row-span-3 col-span-5 max-[700px]:row-auto max-[700px]:col-span-3 text-white flex justify-center items-center">
            <div className="flex flex-row items-center text-center gap-y-[15px] w-[80%] mx-auto max-[1000px]:flex-col max-[900px]:text-center max-[900px]:my-[100px]">
              <div className="mb-4 max-[1200px]:text-2xl max-[2000px]:text-3xl max-[4000px]:text-4xl font-bold text-left w-1/3 max-[1000px]:text-center max-[1000px]:w-full">
                Find Your Dream University
              </div>
              <div className="flex flex-col w-5/12 ml-auto max-[1000px]:w-full">
                <div className="mb-2 text-right max-[1000px]:text-center max-[1200px]:text-xs max-[2000px]:text-sm max-[4000px]:text-base">
                  Discover your <span className="font-bold italic mx-[5px]">dream</span>
                  and explore the
                  <span className="font-bold italic mx-[5px]">
                    world's opportunities!
                  </span>
                </div>
                <div className="px-3 py-3 border-2 border-[#4f46e5] hover:bg-[#4f46e5] mt-[15px] text-xs flex justify-end font-medium ml-auto max-[1000px]:ml-0 max-[1000px]:justify-center smooth-animation max-[900px]:w-[150px] max-[900px]:mx-auto">
                  <Link href="/pages/signup">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="row-span-2 col-span-3 max-[700px]:row-span-1 max-[700px]:col-span-3 max-[700px]:h-[150px] max-[700px]:-order-1"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(4)}
          >
            <Image
              src={princeton}
              alt="University 5"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div
            className="row-span-2 col-span-3 max-[700px]:row-span-1 max-[700px]:col-span-1 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(5)}
          >
            <Image
              src={columbia}
              alt="University 6"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div
            className="row-span-3 col-span-3 max-[700px]:row-span-1 max-[700px]:col-span-2 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(6)}
          >
            <Image
              src={chicago}
              alt="University 7"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div
            className="row-span-2 col-span-3 max-[700px]:row-span-1 max-[700px]:col-span-2 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(7)}
          >
            <Image
              src={upenn}
              alt="University 8"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div
            className="row-span-2 col-span-2 max-[700px]:row-span-1 max-[700px]:col-span-1 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(8)}
          >
            <Image
              src={caltech}
              alt="University 9"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div
            className="row-span-2 col-span-3 max-[700px]:row-span-1 max-[700px]:col-span-3 max-[700px]:h-[150px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(9)}
          >
            <Image
              src={duke}
              alt="University 10"
              className="object-center h-full w-full object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {expandedImage !== null && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={expandedVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
            onClick={handleClose}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div
              className="relative w-[80vw] h-[70vh] rounded-[10px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={universities[expandedImage].src}
                alt={universities[expandedImage].alt}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="p-4 self-end">
                  <button
                    className="bg-white text-black px-5 py-2 rounded-full z-10 border-2 border-black font-semibold hover:px-7 smooth-animation"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent h-1/2 p-4">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-2xl font-bold mb-2 text-white">
                      {universities[expandedImage].info}
                    </h2>
                    <p className="text-white text-sm">
                      {universities[expandedImage].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <TrustedCompaniesMarquee />
    </div>
  );
};

export default Hero;
