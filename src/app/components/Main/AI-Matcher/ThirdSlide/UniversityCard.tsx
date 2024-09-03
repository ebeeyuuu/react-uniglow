import React from "react";
import { motion } from "framer-motion";

const UniversityCard = ({ university, isActive }) => {
  return (
    <motion.div
      className={`px-20 py-16 bg-[#024534] w-full mx-auto rounded-2xl shadow-md transition-transform min-h-[600px] duration-300 flex justify-center items-center flex-col ${
        isActive ? "scale-105" : "100"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-2/3 mb-7 border border-white rounded-2xl p-5 flex justify-center items-center">
        Image
      </div>
      <h3 className="text-xl font-semibold flex mr-auto mb-2">
        {university.name}
      </h3>
      <p className="text-gray-300 mr-auto">{university.description}</p>
    </motion.div>
  );
};

export default UniversityCard;
