import React from "react";

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
  return (
    <div>
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <h3>{service.university}</h3>
          <p>{service.university_description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpandingServices;
