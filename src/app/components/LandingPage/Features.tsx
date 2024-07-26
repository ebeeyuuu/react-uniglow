"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiVirtualbox } from "react-icons/si";
import { FaConnectdevelop, FaNewspaper } from "react-icons/fa";

const Features = () => {
  const [iconText, setIconText] = useState('');
  const [iconComponent, setIconComponent] = useState<React.ReactElement | null>(null);
  const [animatedBox, setAnimatedBox] = useState('');

  const handleIconClick = (text: string, component: React.ReactElement, boxId: string) => {
    setAnimatedBox(boxId);
    setTimeout(() => {
      setIconText(text);
      setIconComponent(component);
      setAnimatedBox('');
    }, 500);
  };

  const handleTextClick = () => {
    setIconText('');
    setIconComponent(null);
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
          className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold ${animatedBox === 'box1'? 'animate-pulse' : ''}`}
          onClick={() => handleIconClick("AI Personality Matching: Matches students to universities based on personality and campus culture.", <GiArtificialIntelligence size={50} />, 'box1')}
        >
          {iconText === "AI Personality Matching: Matches students to universities based on personality and campus culture."? iconText : <GiArtificialIntelligence size={50} />}
        </div>

        {/* Box 2: Virtual Box */}
        <div
          className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold ${animatedBox === 'box2'? 'animate-pulse' : ''}`}
          onClick={() => handleIconClick("VR Campus Tours: Offers 360° virtual tours of partner universities.", <SiVirtualbox size={50} />, 'box2')}
        >
          {iconText === "VR Campus Tours: Offers 360° virtual tours of partner universities."? iconText : <SiVirtualbox size={50} />}
        </div>

        {/* Box 3: Connect Develop */}
        <div
          className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold ${animatedBox === 'box3'? 'animate-pulse' : ''}`}
          onClick={() => handleIconClick("Peer Mentor Connection: Links prospective students with current students for personalized advice.", <FaConnectdevelop size={50} />, 'box3')}
        >
          {iconText === "Peer Mentor Connection: Links prospective students with current students for personalized advice."? iconText : <FaConnectdevelop size={50} />}
        </div>

        {/* Box 4: Newspaper */}
        <div
          className={`bg-[#001932] rounded-[20px] flex justify-center items-center p-5 text-center font-semibold ${animatedBox === 'box4'? 'animate-pulse' : ''}`}
          onClick={() => handleIconClick("Interactive Curriculum Explorer: Visualizes degree paths and their career impacts.", <FaNewspaper size={50} />, 'box4')}
        >
          {iconText === "Interactive Curriculum Explorer: Visualizes degree paths and their career impacts."? iconText : <FaNewspaper size={50} />}
        </div>
      </div>
    </div>
  );
};

export default Features;