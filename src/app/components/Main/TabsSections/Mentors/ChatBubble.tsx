"use client";

import { BsPaperclip, BsDownload, BsCalendar } from "react-icons/bs";

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

const formatMessageTime = (timestamp: string): string => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
};

const ChatBubble: React.FC<{
  message: ChatMessage;
  isLastInGroup?: boolean;
}> = ({ message, isLastInGroup = false }) => {
  const isUser = message.senderId === "user";

  const renderMessageContent = () => {
    switch (message.type) {
      case "file":
        return (
          <div className="space-y-2">
            {message.content && (
              <p className="text-white/90">{message.content}</p>
            )}
            {message.attachments?.map((attachment, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 rounded-lg bg-white/5"
              >
                <BsPaperclip className="text-white/60" />
                <span className="flex-1 truncate">{attachment.name}</span>
                <button className="p-1 hover:bg-white/10 rounded">
                  <BsDownload />
                </button>
              </div>
            ))}
          </div>
        );

      case "schedule":
        return (
          <div className="space-y-2">
            <p className="text-white/90">{message.content}</p>
            <div className="p-2 rounded-lg bg-white/5">
              <div className="flex items-center gap-2">
                <BsCalendar className="text-white/60" />
                <span>Scheduled Session</span>
              </div>
            </div>
          </div>
        );

      default:
        return <p className="text-white/90">{message.content}</p>;
    }
  };

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} ${isLastInGroup ? "mb-4" : "mb-1"
        }`}
    >
      <div
        className={`max-w-[70%] p-3 rounded-lg ${isUser
            ? "bg-purple-600/20 border border-purple-500/50"
            : "bg-white/5 border border-white/10"
          }`}
      >
        {renderMessageContent()}
        <div
          className={`mt-1 text-xs ${isUser ? "text-purple-300/60" : "text-white/40"
            }`}
        >
          {formatMessageTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
