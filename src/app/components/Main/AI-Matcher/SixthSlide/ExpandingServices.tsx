import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Confirm from "./Confirm";
import Checkmark from "./Checkmark";

type ServiceItem = {
  name: string;
  description: string;
  university: string;
  university_description: string;
};

interface ExpandingServicesProps {
  services: ServiceItem[];
  leftColumnCount: number; // New prop to control the number of items in the left column
  onConfirm: () => void;
}

const ExpandingServices: React.FC<ExpandingServicesProps> = ({
  services,
  leftColumnCount,
  onConfirm,
}) => {
  const rightColumnHeightRef = useRef<number>(0);
  const leftColumnHeightRef = useRef<number>(0);
  const averageHeightRef = useRef<number>(0);
  const [confirmPosition, setConfirmPosition] = useState(0);

  const [leftHoveredIndex, setLeftHoveredIndex] = useState<number | null>(null);
  const [rightHoveredIndex, setRightHoveredIndex] = useState<number | null>(
    null,
  );

  const [selectedLeftServices, setSelectedLeftServices] = useState<number[]>(
    [],
  );
  const [selectedRightServices, setSelectedRightServices] = useState<number[]>(
    [],
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wrapper: containerRef.current,
      content: containerRef.current,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      if (leftColumnRef.current) {
        leftColumnRef.current.style.transform = `translateY(${-scroll * 2}px)`;
      }
      if (rightColumnRef.current) {
        rightColumnRef.current.style.transform = `translateY(${-scroll * 0.5}px)`;
      }
      if (confirmRef.current) {
        confirmRef.current.style.transform = `translateY(${-scroll - 500}px)`;
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (leftColumnRef.current && rightColumnRef.current) {
        rightColumnHeightRef.current = rightColumnRef.current.scrollHeight;
        leftColumnHeightRef.current = leftColumnRef.current.scrollHeight;
        averageHeightRef.current =
          (leftColumnHeightRef.current + rightColumnHeightRef.current) / 2;
        setConfirmPosition(
          Math.max(0, averageHeightRef.current - window.innerHeight),
        );
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [services]);

  const leftServices = services.slice(0, leftColumnCount);
  const rightServices = services.slice(leftColumnCount);

  const toggleSelectService = (index: number, isLeft: boolean) => {
    if (isLeft) {
      setSelectedLeftServices((prevSelected) =>
        prevSelected.includes(index)
          ? prevSelected.filter((i) => i !== index)
          : [...prevSelected, index],
      );
    } else {
      setSelectedRightServices((prevSelected) =>
        prevSelected.includes(index)
          ? prevSelected.filter((i) => i !== index)
          : [...prevSelected, index],
      );
    }
  };

  const renderService = (
    service: ServiceItem,
    index: number,
    isLeft: boolean,
  ) => {
    const isSelected = isLeft
      ? selectedLeftServices.includes(index)
      : selectedRightServices.includes(index);

    return (
      <div
        key={index}
        className="rounded-xl p-10 gap-4 transition-all duration-500 ease-in-out bg-[#031f66] relative overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          isLeft ? setLeftHoveredIndex(index) : setRightHoveredIndex(index);
        }}
        onMouseLeave={() => {
          isLeft ? setLeftHoveredIndex(null) : setRightHoveredIndex(null);
        }}
        onClick={() => toggleSelectService(index, isLeft)}
      >
        <h2 className="text-lg md:text-xl font-bold">{service.name}</h2>
        <p className="text-sm md:text-base font-light mt-4">
          {service.description}
        </p>
        <motion.div
          className="mt-4"
          initial={{ height: 0 }}
          animate={{
            height: isLeft
              ? leftHoveredIndex === index
                ? "auto"
                : 0
              : rightHoveredIndex === index
                ? "auto"
                : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {(isLeft && leftHoveredIndex === index) ||
              (!isLeft && rightHoveredIndex === index) ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold">{service.university}</h2>
                <p className="text-lg font-light mt-4">
                  {service.university_description}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>

        <Checkmark isSelected={isSelected} />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden flex justify-center"
    >
      <div className="relative w-full" style={{ height: "300vh" }}>
        <div
          ref={leftColumnRef}
          className="absolute left-0 top-0 pt-10 pl-10 pr-3 w-1/2 space-y-6"
          style={{ willChange: "transform" }}
        >
          {leftServices.map((service, index) =>
            renderService(service, index, true),
          )}
        </div>
        <div
          ref={rightColumnRef}
          className="absolute right-0 top-0 pt-10 pr-10 pl-3 w-1/2 space-y-6 z-10"
          style={{ willChange: "transform" }}
        >
          {rightServices.map((service, index) =>
            renderService(service, index, false),
          )}
        </div>
      </div>

      <div
        ref={confirmRef}
        style={{
          position: "fixed",
          bottom: `${Math.sqrt(confirmPosition) - confirmPosition * 0.8}px`,
          transition: "all 0.1s ease-in-out",
        }}
      >
        <Confirm
          count={selectedLeftServices.length + selectedRightServices.length}
          maxCount={leftServices.length + rightServices.length}
          onConfirm={onConfirm}
        />
      </div>
    </div>
  );
};

export default ExpandingServices;
