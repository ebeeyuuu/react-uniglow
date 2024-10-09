import React, { useState, useRef, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ProgressBar from "../ProgressBar";

const DonationOptions = ({
  selected,
  setSelected,
}: {
  selected: number | null;
  setSelected: (index: number) => void;
}) => {
  const mouseX = useMotionValue(Infinity);
  const donationAmounts = [5, 10, 50, null]; // 'null' represents the "..." option

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
      {amount !== null ? `$${amount}` : "..."}
    </motion.div>
  );
};

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

const Hero = () => {
  const [totalDonated, setTotalDonated] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const q = query(
          collection(db, "global_data"),
          where("total_donated", ">=", 0),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.total_donated !== undefined) {
            setTotalDonated(data.total_donated);
          }
        });
      } catch (error) {
        console.error("Error fetching global data:", error);
      }
    };
    fetchGlobalData();
  }, []);

  const handleDonateClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="mt-52 w-full flex items-center flex-row max-xl:flex-col-reverse max-w-[1000px] gap-12 p-10 m-10 justify-center">
        <div className="flex justify-center flex-col">
          <div className="text-6xl max-lg:text-5xl max-md:text-4xl font-extrabold text-left mr-auto">
            <span className="block">Help students</span>
            <span className="block">worldwide</span>
            <span className="block">to discover their dreams.</span>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="text-xl font-light max-w-xl mt-8 max-lg:text-lg max-md:text-base">
              We are hoping to get donations in order to fund important projects
              for the future of education and students. We need your help!
            </div>
            <ProgressBar
              currentProgressValue={totalDonated || 2000}
              maxProgressValue={10000}
              timeLimitDays={31}
            />
          </div>
          <DonationOptions selected={selected} setSelected={setSelected} />
          <button
            className="w-full mt-8 rounded-2xl flex justify-center items-center bg-[#003dcc] px-10 py-5 text-white text-center font-bold text-xl max-lg:text-lg max-md:text-base"
            onClick={handleDonateClick}
          >
            Donate
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showForm && (
          <DonationForm
            selectedAmount={
              selected !== null ? [5, 10, 50, null][selected] : null
            }
            onClose={handleCloseForm}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
