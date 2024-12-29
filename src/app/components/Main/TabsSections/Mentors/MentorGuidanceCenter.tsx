"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsCalendar,
  BsChat,
  BsBook,
  BsSend,
  BsPaperclip,
  BsThreeDotsVertical,
} from "react-icons/bs";
import MentorCard from "./MentorCard";
import TypingIndicator from "./TypingIndicator";
import MessageGroup from "./MessageGroup";

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  status: "online" | "offline" | "in-session";
}

interface ChatMessage {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: string;
  type: "text" | "file" | "schedule";
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
}

const MentorGuidanceCenter: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const [activeSection, setActiveSection] = useState<"chat" | "schedule" | "resources">("chat");
  const [isTyping, setIsTyping] = useState(false);

  const mentors: Mentor[] = [
    {
      id: "m1",
      name: "Dr. Sarah Chen",
      role: "Computer Science Mentor",
      expertise: ["Algorithms", "AI/ML", "System Design"],
      status: "online",
    },
    {
      id: "m2",
      name: "Prof. James Wright",
      role: "Mathematics Mentor",
      expertise: ["Calculus", "Linear Algebra", "Statistics"],
      status: "in-session",
    }
  ];

  const sendMessage = () => {
    if (!messageInput.trim() || !selectedMentor) return;

    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: "user",
      recipientId: selectedMentor.id,
      content: messageInput,
      timestamp: new Date().toISOString(),
      type: "text"
    };

    setChatMessages(prev => [...prev, newMessage]);
    setMessageInput("");
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        senderId: selectedMentor.id,
        recipientId: "user",
        content: "Thanks for your message. Let me think about that...",
        timestamp: new Date().toISOString(),
        type: "text"
      };
      setChatMessages(prev => [...prev, response]);
    }, 3000);
  };

  const groupMessages = (messages: ChatMessage[]) => {
    const groups: ChatMessage[][] = [];
    let currentGroup: ChatMessage[] = [];
    let currentSender = "";

    messages.forEach((message) => {
      if (message.senderId !== currentSender) {
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
        }
        currentGroup = [message];
        currentSender = message.senderId;
      } else {
        currentGroup.push(message);
      }
    });

    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }

    return groups;
  };

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="w-full bg-zinc-900/50 rounded-xl p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your Mentors</h2>
          <button className="p-2 hover:bg-white/5 rounded-lg">
            <BsThreeDotsVertical />
          </button>
        </div>

        <div className="space-y-2 flex-1 overflow-y-auto">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              isSelected={selectedMentor?.id === mentor.id}
              onClick={() => setSelectedMentor(mentor)}
            />
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium">
            Book New Session
          </button>
        </div>
      </div>

      <div className="flex-1 bg-zinc-900/50 rounded-xl p-4">
        {selectedMentor ? (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-medium">{selectedMentor.name}</h3>
                  <p className="text-sm text-white/60">{selectedMentor.role}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {["chat", "schedule", "resources"].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section as typeof activeSection)}
                    className={`p-2 rounded-lg ${
                      activeSection === section ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    {section === "chat" && <BsChat />}
                    {section === "schedule" && <BsCalendar />}
                    {section === "resources" && <BsBook />}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeSection === "chat" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {groupMessages(chatMessages).map((group, index) => (
                        <MessageGroup
                          key={index}
                          messages={group}
                          senderId={group[0].senderId}
                        />
                      ))}
                      {isTyping && <TypingIndicator />}
                    </div>
                    
                    <div className="p-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white/5 rounded-lg">
                          <BsPaperclip />
                        </button>
                        <input
                          type="text"
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          placeholder="Type your message..."
                          className="flex-1 bg-white/5 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                          onClick={sendMessage}
                          className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
                        >
                          <BsSend />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === "schedule" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4"
                  >
                    <h3 className="text-lg font-medium mb-4">Schedule a Session</h3>
                    {/* Add scheduling component here */}
                  </motion.div>
                )}

                {activeSection === "resources" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4"
                  >
                    <h3 className="text-lg font-medium mb-4">Shared Resources</h3>
                    {/* Add resources component here */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-white/60">
            Select a mentor to begin
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorGuidanceCenter;
