import { motion, AnimatePresence } from "framer-motion";
import React, { ReactElement, useCallback, useRef, useState } from "react";

interface SlidePresentationProps {
  numSlides: number;
  children: ReactElement | ReactElement[];
}

const SlidePresentation: React.FC<SlidePresentationProps> = ({
  numSlides,
  children,
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

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      if (!loadedSlides.includes(index)) {
        setLoadedSlides((prev) => [...prev, index]);
      }
    }
  };

  const nextSlide = () => {
    if (currentSlide < numSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
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
    <div className="overflow-hidden w-full h-full flex flex-col justify-center items-center max-[1000px]:ml-0 px-[15px] max-[700px]:px-[10px] max-[700px]:py-[15px] relative">
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

      <div className="absolute bottom-16 left-1/2 bg-black/50 rounded-full py-3 px-5 -translate-x-1/2 z-10">
        {Array.from({ length: numSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full mx-1 mt-1 transition-colors duration-200 ${index === currentSlide
              ? "bg-[#f4b034]"
              : "bg-white hover:bg-[#f4b034]"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidePresentation;
