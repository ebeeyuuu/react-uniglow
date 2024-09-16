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
  const [direction, setDirection] = useState(0); // Track the direction of the slide transition
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
      setDirection(1);
      const nextIndex = currentSlide + 1;
      setCurrentSlide(nextIndex);
      if (!loadedSlides.includes(nextIndex)) {
        setLoadedSlides((prev) => [...prev, nextIndex]);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 2000 : -2000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 2000 : -2000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-[1000px]:ml-0 px-[15px] overflow-hidden max-[700px]:px-[10px] max-[700px]:py-[15px] relative">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute justify-center items-center flex w-full h-full"
        >
          {React.isValidElement(getSlideContent(currentSlide)) ? (
            React.cloneElement(getSlideContent(currentSlide) as ReactElement, {
              slideState: slideStates.current[currentSlide] || {},
              setSlideState: (state: any) => setSlideState(currentSlide, state),
              onNextSlide: nextSlide,
            })
          ) : (
            <div>Blank Slide</div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlidePresentation;
