"use client";

import Image from "next/image";
import { BsPlay } from "react-icons/bs";
import { useState } from "react";

type VRTour = {
  id: number;
  university: string;
  thumbnail: string;
  duration: string;
  description: string;
  tourUrl: string;
  locations: string[];
}

const virtualTours: VRTour[] = [
  {
    id: 1,
    university: "Stanford University",
    thumbnail: "https://images.unsplash.com/photo-1514906380639-closed-college-campus?q=80",
    duration: "15 min",
    description: "Explore Stanford's historic Main Quad and modern research facilities",
    tourUrl: "/vr/stanford",
    locations: ["Main Quad", "Memorial Church", "Green Library", "Engineering Quad"]
  },
  {
    id: 2,
    university: "Harvard University",
    thumbnail: "https://images.unsplash.com/photo-1576049519901-ef17971aedc4?q=80",
    duration: "20 min",
    description: "Walk through Harvard Yard and visit historic buildings",
    tourUrl: "/vr/harvard",
    locations: ["Harvard Yard", "Widener Library", "Memorial Hall", "Science Center"]
  },
  {
    id: 3,
    university: "MIT",
    thumbnail: "https://images.unsplash.com/photo-1591966475401-f57bae07d7ae?q=80",
    duration: "18 min",
    description: "Experience MIT's cutting-edge facilities and iconic architecture",
    tourUrl: "/vr/mit",
    locations: ["The Great Dome", "Media Lab", "Stata Center", "Infinite Corridor"]
  },
  {
    id: 4,
    university: "Oxford University",
    thumbnail: "https://images.unsplash.com/photo-1580844946486-f08607088f08?q=80",
    duration: "25 min",
    description: "Tour through centuries of academic excellence",
    tourUrl: "/vr/oxford",
    locations: ["Bodleian Library", "Christ Church", "Radcliffe Camera", "Bridge of Sighs"]
  }
];

const VRTours = () => {
  return <div>VRTours</div>;
};

export default VRTours;
