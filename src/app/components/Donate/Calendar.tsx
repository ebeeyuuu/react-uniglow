"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Calendar = ({ onDateSelect, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );

    if (selectedDate && selectedDate.getTime() === selected.getTime()) {
      onDateSelect(null);
    } else {
      onDateSelect(selected);
    }
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto bg-black text-white p-6 rounded-lg shadow-lg border-2 border-white"
      initial={{ width: "50%", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between px-16 items-center mb-6">
        <button
          className="text-white scale-100 hover:scale-110"
          onClick={prevMonth}
        >
          <FaArrowLeft size={16} />
        </button>
        <h2 className="text-xl font-bold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          className="text-white scale-100 hover:scale-110"
          onClick={nextMonth}
        >
          <FaArrowRight size={16} />
        </button>
      </div>
      <motion.div
        className="grid grid-cols-7 gap-2 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-400"
          >
            {day}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="grid grid-cols-7 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-10" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const isSelected =
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();
          const isToday =
            day === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear();

          return (
            <div
              key={day}
              className={`h-10 flex items-center justify-center aspect-square rounded-full text-sm ml-1.5 cursor-pointer transition-colors duration-300
                          ${isSelected ? "bg-blue-500 text-white font-bold" : ""}
                          ${isToday ? "bg-white text-black font-bold" : "hover:bg-gray-800"}`}
              onClick={() => handleDateSelect(day)}
            >
              {day}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Calendar;
