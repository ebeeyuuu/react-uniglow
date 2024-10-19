import React, { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import AmountDisplay from "./AmountDisplay";

const DonationBox = ({
  amount,
  mouseX,
  isSelected,
  onClick,
}: {
  amount: number | null;
  index: number;
  mouseX: any;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distance, [-130, 0, 130], [80, 120, 80]);
  const size = useSpring(isSelected ? 140 : sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
        borderColor: isSelected ? "#f4b034" : "#003dcc",
      }}
      className="rounded-2xl border-2 flex items-center justify-center text-base font-light cursor-pointer transition-colors duration-500 ease-in-out"
      onClick={onClick}
    >
      <AmountDisplay amount={amount} />
    </motion.div>
  );
};

export default DonationBox;
