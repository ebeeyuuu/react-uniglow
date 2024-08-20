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
    <div className="w-full h-[96.6%] ml-[50px] flex flex-col justify-center items-center mt-[2px] max-[1000px]:ml-0 px-[15px] max-[700px]:px-[10px] max-[700px]:py-[15px] relative">
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-[70px] top-1/2 transform -translate-y-1/2 text-white flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
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
        className="absolute right-[70px] top-1/2 transform -translate-y-1/2 text-white flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>Next</span>
        <FaChevronRight className="ml-2" />
      </button>
    </div>
  );
};

export default SlidePresentation;
