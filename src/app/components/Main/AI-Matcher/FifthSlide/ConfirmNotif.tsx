import React from "react";

interface ConfirmNotifProps {
  onConfirm: () => void;
}

const ConfirmNotif: React.FC<ConfirmNotifProps> = ({ onConfirm }) => {
  return (
    <button
      className="absolute bottom-40 left-0 right-0 z-10"
      onClick={onConfirm}
    >
      Confirm
    </button>
  );
};

export default ConfirmNotif;
