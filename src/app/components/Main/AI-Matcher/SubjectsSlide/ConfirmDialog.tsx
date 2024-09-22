import React from "react";
import { motion } from "framer-motion";

const ConfirmDialog = ({ onConfirm, onCancel, subjects }) => (
  <motion.div
    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-black/80 backdrop-blur-md px-24 py-20 rounded-xl shadow-md">
      <p className="text-3xl font-bold mb-6">Confirm chosen subjects:</p>
      <ol className="mb-10">
        {subjects
          .sort((a, b) => a.localeCompare(b))
          .map((subject, index) => (
            <li key={subject} className="text-lg font-medium">
              {index + 1}. {subject}
            </li>
          ))}
      </ol>
      <div className="flex justify-center gap-x-4">
        <button
          className="border-[#003dcc] border-2 bg-black hover:bg-[#003dcc] text-white font-bold py-3 px-5 rounded-lg transiton-all duration-300 ease-in-out"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="border-[#f31722] border-2 bg-black hover:bg-[#f31722] text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 ease-in-out"
          onClick={onCancel}
        >
          No
        </button>
      </div>
    </div>
  </motion.div>
);

export default ConfirmDialog;
