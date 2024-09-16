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
  const { scrollY } = useScroll();

  // Separate transforms for left and right columns
  const y1 = useTransform(scrollY, [0, 2000], [0, -600]); // Left column scrolls faster and lower
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]); // Right column scrolls slower and higher

  const leftServices = services.filter((_, index) => index % 2 === 0);
  const rightServices = services.filter((_, index) => index % 2 !== 0);

  return (
    <div className="w-full h-full flex gap-6 p-10 overflow-y-auto overflow-x-hidden scrollbar-hide">
      {/* Left column with faster scrolling */}
      <motion.div className="w-1/2 grid grid-cols-1 gap-6" style={{ y: y1 }}>
        {leftServices.map((service, index) => (
          <div
            key={index}
            className="service-item border border-white rounded-xl p-10 gap-4 min-h-96"
          >
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="text-lg font-medium">{service.description}</p>
          </div>
        ))}
      </motion.div>

      {/* Right column with slower scrolling */}
      <motion.div className="w-1/2 grid grid-cols-1 gap-6" style={{ y: y2 }}>
        {rightServices.map((service, index) => (
          <div
            key={index}
            className="service-item border border-white rounded-xl p-10 gap-4 min-h-96"
          >
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="text-lg font-medium">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExpandingServices;
