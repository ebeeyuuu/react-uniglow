"use client";

import { useState } from "react";
import { FiMail, FiEdit } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";

const upcomingMentors = [
  {
    name: "Dr. Sarah Chen",
    role: "Computer Science Professor",
    day: "Today",
    time: "3:00 PM",
  },
  {
    name: "Michael Rodriguez",
    role: "Industry Expert",
    day: "Tomorrow",
    time: "2:00 PM",
  },
];

const Mentors: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [notes, setNotes] = useState<string>("");
  const [showNotesModal, setShowNotesModal] = useState<boolean>(false);

  const handleContact = (mentorName: string) => {
    alert(`Contacting ${mentorName}`);
  };

  const handleReschedule = (mentorName: string) => {
    alert(`Rescheduling with ${mentorName}`);
  };

  const toggleNotesModal = () => {
    setShowNotesModal(!showNotesModal);
  };

  const handleSaveNotes = () => {
    alert(`Notes saved: ${notes}`);
    setShowNotesModal(false);
  };

  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex justify-center flex-col"
    >
      <div className="flex items-start justify-start w-full">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          Mentors
        </h2>
      </div>

      <div className="space-y-3 w-full">
        {upcomingMentors.map((mentor, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full gap-3 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex-1 min-w-0">
                <div className="truncate font-medium mb-1 text-xs md:text-sm lg:text-base">
                  {mentor.name}
                </div>
                <div className="truncate text-xs lg:text-sm text-white/60">
                  {mentor.role}
                </div>
              </div>
              <div className="text-xs flex flex-col truncate items-end gap-1 text-purple-400">
                <span>{mentor.day}</span>
                <span>{mentor.time}</span>
              </div>
            </div>
            <div className="flex items-start justify-start flex-wrap w-full gap-2">
              <button
                className="text-xs text-purple-400 hover:underline flex items-center gap-1"
                onClick={() => handleContact(mentor.name)}
              >
                <FiMail className="w-4 h-4" /> Contact
              </button>
              <button
                className="text-xs text-purple-400 hover:underline flex items-center gap-1"
                onClick={() => handleReschedule(mentor.name)}
              >
                <AiOutlineCalendar className="w-4 h-4" /> Reschedule
              </button>
              <button
                className="text-xs text-purple-400 hover:underline flex items-center gap-1"
                onClick={toggleNotesModal}
              >
                <FiEdit className="w-4 h-4" /> Notes
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Notes Modal */}
      {showNotesModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-zinc-800 rounded-xl p-6 w-4/5 md:w-1/2 lg:w-1/3 space-y-4">
            <h3 className="text-lg font-semibold text-white">Add Notes</h3>
            <textarea
              className="w-full p-3 bg-zinc-700 rounded-md text-white outline-none focus:ring-2 focus:ring-purple-500"
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your notes here..."
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={toggleNotesModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-600"
                onClick={handleSaveNotes}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentors;
