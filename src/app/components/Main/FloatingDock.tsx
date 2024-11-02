"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";
import IconContainer from "./IconContainer";

const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.pageX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    mouseX.set(e.touches[0].pageX);
  };

  const handleMouseLeave = () => {
    mouseX.set(Infinity);
  };

  const handleTouchEnd = () => {
    mouseX.set(Infinity);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={cn(
        "mx-auto flex h-16 gap-4 items-end rounded-2xl bg-black px-4 max-md:px-3 max-sm:px-2 pb-3",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

export default FloatingDock;
