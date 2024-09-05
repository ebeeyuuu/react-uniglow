import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import TypeClubs from "./FifthSlide/TypeClubs";
import TypeGroups from "./FifthSlide/TypeGroups";
import ExampleClubs from "./FifthSlide/ExampleClubs";
import ExampleGroups from "./FifthSlide/ExampleGroups";

const FifthSlide = () => {
  const [animateTypeClubs, setAnimateTypeClubs] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateTypeClubs(true);
    }, 10000);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {!animateTypeClubs && (
        <motion.p
          className="text-3xl w-4/5 font-medium text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onAnimationComplete={() => setAnimateTypeClubs(true)}
        >
          What kind of clubs or groups would you love to join in college?
        </motion.p>
      )}
      {animateTypeClubs && (
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <TypeClubs />
        </motion.div>
      )}
    </div>
  );
};

export default FifthSlide;
