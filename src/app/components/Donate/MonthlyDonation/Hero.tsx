import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "../ProgressBar";
import DonationForm from "../DonationForm";
import DonationOptions from "../DonationOptions";
import Calendar from "@/app/components/Donate/Calendar";
// TODO: Add a donation amount input and connect the input to the calendar and firebase

const Hero: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date | null) => {
    if (
      selectedDate &&
      date &&
      selectedDate.getDate() === date.getDate() &&
      selectedDate.getMonth() === date.getMonth() &&
      selectedDate.getFullYear() === date.getFullYear()
    ) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <div className="w-full text-3xl font-extrabold mt-52 flex justify-center items-center mb-8">
        Monthly Donation
      </div>
      <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
      <div className="w-full text-xl font-bold mt-6 flex justify-center items-center">
        Enter your donation amount here:
      </div>
      {selectedDate && (
        <div className="mt-4 text-lg">
          Selected Date: {selectedDate.toLocaleDateString()}{" "}
        </div>
      )}
    </div>
  );
};

export default Hero;
