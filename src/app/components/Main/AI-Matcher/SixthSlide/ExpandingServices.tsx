import React, { useState, useEffect, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const leftServices = services.filter((_, index) => index % 2 === 0);
  const rightServices = services.filter((_, index) => index % 2 !== 0);

  useEffect(() => {
    const container = containerRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    if (!container || !leftColumn || !rightColumn) return;

    const handleScroll = () => {
      const scrollPercentage =
        container.scrollTop / (container.scrollHeight - container.clientHeight);
      const maxMove = container.scrollHeight - leftColumn.clientHeight;

      leftColumn.style.transform = `translateY(${scrollPercentage * maxMove * 0.5}px)`;
      rightColumn.style.transform = `translateY(${scrollPercentage * maxMove}px)`;
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
    >
      <div className="relative w-full" style={{ height: "200%" }}>
        <div
          ref={leftColumnRef}
          className="absolute left-0 top-0 w-1/2 p-10 space-y-6"
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
        </div>

        <div
          ref={rightColumnRef}
          className="absolute right-0 top-0 w-1/2 p-10 space-y-6"
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
        </div>
      </div>
    </div>
  );
};

export default ExpandingServices;
