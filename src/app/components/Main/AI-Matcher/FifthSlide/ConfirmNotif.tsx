import React from "react";

interface ConfirmNotifProps {
  onConfirm: () => void;
}

const ConfirmNotif: React.FC<ConfirmNotifProps> = ({ onConfirm }) => {
  return (
    <button
      className="absolute bottom-40 left-0 right-0 z-10 border border-white rounded-xl hover:bg-[#003dcc] hover:border-[#003dcc] w-min mx-auto px-5 py-3 text-lg smooth-animation"
      onClick={onConfirm}
    >
      Confirm
    </button>
  );
};

export default ConfirmNotif;
