import React from "react";

interface ConfirmProps {
  count: number;
  maxCount: number;
  onConfirm: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({ count, maxCount, onConfirm }) => {
  return (
    <button
      className="flex flex-col gap-6 justify-center items-center"
      onClick={onConfirm}
    >
      <div className="text-xl font-extrabold">
        {count} / {maxCount}
      </div>
      <div className="bg-[#003dcc] hover:scale-110 scale-100 px-5 py-3 rounded-xl font-medium text-lg transition-all duration-500 ease-in-out">
        Confirm
      </div>
    </button>
  );
};

export default Confirm;
