import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLightbulb, FaMoneyBill, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LoadingButton from "../../LoadingButton";
import { useRouter } from "next/navigation";

const Hero = () => {
  const phrases = [
    "Need a scholarship?",
    "Want to realise your dreams?",
    "Want to match with the best universities?",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleRedirect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/pages/signup");
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div
        className="bg-white rounded-full mt-10 text-black font-medium text-base px-4 py-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        How we&apos;re doing
      </div>
      <div
        className="text-center scale-100 max-md:scale-[70%] smooth-animation mt-6 text-6xl font-extrabold mr-3"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <span className="block">Our</span>
        <span className="block">achievements</span>
      </div>
      <div className="flex flex-row w-full px-10 gap-4 max-md:scale-[70%] scale-100 smooth-animation justify-center items-center mx-auto mt-12 max-md:mt-0">
        <div className="flex flex-col justify-center items-center rounded-xl bg-[#003dcc] p-10 aspect-square gap-4">
          <FaLightbulb className="text-white" size={25} />
          <div className="text-white text-xl font-bold text-center">
            <span className="block">1,000,000+</span>
            <span className="block">dreams</span>
            <span className="block">realised</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl bg-[#003dcc] p-10 aspect-square gap-4">
          <FaGlobe className="text-white" size={25} />
          <div className="text-white text-xl font-bold text-center">
            <span className="block">95% of students</span>
            <span className="block">matched with 100% compatibility</span>
            <span className="block">with their university</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-xl bg-[#003dcc] p-10 aspect-square gap-4">
          <FaMoneyBill className="text-white" size={25} />
          <div className="text-white text-xl font-bold text-center">
            <span className="block">$50M+ in</span>
            <span className="block">scholarships</span>
            <span className="block">secured</span>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={phrases[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-medium w-2/3 justify-center items-center flex mx-auto mt-10"
        >
          {phrases[index]}
        </motion.div>
      </AnimatePresence>
      <LoadingButton
        onClick={handleRedirect}
        className="bg-[#003dcc] px-5 py-3 rounded-xl font-medium text-base mt-8 scale-100 hover:scale-110 text-center smooth-animation"
      >
        Get started
      </LoadingButton>
    </div>
  );
};

export default Hero;
