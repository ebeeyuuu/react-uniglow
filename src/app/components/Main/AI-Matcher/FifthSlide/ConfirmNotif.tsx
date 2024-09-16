import React from "react";

interface ConfirmNotifProps {
  onConfirm: () => void;
}

const ConfirmNotif: React.FC<ConfirmNotifProps> = ({ onConfirm }) => {
  return (
    <button
      className="absolute bottom-40 left-0 right-0 rounded-xl hover:text-black font-medium z-10 border border-[#f4b034] hover:bg-[#f4b034] w-min mx-auto px-5 py-3 text-lg smooth-animation"
      onClick={onConfirm}
    >
      Confirm
    </button>
  );
};

export default ConfirmNotif;
