import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface ExamplesNotifProps {
  isBounce: boolean;
}

const ExamplesNotif: React.FC<ExamplesNotifProps> = ({ isBounce }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isBounce) {
      controls.start({
        y: [0, -20, 0],
        transition: {
          duration: 0.5,
          times: [0, 0.4, 1],
          repeat: 5,
          repeatType: "reverse",
          ease: [0.25, 0.1, 0.25, 1],
        },
      });
    } else {
      controls.stop();
      controls.set({ y: 0 });
    }
  }, [isBounce, controls]);

  return (
    <div className="absolute z-10 top-20 left-0 right-0 flex justify-center">
      <motion.div
        className="inline-block rounded-xl border border-white py-3 px-4"
        animate={controls}
      >
        Click on them to see some examples!
      </motion.div>
    </div>
  );
};

export default ExamplesNotif;
