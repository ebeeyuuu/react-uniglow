import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ServiceItem = {
  name: string;
  description: string;
  university: string;
  university_description: string;
};

interface ExpandingServicesProps {
  services: ServiceItem[];
}

const ExpandingServices: React.FC<ExpandingServicesProps> = ({ services }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const leftServicesY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]); // Move left column down faster
  const rightServicesY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Move right column down slower

  const leftServices = services.filter((_, index) => index % 2 === 0);
  const rightServices = services.filter((_, index) => index % 2 !== 0);

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="relative w-full h-screen">
        <motion.div
          className="absolute left-0 top-0 w-1/2 inset-0 p-10 space-y-6 transform"
          style={{ y: leftServicesY }}
        >
          {leftServices.map((service, index) => (
            <div
              key={index}
              className="service-item border border-white rounded-xl p-10 gap-4 min-h-96 hover:min-h-[600px] transition-all duration-500 ease-in-out bg-black"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className="text-xl font-bold">{service.name}</h2>
              <p className="text-lg font-medium">{service.description}</p>
              {hoveredIndex === index && (
                <div className="mt-4">
                  <h2 className="text-xl font-bold">{service.university}</h2>
                  <p className="text-lg font-medium">
                    {service.university_description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
        <motion.div
          className="absolute right-0 top-0 w-1/2 p-10 space-y-6 z-10 transform"
          style={{ y: rightServicesY }}
        >
          {rightServices.map((service, index) => (
            <div
              key={index}
              className="service-item border border-white rounded-xl p-10 gap-4 min-h-96 bg-black"
            >
              <h2 className="text-xl font-bold">{service.name}</h2>
              <p className="text-lg font-medium">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandingServices;
