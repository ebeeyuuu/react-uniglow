import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import harvard from "@/images/harvard.jpg";
import stanford from "@/images/3.jpg";

export default function TestParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const secondBackgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "50%"],
  );
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-y-auto overflow-x-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        PARALLAX
      </motion.h1>

      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <Image
          src={harvard}
          alt="Harvard"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          quality={100}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20"
        style={{
          clipPath: "inset(70% 0 0 0)",
          y: secondBackgroundY,
        }}
      >
        <Image
          src={stanford}
          alt="Stanford"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          quality={100}
        />
      </motion.div>
    </div>
  );
}
