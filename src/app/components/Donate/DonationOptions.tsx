import React from "react";
import { motion, useMotionValue } from "framer-motion";
import DonationBox from "./DonationBox";

const DonationOptions = ({
  selected,
  setSelected,
  donationAmounts,
}: {
  selected: number | null;
  setSelected: (index: number) => void;
  donationAmounts: (number | null)[];
}) => {
  const mouseX = useMotionValue(Infinity);

  const handleOptionClick = (index: number) => {
    setSelected(index);
  };

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex gap-6 mt-8"
    >
      {donationAmounts.map((amount, index) => (
        <DonationBox
          key={index}
          amount={amount}
          index={index}
          mouseX={mouseX}
          isSelected={selected === index}
          onClick={() => handleOptionClick(index)}
        />
      ))}
    </motion.div>
  );
};

export default DonationOptions;
