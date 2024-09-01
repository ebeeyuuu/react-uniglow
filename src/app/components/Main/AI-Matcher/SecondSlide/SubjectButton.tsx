import React from "react";
import Checkmark from "./Checkmark";
import { motion } from "framer-motion";

const SubjectButton = ({ subject, onClick, isSelected, className }) => (
  <motion.div
    className={`${className} rounded-xl flex justify-center items-center smooth-animation cursor-pointer text-xl font-bold scale-100 hover:scale-[102%]`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
    onClick={() => onClick(subject)}
  >
    {subject}
    {isSelected && <Checkmark isSelected={isSelected} />}
  </motion.div>
);

export default SubjectButton;
