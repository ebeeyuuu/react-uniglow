"use client";

import React, { useState, useCallback, useEffect } from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GiVirtualMarker } from "react-icons/gi";
import { FaConnectdevelop, FaNewspaper } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LoadingButton from "@/app/components/LoadingButton";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const router = useRouter();

  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    router.push("/pages/signup");
  };

  useEffect(() => {
    AOS.init();
  }, []);

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
    [activeBox],
  );

  return (
    <div className="w-full mt-[300px] flex justify-center items-center flex-row gap-x-[80px] max-[900px]:flex-col-reverse max-[900px]:gap-y-[80px]">
      <div
        className="grid grid-rows-2 grid-cols-2 max-[500px]:grid-rows-4 max-[500px]:grid-cols-1 w-1/2 h-[550px] gap-[20px] max-[900px]:w-[80%]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {features.map(({ id, icon, text }) => (
          <div
            key={id}
            className={`bg-[#003061] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold overflow-hidden relative gradient-hover ${animatedBox === id ? "animate-pulse" : ""
              }`}
            onClick={() => handleBoxClick(id)}
          >
            {getBoxContent(id, icon, text)}
          </div>
        ))}
      </div>

      <div
        className="flex flex-col gap-y-[30px] w-1/3 max-[900px]:text-center max-[900px]:w-[80%] max-[900px]:mx-auto"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <div className="text-5xl font-medium">
          <div>
            What separates
            <span
              className="text-[#f4b034] italic mr-[20px] ml-[10px]"
              style={{ fontWeight: 900 }}
            >
              us
            </span>
          </div>
          <div>
            from <span className="italic font-semibold">the rest</span>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          The features of Uniglow that allows us to easily help you find the
          university that you so desire.
        </div>
        <LoadingButton
          className="bg-[#003dcc] text-white py-3 rounded-[20px] w-[130px] max-[900px]:mx-auto hover:py-4 transition-all duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="450"
          onClick={handleClick}
          loadingColorHex="#FFF"
        >
          Get started
        </LoadingButton>
      </div>
    </div>
  );
};

export default Features;
