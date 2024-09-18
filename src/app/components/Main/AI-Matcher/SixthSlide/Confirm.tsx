import React from "react";

interface ConfirmProps {
  count: number;
  maxCount: number;
}

const Confirm: React.FC<ConfirmProps> = ({ count, maxCount }) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="text-xl font-extrabold">
        {count} / {maxCount}
      </div>
      <div className="bg-[#003dcc] hover:scale-110 scale-100 px-5 py-3 rounded-xl font-medium text-lg transition-all duration-500 ease-in-out">
        Confirm
      </div>
    </div>
  );
};

export default Confirm;
