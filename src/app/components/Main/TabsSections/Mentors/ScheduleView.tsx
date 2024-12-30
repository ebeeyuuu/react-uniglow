"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/app/components/UI/Calendar";

interface TimeSlot {
  time: string;
  available: boolean;
}

const ScheduleView: React.FC<{ mentorId: string }> = ({ mentorId }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [sessionType, setSessionType] = useState<string>("academic");

  const timeSlots: TimeSlot[] = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: false },
    { time: "4:00 PM", available: true },
  ];

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Session Type</h3>
          <div className="grid grid-cols-2 gap-1">
            {["academic", "career", "research", "personal"].map((type) => (
              <button
                key={type}
                onClick={() => setSessionType(type)}
                className={`p-1 rounded-lg border ${sessionType === type
                    ? "bg-purple-600/20 border-purple-500/50"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
              >
                <span className="capitalize text-xs">{type}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 w-full">
          <h3 className="text-lg font-medium mb-2">Select Date</h3>
          <Calendar size="xs" />
        </div>

        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h3 className="text-lg font-medium mb-2">Available Time Slots</h3>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => setSelectedTime(slot.time)}
                  disabled={!slot.available}
                  className={`p-3 rounded-lg border ${selectedTime === slot.time
                      ? "bg-purple-600/20 border-purple-500/50"
                      : slot.available
                        ? "bg-white/5 border-white/10 hover:bg-white/10"
                        : "bg-white/5 border-white/10 opacity-50 cursor-not-allowed"
                    }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end"
          >
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium">
              Confirm Booking
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScheduleView;
