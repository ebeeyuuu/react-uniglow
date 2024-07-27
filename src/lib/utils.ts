import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Variants } from "framer-motion";

export const imageVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
  expanded: { 
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "80vw",
    height: "70vh",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  },
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}