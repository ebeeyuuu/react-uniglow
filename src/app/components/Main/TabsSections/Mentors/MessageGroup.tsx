"use client";

import ChatBubble from "./ChatBubble";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useState } from "react";

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

interface MessageGroupProps {
  messages: ChatMessage[];
  senderId: string;
  onEdit: (messageId: string, newContent: string) => void;
  onDelete: (messageId: string) => void;
  editingMessageId: string | null;
  setEditingMessageId: (id: string | null) => void;
}

const MessageGroup: React.FC<MessageGroupProps> = ({
  messages,
  senderId,
  onEdit,
  onDelete,
  editingMessageId,
  setEditingMessageId
}) => {
  const [editContent, setEditContent] = useState("");

  const handleStartEdit = (message: ChatMessage) => {
    setEditingMessageId(message.id);
    setEditContent(message.content);
  };

  const handleSaveEdit = (messageId: string) => {
    onEdit(messageId, editContent);
    setEditingMessageId(null);
  };

  return (
    <div className="space-y-1">
      {messages.map((message, index) => (
        <div key={message.id} className="group relative">
          {editingMessageId === message.id ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="flex-1 bg-white/5 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                onKeyDown={(e) => e.key === "Enter" && handleSaveEdit(message.id)}
              />
              <button
                onClick={() => handleSaveEdit(message.id)}
                className="p-2 bg-purple-600/80 hover:bg-purple-600 border border-purple-400/30 rounded-lg"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <ChatBubble 
                message={message}
                isLastInGroup={index === messages.length - 1}
              />
              {message.senderId === "user" && (
                <div className="absolute top-2 left-0 opacity-0 group-hover:opacity-100 flex gap-2 -translate-x-16">
                  <button
                    onClick={() => handleStartEdit(message)}
                    className="p-1 hover:bg-purple-600/10 rounded text-purple-400 hover:text-purple-300"
                  >
                    <BsPencil size={12} />
                  </button>
                  <button
                    onClick={() => onDelete(message.id)}
                    className="p-1 hover:bg-red-600/10 rounded text-red-400 hover:text-red-300"
                  >
                    <BsTrash size={12} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageGroup;
