import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfirmNotifProps {
  onConfirm: () => void;
}

const ConfirmNotif: React.FC<ConfirmNotifProps> = ({ onConfirm }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className="absolute bottom-40 left-0 right-0 rounded-xl font-medium z-10 border w-min mx-auto px-5 py-3 text-lg smooth-animation"
      onClick={onConfirm}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ width: "auto" }}
      animate={{
        width: hovered ? "200px" : "120px",
      }}
      transition={{ duration: 0.3 }}
      style={{ whiteSpace: "nowrap" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!hovered ? (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center"
          >
            Confirm
          </motion.div>
        ) : (
          <motion.div
            key="next"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center font-bold"
          >
            Go to next slide
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ConfirmNotif;
