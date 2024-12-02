import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1"
        alt="University campus"
        fill
        className="absolute object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="relative z-20 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold pb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Partner with Uniglow
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join leading universities in revolutionizing student recruitment
        </motion.p>
        <motion.button
          className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Become a Partner
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
