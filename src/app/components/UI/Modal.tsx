import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={cn(
          "bg-neutral-900 p-6 rounded-lg shadow-lg w-full max-w-lg text-white",
          className,
        )}
      >
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white focus:outline-none"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

export default Modal;
