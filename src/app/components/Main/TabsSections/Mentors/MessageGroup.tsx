"use client";

import ChatBubble from "./ChatBubble";

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

const MessageGroup: React.FC<{
  messages: ChatMessage[];
  senderId: string;
}> = ({ messages, senderId }) => {
  return (
    <div className="space-y-1">
      {messages.map((message, index) => (
        <ChatBubble
          key={message.id}
          message={message}
          isLastInGroup={index === messages.length - 1}
        />
      ))}
    </div>
  );
};

export default MessageGroup;
