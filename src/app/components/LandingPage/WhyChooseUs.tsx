import React, { useState, useCallback, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@/images/17.png";

interface FeatureDetails {
  title: string;
  description: string;
  detailedDescription: string;
}

const features: FeatureDetails[] = [
  {
    title: "Discover Your Perfect Match!",
    description:
      "Uniglow's cutting-edge algorithm analyzes your unique profile and aspirations to reveal your ideal university fit. Say goodbye to endless searching and hello to personalized recommendations that align with your dreams!",
    detailedDescription:
      "Our advanced matching algorithm takes into account your academic achievements, extracurricular activities, career goals, and personal preferences to provide tailored university recommendations. We analyze thousands of data points to ensure you find the perfect fit for your higher education journey.",
  },
  {
    title: "Experience Campus Life from Your Couch!",
    description:
      "Can't visit every campus? No problem! Uniglow brings the campus to you with stunning 360-degree virtual tours. Explore dorms, lecture halls, and student hangouts as if you were really there. Make informed decisions without leaving your home!",
    detailedDescription:
      "Our immersive virtual tours use cutting-edge technology to provide a realistic campus experience. Navigate through key locations, interact with hotspots for additional information, and get a true feel for the campus atmosphere. It's the next best thing to being there in person!",
  },
  {
    title: "Hear It Straight from the Source!",
    description:
      "Uniglow gives you the inside scoop with real, unfiltered reviews from current students and recent grads. Get the authentic lowdown on academics, social life, and everything in between. Don't just choose a university. Choose your future community!",
    detailedDescription:
      "Our platform hosts thousands of verified student reviews, covering every aspect of university life. From academic rigor to campus culture, you'll get honest insights to help you make an informed decision. We also provide tools to connect with current students for personalized advice.",
  },
];

const WhyChooseUs: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetails | null>(
    null,
  );

  const handleLearnMore = useCallback((feature: FeatureDetails) => {
    setSelectedFeature(feature);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedFeature(null);
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [handleClose]);

  const renderFeature = useCallback(
    (feature: FeatureDetails, index: number) => (
      <div
        key={index}
        className="flex-1 mr-4 max-[900px]:mx-auto max-[900px]:mt-4"
      >
        <Accordion
          sx={{
            maxWidth: 300,
            backgroundColor: "rgb(255, 255, 255)",
            color: "black",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center mr-4 flex-row gap-[10px]">
                <div className="text-xl">{index + 1}.</div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="font-semibold text-lg">{feature.title}</div>
            <div className="text-xs mt-[30px]">{feature.description}</div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => handleLearnMore(feature)}
                className="border-2 border-black px-3 py-1 rounded-[10px] text-xs scale-100 hover:scale-110 transition-all ease-in-out duration-300"
              >
                Overview
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    ),
    [handleLearnMore],
  );

  return (
    <div
      className="w-full py-[170px] flex justify-center items-center mt-[300px] relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-pattern bg-opacity-20"></div>
      <div className="flex flex-col justify-center items-center gap-y-[50px] relative z-10">
        <h1 className="text-6xl font-bold max-[700px]:text-4xl relative smooth-animation text-white">
          <span className="underline-container">Why Choose Us?</span>
        </h1>
        <div className="flex flex-row w-2/3 font-semibold max-[900px]:flex-col justify-center">
          {features.map(renderFeature)}
        </div>
      </div>
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 w-full h-full flex items-center justify-center z-50"
          >
            <div className="bg-black/50" onClick={handleClose}>
              <div className="bg-white rounded-lg shadow-xl z-50 p-16 w-[80vw] max-h-[100vh] overflow-y-auto scrollbar-hide flex flex-col gap-y-[20px] relative">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold text-black">
                    {selectedFeature.title}
                  </h2>
                </div>
                <p className="text-black mb-[40px]">
                  {selectedFeature.detailedDescription}
                </p>
                <div className="flex justify-end gap-x-4">
                  <button
                    onClick={handleClose}
                    className="text-black rounded-full px-5 py-3 transition-all duration-300 ease-in-out border-2 border-black scale-100 hover:scale-110"
                  >
                    Close
                  </button>
                  <button className="bg-blue-600 text-white font-medium rounded-full px-5 py-3 border-2 border-blue-600 transition-all duration-300 ease-in-out scale-100 hover:scale-110">
                    Try it out
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhyChooseUs;
