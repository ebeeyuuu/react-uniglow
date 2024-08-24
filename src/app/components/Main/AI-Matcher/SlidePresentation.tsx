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
        className="absolute left-[50px] z-40 top-1/2 transform -translate-y-1/2 text-white flex items-center disabled:opacity-70 disabled:cursor-not-allowed max-[1200px]:-translate-y-0 max-[1200px]:left-1/2 max-[1200px]:ml-[-130px] max-[1200px]:bottom-0 max-[1200px]:mt-[40vh] px-5 py-3 h-[100px] rounded-full bg-black/80 hover:bg-[#f4b034] hover:text-black smooth-animation"
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
        className="absolute right-[50px] z-40 top-1/2 transform -translate-y-1/2 text-white flex items-center disabled:opacity-70 disabled:cursor-not-allowed max-[1200px]:-translate-y-0 max-[1200px]:right-1/2 max-[1200px]:mr-[-130px] max-[1200px]:bottom-0 max-[1200px]:mt-[calc(40vh+2px)] px-5 py-3 h-[100px] rounded-full bg-black/80 hover:bg-[#f4b034] hover:text-black smooth-animation"
      >
        <span>Next</span>
        <FaChevronRight className="ml-2" />
      </button>
    </div>
  );
};

export default SlidePresentation;

