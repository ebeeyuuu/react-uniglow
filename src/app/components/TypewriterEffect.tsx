"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text = "", className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Adjust the speed here

      return () => clearTimeout(timer);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
      // Start the 10-second timer to remove the cursor
      const cursorTimer = setTimeout(() => {
        setShowCursor(false);
      }, 10000);

      return () => clearTimeout(cursorTimer);
    }
  }, [currentIndex, text, isTypingComplete]);

  return (
    <div className={`relative ${className}`}>
      <span>{displayedText}</span>
      {showCursor && (
        <span className={`typing-cursor ${isTypingComplete ? 'blinking' : ''}`}>|</span>
      )}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-[5px] bg-[#ff890a]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ originX: 0 }}
      />
    </div>
  );
};

export default TypewriterEffect;