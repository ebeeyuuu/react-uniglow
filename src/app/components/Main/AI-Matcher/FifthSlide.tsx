import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import TypeClubs from "./FifthSlide/TypeClubs";
import TypeGroups from "./FifthSlide/TypeGroups";
import ExampleClubs from "./FifthSlide/ExampleClubs";
import ExampleGroups from "./FifthSlide/ExampleGroups";

const FifthSlide = () => {
  const [animateTypeClubs, setAnimateTypeClubs] = useState(false);
  const [animateExampleClubs, setAnimateExampleClubs] = useState(false);
  const [animateTypeGroups, setAnimateTypeGroups] = useState(false);
  const [animateExampleGroups, setAnimateExampleGroups] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateTypeClubs(true);
    }, 10000);
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <AnimatePresence>
        {!animateTypeClubs && (
          <motion.p
            className="text-3xl w-4/5 font-medium text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 10 }}
          >
            What kind of clubs or groups would you love to join in college?
          </motion.p>
        )}
      </AnimatePresence>
      <AnimatePresence>{animateTypeClubs && <TypeClubs />}</AnimatePresence>
    </div>
  );
};

export default FifthSlide;
