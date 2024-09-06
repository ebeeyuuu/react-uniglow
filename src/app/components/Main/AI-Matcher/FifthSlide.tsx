import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import TypeClubs from "./FifthSlide/TypeClubs";
import TypeGroups from "./FifthSlide/TypeGroups";
import ExampleClubs from "./FifthSlide/ExampleClubs";
import ExampleGroups from "./FifthSlide/ExampleGroups";

import { clubTypes } from "@/data";

type SlideProps = {
  onNextSlide: () => void;
};

const FifthSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  const [animateTypeClubs, setAnimateTypeClubs] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateTypeClubs(true);
    }, 5000);
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center overflow-y-auto scrollbar-hide relative">
      {!animateTypeClubs && (
        <motion.p
          className="text-3xl w-4/5 font-medium text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 3 }}
          onAnimationComplete={() => setAnimateTypeClubs(true)}
        >
          What kind of clubs or groups would you love to join in college?
        </motion.p>
      )}
      {animateTypeClubs && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        >
          <TypeClubs clubTypes={clubTypes} onConfirm={() => {}} />
        </motion.div>
      )}
    </div>
  );
};

export default FifthSlide;
