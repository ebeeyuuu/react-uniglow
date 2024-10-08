import React, { useState, useRef, useEffect } from "react";
import universityPlaceholder from "@/images/university-placeholder.jpg";
import Image from "next/image";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ProgressBar from "../ProgressBar";

const DonationOptions = () => {
  const [selected, setSelected] = useState<number | null>(null);
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

  const sizeTransform = useTransform(distance, [-150, 0, 150], [100, 140, 100]);
  const size = useSpring(isSelected ? 150 : sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="rounded-2xl border-2 border-[#003dcc] flex items-center justify-center text-xl font-extrabold cursor-pointer"
      onClick={onClick}
    >
      {amount !== null ? `$${amount}` : "..."}
    </motion.div>
  );
};

const Hero = () => {
  const [totalDonated, setTotalDonated] = useState<number | null>(null); // Set initially to null

  useEffect(() => {
    AOS.init({
      once: true,
    });
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

  return (
    <div className="w-full h-full flex justify-center">
      <div className="mt-52 w-full flex items-center flex-row max-xl:flex-col-reverse max-w-[1400px] gap-12 p-10 justify-center">
        <div className="flex justify-center flex-col ">
          <div className="text-6xl max-lg:text-5xl max-md:text-4xl font-extrabold text-left mr-auto">
            <span className="block">Help students</span>
            <span className="block">worldwide</span>
            <span className="block">to discover their dreams.</span>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="text-xl font-light max-w-xl mt-8 max-lg:text-lg max-md:text-base">
              We are hoping to get donations in order to fund important projects
              for towards the future of education and students. We need your
              help!
            </div>
            <ProgressBar
              currentProgressValue={totalDonated || 2000}
              maxProgressValue={10000}
              timeLimitDays={31}
            />
          </div>
          <DonationOptions />
          <button className="w-full mt-8 rounded-2xl flex justify-center items-center bg-[#003dcc] px-10 py-5 text-white text-center font-bold text-xl max-lg:text-lg max-md:text-base">
            Donate
          </button>
        </div>
        <Image
          src={universityPlaceholder}
          alt="university placeholder"
          className="w-[1000px] h-[50vh] rounded-2xl max-xl:w-[100vw] max-xl:h-[25vh] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
