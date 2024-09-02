import React from "react";
import { motion } from "framer-motion";

const UniversityCard = ({ university, isActive }) => {
  return (
    <motion.div
      className={`p-4 bg-black border border-white rounded-lg shadow-md transition-transform duration-300 ${
        isActive ? "scale-105" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold">{university.name}</h3>
      <p className="text-gray-300">{university.description}</p>
    </motion.div>
  );
};

export default UniversityCard;
