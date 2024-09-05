import React, { useState, useRef, useCallback, ReactElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface SlidePresentationProps {
  numSlides: number;
  children: ReactElement | ReactElement[];
  canProceed?: () => boolean;
}

const SlidePresentation: React.FC<SlidePresentationProps> = ({
  numSlides,
  children,
  canProceed = () => true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<number[]>([0]);
  const slideStates = useRef<Record<number, any>>({});

  const getSlideContent = useCallback(
    (index: number) => {
      const childArray = React.Children.toArray(children);
      return index < childArray.length ? childArray[index] : null;
    },
    [children],
  );

  const setSlideState = useCallback((index: number, state: any) => {
    slideStates.current[index] = state;
  }, []);

  const nextSlide = () => {
    if (currentSlide < numSlides - 1) {
      const nextIndex = currentSlide + 1;
      setCurrentSlide(nextIndex);
      if (!loadedSlides.includes(nextIndex)) {
        setLoadedSlides((prev) => [...prev, nextIndex]);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-[1000px]:ml-0 px-[15px] overflow-hidden max-[700px]:px-[10px] max-[700px]:py-[15px] relative">
      <AnimatePresence>
        {loadedSlides.map((slideIndex) => (
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: slideIndex > currentSlide ? 100 : -100 }}
            animate={{
              opacity: slideIndex === currentSlide ? 1 : 0,
              x:
                slideIndex === currentSlide
                  ? 0
                  : slideIndex > currentSlide
                    ? 100
                    : -100,
            }}
            exit={{ opacity: 0, x: slideIndex > currentSlide ? 100 : -100 }}
            transition={{ duration: 0.5 }}
            style={{ display: slideIndex === currentSlide ? "flex" : "none" }}
            className="justify-center items-center w-full h-[calc(100%-80px)]"
          >
            {React.isValidElement(getSlideContent(slideIndex)) ? (
              React.cloneElement(getSlideContent(slideIndex) as ReactElement, {
                slideState: slideStates.current[slideIndex] || {},
                setSlideState: (state: any) => setSlideState(slideIndex, state),
                onNextSlide: nextSlide,
              })
            ) : (
              <div>Blank Slide</div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="flex justify-center flex-row w-full mt-4 absolute z-40 bottom-8 left-0 right-0 gap-x-4 px-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="text-white flex items-center disabled:opacity-70 disabled:cursor-not-allowed px-5 py-3 h-[50px] rounded-xl bg-black/80 hover:bg-[#f4b034] border-2 border-[#f4b034] hover:text-black smooth-animation"
        >
          <FaChevronLeft className="mr-2" />
          <span>Prev</span>
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === numSlides - 1 || !canProceed()}
          className="text-white flex items-center disabled:opacity-70 disabled:cursor-not-allowed px-5 py-3 h-[50px] rounded-xl bg-black/80 hover:bg-[#f4b034] border-2 border-[#f4b034] hover:text-black smooth-animation"
        >
          <span>Next</span>
          <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SlidePresentation;
