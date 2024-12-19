import React, { useState } from "react";
import { motion } from "framer-motion";

const data = [
  { country: "US", value: 1000 },
  { country: "CN", value: 800 },
  { country: "IN", value: 700 },
  { country: "GB", value: 500 },
  { country: "DE", value: 400 },
  { country: "FR", value: 300 },
  { country: "JP", value: 250 },
  { country: "BR", value: 200 },
  { country: "AU", value: 150 },
  { country: "CA", value: 100 },
];

const GlobalReach = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#020202] to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Global Reach
        </h2>
        <div className="relative">
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-purple-900/80 backdrop-blur-md rounded-lg p-4"
            >
              <h3 className="text-xl font-semibold mb-2">{selectedCountry}</h3>
              <p className="text-white/80">
                Students:{" "}
                {data.find((item) => item.country === selectedCountry)?.value ||
                  0}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
