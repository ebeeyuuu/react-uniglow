"use client";

import { motion } from "framer-motion";

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div className="flex items-center gap-1">
        <motion.div
          className="w-2 h-2 bg-white/40 rounded-full"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="w-2 h-2 bg-white/40 rounded-full"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-2 h-2 bg-white/40 rounded-full"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: 0.4,
          }}
        />
      </div>
      <span className="text-sm text-white/40">Mentor is typing...</span>
    </div>
  );
};

export default TypingIndicator;
