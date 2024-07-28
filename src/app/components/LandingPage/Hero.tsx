import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { StaticImageData } from 'next/image';

import image1 from '@/images/2.jpg';
import image2 from '@/images/3.jpg';
import image3 from '@/images/4.jpg';
import image4 from '@/images/5.jpg';
import image5 from '@/images/8.jpg';
import image6 from '@/images/9.jpg';
import image7 from '@/images/10.jpg';
import image8 from '@/images/11.jpg';
import image10 from '@/images/13.jpg';
import image11 from '@/images/16.jpg';

import TrustedCompaniesMarquee from './TrustedCompaniesMarquee';

interface University {
  src: StaticImageData;
  alt: string;
  info: string;
  description: string;
}

const universities: University[] = [
  {
    src: image1,
    alt: "Harvard University",
    info: "Harvard University",
    description: "Founded in 1636, Harvard is the oldest higher education institution in the United States. It's renowned for its influential alumni, world-class faculty, and exceptional research facilities. The university is particularly famous for its law school and business school (Harvard Business School). With an acceptance rate of 4.6%, Harvard is one of the most selective universities globally. Notable alumni include 8 U.S. presidents and 188 living billionaires."
  },
  {
    src: image2,
    alt: "Stanford University",
    info: "Stanford University",
    description: "Located in the heart of Silicon Valley, Stanford University is a powerhouse for innovation and entrepreneurship. It's especially famous for its engineering and computer science programs, which have produced many tech industry leaders. Stanford's acceptance rate is around 4.3%, making it one of the most competitive universities. The university is also known for its strong athletics program and has produced numerous Olympic athletes."
  },
  {
    src: image3,
    alt: "MIT",
    info: "Massachusetts Institute of Technology (MIT)",
    description: "MIT is world-renowned for its STEM programs, particularly in engineering and physical sciences. The university is a leader in research and innovation, with numerous breakthroughs in fields like artificial intelligence, climate adaptation, and cancer research. MIT's acceptance rate is approximately 6.7%. The institution is famous for its hands-on approach to learning, epitomized by its motto, 'Mens et Manus' (Mind and Hand)."
  },
  {
    src: image4,
    alt: "Yale University",
    info: "Yale University",
    description: "Founded in 1701, Yale is known for its strong liberal arts curriculum and its drama and music programs. The Yale School of Drama is particularly prestigious, having produced numerous acclaimed actors. Yale's secret societies, including Skull and Bones, have long been a source of intrigue. With an acceptance rate of about 6.1%, Yale is highly selective. The university is also famous for its extensive library system, which includes over 15 million volumes."
  },
  {
    src: image5,
    alt: "Princeton University",
    info: "Princeton University",
    description: "Princeton is renowned for its commitment to undergraduate education and its beautiful campus architecture. The university is particularly strong in economics, mathematics, and public affairs. Princeton's senior thesis requirement is a distinctive feature of its undergraduate program. With an acceptance rate of 5.8%, it's one of the most selective universities in the world. Notable alumni include numerous U.S. presidents and Supreme Court justices."
  },
  {
    src: image6,
    alt: "Columbia University",
    info: "Columbia University",
    description: "Located in New York City, Columbia University is known for its diverse student body and its strength in fields like journalism, business, and the arts. The Columbia Journalism School is considered one of the best in the world. The university's Core Curriculum, which all undergraduates must complete, is a hallmark of its education. Columbia's acceptance rate is around 5.4%. The university has produced numerous influential alumni, including three U.S. presidents and over 100 Nobel laureates."
  },
  {
    src: image7,
    alt: "University of Chicago",
    info: "University of Chicago",
    description: "The University of Chicago is renowned for its rigorous academic environment and its contributions to economics and the social sciences. It's associated with nearly 100 Nobel laureates. The university is famous for its Core curriculum and its emphasis on critical thinking. UChicago's acceptance rate is about 6.2%. The institution is also known for its distinctive Gothic architecture and its location in the vibrant Hyde Park neighborhood of Chicago."
  },
  {
    src: image8,
    alt: "University of Pennsylvania",
    info: "University of Pennsylvania",
    description: "Founded by Benjamin Franklin, UPenn is known for its multidisciplinary approach and its top-ranked Wharton School of Business. It's one of the few Ivy League schools to offer undergraduate business degrees. Penn's acceptance rate is approximately 7.7%. The university is also famous for its work in medical research and its state-of-the-art hospitals. Penn's campus in Philadelphia offers a unique blend of colonial history and modern innovation."
  },
  {
    src: image11,
    alt: "California Institute of Technology",
    info: "California Institute of Technology (Caltech)",
    description: "Caltech is a world-leading science and engineering institute known for its exceptionally bright students and faculty. Despite its small size, Caltech has produced a high number of Nobel laureates. The university is famous for managing NASA's Jet Propulsion Laboratory. With an acceptance rate of about 6.4%, Caltech is highly selective. The institution is known for its rigorous curriculum and its focus on theoretical and applied sciences."
  },
  {
    src: image10,
    alt: "Duke University",
    info: "Duke University",
    description: "Duke University is renowned for its top-ranked medical school, strong athletics, and beautiful Gothic-style campus. The university is particularly known for its programs in public policy, engineering, and business. Duke's acceptance rate is around 7.8%. The institution is famous for its research initiatives and its interdisciplinary approach to education. Duke's basketball program, the Blue Devils, is one of the most successful in NCAA history."
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
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const expandedVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex flex-row justify-center items-center max-[900px]:flex-col mx-auto">
        <div className="w-[90%] h-[100vh] grid grid-rows-10 grid-cols-11 gap-[20px] mt-[100px] text-black">
          <motion.div className="row-span-3 col-span-3 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(0)}
          >
            <Image src={image1} alt="University 1" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div className="row-span-2 col-span-3 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(1)}
          >
            <Image src={image2} alt="University 2" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out" />
          </motion.div>
          <motion.div className="row-span-2 col-span-2 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(2)}
          >
            <Image src={image3} alt="University 3" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out" />
          </motion.div>
          <motion.div className="row-span-2 col-span-3 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(3)}
          >
            <Image src={image4} alt="University 4" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out" />
          </motion.div>
          <div className="row-span-3 col-span-5 text-white flex justify-center items-center">
            <div className="flex flex-row items-center text-center gap-y-[15px] w-[80%] mx-auto max-[1000px]:flex-col max-[900px]:text-center">
              <div className="mb-4 text-4xl font-bold max-[900px]:text-2xl text-left w-1/3 max-[1000px]:text-center max-[1000px]:w-full">
                Find Your Dream University
              </div>
              <div className="flex flex-col w-5/12 ml-auto max-[1000px]:w-full">
                <div className="mb-2 text-right max-[900px]:text-sm max-[1000px]:text-center">
                  Discover your <span className="font-bold italic">dream</span> and explore the <span className="font-bold italic">world's opportunities!</span>
                </div>
                <div className="px-3 py-3 border border-[#0070e0] hover:bg-[#0070e0] hover:text-black mt-[15px] text-xs flex justify-end font-medium ml-auto max-[1000px]:ml-0 max-[1000px]:justify-center smooth-animation">
                  <Link href="/pages/signup">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <motion.div className="row-span-2 col-span-3 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(4)}
          >
            <Image src={image5} alt="University 5" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div className="row-span-2 col-span-3 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(5)}
          >
            <Image src={image6} alt="University 6" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div className="row-span-3 col-span-3 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(6)}
          >
            <Image src={image7} alt="University 7" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div className="row-span-2 col-span-3 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(7)}
          >
            <Image src={image8} alt="University 8" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div className="row-span-2 col-span-2 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(8)}
          >
            <Image src={image11} alt="University 9" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
          </motion.div>
          <motion.div className="row-span-2 col-span-3 cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => handleImageClick(9)}
          >
            <Image src={image10} alt="University 10" className="h-[100%] w-[100%] object-cover rounded-[10px] transition-all duration-300 ease-in-out"/>
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
            <div className="relative w-[80vw] h-[70vh] rounded-[10px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <Image
                src={universities[expandedImage].src}
                alt={universities[expandedImage].alt}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="p-4 self-end">
                  <button
                    className="bg-white text-black px-5 py-2 rounded-full z-10 border border-black font-semibold hover:px-7 smooth-animation"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent h-1/2 p-4">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-2xl font-bold mb-2 text-white">{universities[expandedImage].info}</h2>
                    <p className="text-white text-sm">{universities[expandedImage].description}</p>
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