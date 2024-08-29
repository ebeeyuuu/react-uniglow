import React, { useState, Children, cloneElement, ReactElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface SlidePresentationProps {
  numSlides: number;
  children: ReactElement | ReactElement[];
}

const SlidePresentation: React.FC<SlidePresentationProps> = ({
  numSlides,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);

  const slideContents: (ReactElement | null)[] = Array(numSlides).fill(null);
  Children.forEach(children, (child, index) => {
    if (index < numSlides && React.isValidElement(child)) {
      slideContents[index] = child;
    }
  });

  const nextSlide = () => {
    setPrevSlideIndex(currentSlide);
    if (currentSlide < numSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    setPrevSlideIndex(currentSlide);
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-[1000px]:ml-0 px-[15px] overflow-hidden max-[700px]:px-[10px] max-[700px]:py-[15px] relative">
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute z-40 left-[30%] transform text-white flex items-center disabled:opacity-70 disabled:cursor-not-allowed px-5 py-3 h-[50px] rounded-xl bg-black/80 hover:bg-[#f4b034] bottom-0 -translate-y-0 top-[80%] mt-[40px] border-2 border-[#f4b034] hover:text-black smooth-animation"
      >
        <FaChevronLeft className="mr-2" />
        <span>Prev</span>
      </button>
      <motion.div
        key={currentSlide}
        initial={{
          x: currentSlide === 0 || currentSlide < prevSlideIndex ? -100 : 100,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: currentSlide < prevSlideIndex ? 100 : -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center w-full h-full"
      >
        {slideContents[currentSlide] ? (
          cloneElement(slideContents[currentSlide], { key: currentSlide })
        ) : (
          <div key={currentSlide}>Blank Slide</div>
        )}
      </motion.div>

      <button
        onClick={nextSlide}
        disabled={currentSlide === numSlides - 1}
        className="absolute right-[30%] z-40 transform text-white flex items-center disabled:opacity-70 disabled:cursor-not-allowed px-5 py-3 h-[50px] rounded-xl bg-black/80 bottom-0 -translate-y-0 top-[80%] hover:bg-[#f4b034] border-2 border-[#f4b034] mt-[40px] hover:text-black smooth-animation"
      >
        <span>Next</span>
        <FaChevronRight className="ml-2" />
      </button>
    </div>
  );
};

export default SlidePresentation;

