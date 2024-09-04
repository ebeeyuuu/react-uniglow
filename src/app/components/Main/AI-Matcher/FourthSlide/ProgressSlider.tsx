import React, { useState } from "react";

type ProgressSliderProps = {
  onValueChange: (value: number) => void;
};

const marks = [
  { label: "Unimportant", value: 0 },
  { label: "Slightly Unimportant", value: 25 },
  { label: "So-So", value: 50 },
  { label: "Slightly Important", value: 75 },
  { label: "Important", value: 100 },
];

const ProgressSlider: React.FC<ProgressSliderProps> = ({ onValueChange }) => {
  const [progress, setProgress] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setProgress(newValue);
    onValueChange(newValue); // Call the parent function when the value changes
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSliderChange}
        className="w-[50vw] h-[10px] bg-white rounded-lg appearance-none mt-8 cursor-pointer"
        style={{
          background: `linear-gradient(to right, #003dcc ${progress}%, #ddd ${progress}%)`,
        }}
      />
      <input
        type="number"
        value={progress}
        onChange={handleSliderChange}
        className="w-[60px] text-center border border-gray-300 rounded-md px-2 py-1 bg-black text-white mt-40"
      />
      {/* Marks */}
      <div className="absolute top-12 w-full flex justify-between px-2 text-xs text-white mt-4">
        {marks.map((mark) => (
          <div key={mark.value} className="relative w-full">
            {/* Mark */}
            <div
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-white w-px h-3"
              style={{ left: `calc(${mark.value}% - 1px)` }}
            />
            {/* Label */}
            <div
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
              style={{ left: `calc(${mark.value}%)` }}
            >
              <span className="block text-center text-lg">{mark.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSlider;
