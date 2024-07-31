"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GiVirtualMarker } from "react-icons/gi";
import { FaConnectdevelop, FaNewspaper } from "react-icons/fa";

interface Feature {
  id: string;
  icon: React.ReactElement;
  text: string;
}

const features: Feature[] = [
  {
    id: "box1",
    icon: <GiArtificialIntelligence size={80} />,
    text: "AI Personality Matching: Matches students to universities based on personality and campus culture.",
  },
  {
    id: "box2",
    icon: <GiVirtualMarker size={80} />,
    text: "VR Campus Tours: Offers 360° virtual tours of partner universities.",
  },
  {
    id: "box3",
    icon: <FaConnectdevelop size={80} />,
    text: "Peer Mentor Connection: Links prospective students with current students for personalized advice.",
  },
  {
    id: "box4",
    icon: <FaNewspaper size={80} />,
    text: "Interactive Curriculum Explorer: Visualizes degree paths and their career impacts.",
  },
];

const Features: React.FC = () => {
  const [activeBox, setActiveBox] = useState<string>("");
  const [animatedBox, setAnimatedBox] = useState<string>("");

  const handleBoxClick = useCallback((boxId: string) => {
    setAnimatedBox(boxId);
    setTimeout(() => {
      setActiveBox((prevState) => (prevState === boxId ? "" : boxId));
      setAnimatedBox("");
    }, 500);
  }, []);

  const getBoxContent = useCallback(
    (boxId: string, icon: React.ReactElement, text: string) => (
      <div className="w-full h-full flex items-center justify-center cursor-pointer transition-opacity duration-500 ease-in-out">
        {activeBox === boxId ? (
          <div className="text-center">{text}</div>
        ) : (
          <div className="text-white">{icon}</div>
        )}
      </div>
    ),
    [activeBox]
  );

  return (
    <div className="w-full mt-[500px] flex justify-center items-center flex-row gap-x-[80px] max-[900px]:flex-col-reverse max-[900px]:gap-y-[80px]">
      {/* Grid container for icons */}
      <div className="grid grid-rows-2 grid-cols-2 max-[500px]:grid-rows-4 max-[500px]:grid-cols-1 w-1/2 h-[550px] gap-[20px] max-[900px]:w-[80%]">
        {features.map(({ id, icon, text }) => (
          <div
            key={id}
            className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold overflow-hidden relative gradient-hover ${
              animatedBox === id ? "animate-pulse" : ""
            }`}
            onClick={() => handleBoxClick(id)}
          >
            {getBoxContent(id, icon, text)}
          </div>
        ))}
      </div>

      {/* Text container */}
      <div className="flex flex-col gap-y-[30px] w-1/3 max-[900px]:text-center max-[900px]:w-[80%] max-[900px]:mx-auto">
        <div className="text-5xl font-medium">
          What separates{" "}
          <span
            className="text-[#fd7e00] italic underline decoration-[3px] underline-offset-[3px]"
            style={{ fontWeight: 900 }}
          >
            us
          </span>{" "}
          from <span className="italic font-semibold">the rest</span>
        </div>
        <div>
          The features of Uniglow that allows us to easily help you find the
          university that you so desire.
        </div>
        <button className="bg-[#005ebd] text-white py-2 px-4 rounded-[20px] w-1/2 max-[900px]:mx-auto hover:py-5 transition-all duration-300 ease-in-out">
          <Link href="/pages/signup">Get started</Link>
        </button>
      </div>
    </div>
  );
};

export default Features;
