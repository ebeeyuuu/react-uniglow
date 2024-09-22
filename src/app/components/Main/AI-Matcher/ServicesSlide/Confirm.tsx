import React from "react";

interface ConfirmProps {
  count: number;
  maxCount: number;
  onConfirm: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({ count, maxCount, onConfirm }) => {
  return (
    <button
      onClick={onConfirm}
      disabled={count < 1}
      className="flex flex-col gap-6 justify-center items-center"
    >
      <div className="text-xl font-extrabold">
        {count} / {maxCount}
      </div>
      <div
        className={`px-5 py-3 rounded-xl scale-100 hover:scale-110 font-medium text-lg smooth-animation ${count < 1
            ? "bg-[#003dcc]/40 cursor-not-allowed"
            : "bg-[#003dcc] cursor-pointer"
          }`}
      >
        Confirm
      </div>
    </button>
  );
};

export default Confirm;
