import React, { useState } from 'react'
import { motion } from "framer-motion";

import { useUniversityRecommendations } from '@/context/useUniversityRecommendation';

interface SlideProps {
  onNextSlide: () => void;
}

const PrestigeSlide = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-xl text-center font-medium">
        How important is the prestigiouness, reputability, and rank of the university you want to go to?
      </p>
    </div>
  )
}

export default PrestigeSlide;
