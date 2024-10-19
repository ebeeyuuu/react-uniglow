import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DonationForm = ({
  selectedAmount,
  onClose,
}: {
  selectedAmount: number | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-12 rounded-lg max-w-md w-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-black">Donate</h2>
          <p className="mb-4 text-black">
            You have selected to donate{" "}
            <span className="font-bold">
              {selectedAmount !== null
                ? `$${selectedAmount}`
                : "a custom amount"}
              .
            </span>
          </p>
          {/* User Info */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            required
          />
          {/* Payment Info */}
          <input
            type="text"
            placeholder="Credit Card Number"
            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            required
          />
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
              onClick={onClose}
            >
              Donate
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DonationForm;
