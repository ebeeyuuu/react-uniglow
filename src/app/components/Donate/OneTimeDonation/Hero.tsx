import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "../ProgressBar";
import DonationForm from "../DonationForm";
import DonationOptions from "../DonationOptions";

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
          <DonationOptions
            selected={selected}
            setSelected={setSelected}
            donationAmounts={[5, 10, 50, null]}
          />
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
