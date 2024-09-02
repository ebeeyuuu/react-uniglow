import React from "react";
import { motion } from "framer-motion";

const UniversityCard = ({ university, isActive }) => {
  return (
    <motion.div
      className={`px-20 py-24 bg-[#024534] rounded-lg shadow-md transition-transform h-[500px] duration-300 ${
        isActive ? "scale-105" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full mb-5 h-3/4 border border-white rounded-2xl p-5 flex justify-center items-center">
        Image
      </div>
      <h3 className="text-xl font-semibold">{university.name}</h3>
      <p className="text-gray-300">{university.description}</p>
    </motion.div>
  );
};

export default UniversityCard;
