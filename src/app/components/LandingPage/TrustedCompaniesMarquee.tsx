import React, { useState, useEffect, useCallback } from "react";
import Marquee from "react-fast-marquee";
import { FaHandshake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Company {
  name: string;
  description: string;
}

const companies: Company[] = [
  {
    name: "Harvard",
    description:
      "Harvard collaborates with UniGlow to provide exclusive resources and insights into their admissions process, helping students prepare more effectively for Ivy League applications.",
  },
  {
    name: "Khan Academy",
    description:
      "Khan Academy partners with UniGlow to offer free, world-class education resources to students, supplementing UniGlow's university preparation services.",
  },
  {
    name: "U.S. Department of Education",
    description:
      "The U.S. Department of Education recognizes UniGlow as a valuable resource for students seeking higher education, providing up-to-date information on federal education policies and financial aid.",
  },
  {
    name: "Stanford",
    description:
      "Stanford University works with UniGlow to showcase its cutting-edge research opportunities and innovative programs, attracting top talent through the platform.",
  },
  {
    name: "MIT",
    description:
      "MIT collaborates with UniGlow to highlight its world-renowned STEM programs and research opportunities, helping to connect with aspiring scientists and engineers globally.",
  },
];

const TrustedCompaniesMarquee: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleCompanyClick = useCallback((company: Company) => {
    setSelectedCompany(company);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedCompany(null);
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (selectedCompany) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedCompany, handleClose]);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-[40px] mt-[200px] max-[900px]:mt-[400px]">
      <div className="text-5xl max-[900px]:text-3xl font-semibold flex justify-center items-center flex-row gap-x-[20px]">
        <FaHandshake size={50} className="text-[#fcec5f]" />
        Trusted by:
      </div>
      <div className="w-1/2 font-medium max-[900px]:w-4/5">
        <Marquee
          pauseOnHover={true}
          speed={60}
          direction="left"
          className="font-semibold text-xl"
          gradient={true}
          gradientColor="#020202"
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="mr-[40px] px-3 py-3 hover:bg-white hover:text-black smooth-animation rounded-[10px] cursor-pointer"
              onClick={() => handleCompanyClick(company)}
            >
              {company.name}
            </div>
          ))}
        </Marquee>
      </div>
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={handleClose}
            ></div>
            <div className="bg-white rounded-lg shadow-lg z-50 p-10 w-[40vw] max-w-[90vw] max-h-[80vh] overflow-auto flex flex-col gap-y-[20px] relative">
              <h2 className="text-2xl font-bold text-black">
                {selectedCompany.name}
              </h2>
              <p className="text-black mb-[40px]">
                {selectedCompany.description}
              </p>
              <button
                onClick={handleClose}
                className="absolute bottom-[20px] right-[40px] text-black border-black border rounded-full px-3 py-2"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrustedCompaniesMarquee;
