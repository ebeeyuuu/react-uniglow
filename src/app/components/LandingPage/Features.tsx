"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiVirtualbox } from "react-icons/si";
import { FaConnectdevelop, FaNewspaper } from "react-icons/fa";

const Features = () => {
  const [activeBox, setActiveBox] = useState('');
  const [animatedBox, setAnimatedBox] = useState('');

  const handleBoxClick = (boxId: string) => {
    setAnimatedBox(boxId);
    setTimeout(() => {
      setActiveBox(prevState => prevState === boxId ? '' : boxId);
      setAnimatedBox('');
    }, 500);
  };

  const getBoxContent = (boxId: string, icon: React.ReactElement, text: string) => {
    return (
      <div className="w-full h-full flex items-center justify-center cursor-pointer transition-opacity duration-500 ease-in-out">
        {activeBox === boxId ? (
          <div className="text-center">{text}</div>
        ) : (
          <div className="text-white">{icon}</div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full mt-[500px] flex justify-center items-center flex-row gap-x-[70px] max-[900px]:flex-col max-[900px]:gap-y-[70px]">
      {/* Text container */}
      <div className="flex flex-col gap-y-[30px] w-1/3 max-[900px]:text-center max-[900px]:w-[80%] max-[900px]:mx-auto">
        <div className="text-5xl" style={{ fontWeight: 600 }}>
          What separates <span className="text-[#e17100] italic underline decoration-[3px] underline-offset-[3px]" style={{ fontWeight: 900 }}>us</span> from <span className="text-[#813e00]" style={{ fontWeight: 700 }}>the rest</span>
        </div>
        <div>
          The features of Uniglow that allows us to easily help you find the university that you so desire.
        </div>
        <button className="bg-[#005ebd] text-white py-2 px-4 rounded-[20px] w-1/2 max-[900px]:mx-auto hover:py-3 transition-all duration-300 ease-in-out">
          <Link href="/pages/signup">Get started</Link>
        </button>
      </div>
      
      {/* Grid container for icons */}
      <div className="grid grid-rows-2 grid-cols-2 max-[500px]:grid-rows-4 max-[500px]:grid-cols-1 w-1/2 h-[50vh] gap-[20px] max-[900px]:w-[80%]">
        {/* Box 1: Artificial Intelligence */}
        <div
          className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold overflow-hidden ${animatedBox === 'box1' ? 'animate-pulse' : ''}`}
          onClick={() => handleBoxClick('box1')}
        >
          {getBoxContent('box1', <GiArtificialIntelligence size={70} />, "AI Personality Matching: Matches students to universities based on personality and campus culture.")}
        </div>

        {/* Box 2: Virtual Box */}
        <div
          className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold overflow-hidden ${animatedBox === 'box2' ? 'animate-pulse' : ''}`}
          onClick={() => handleBoxClick('box2')}
        >
          {getBoxContent('box2', <SiVirtualbox size={70} />, "VR Campus Tours: Offers 360° virtual tours of partner universities.")}
        </div>

        {/* Box 3: Connect Develop */}
        <div
          className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold overflow-hidden ${animatedBox === 'box3' ? 'animate-pulse' : ''}`}
          onClick={() => handleBoxClick('box3')}
        >
          {getBoxContent('box3', <FaConnectdevelop size={70} />, "Peer Mentor Connection: Links prospective students with current students for personalized advice.")}
        </div>

        {/* Box 4: Newspaper */}
        <div
          className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold overflow-hidden ${animatedBox === 'box4' ? 'animate-pulse' : ''}`}
          onClick={() => handleBoxClick('box4')}
        >
          {getBoxContent('box4', <FaNewspaper size={70} />, "Interactive Curriculum Explorer: Visualizes degree paths and their career impacts.")}
        </div>
      </div>
    </div>
  );
};

export default Features;