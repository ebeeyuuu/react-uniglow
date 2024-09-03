import React, { useState } from "react";

type ProgressSliderProps = {
  onValueChange: (value: number) => void;
};

const ProgressSlider: React.FC<ProgressSliderProps> = ({ onValueChange }) => {
  const [progress, setProgress] = useState(50);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setProgress(newValue);
    onValueChange(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(e.target.value), 100);
    setProgress(value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex items-center mb-4">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSliderChange}
          className="w-full"
        />
        <span className="ml-4 text-lg">{progress}%</span>
      </div>
      <div className="flex items-center">
        <label htmlFor="progressInput" className="mr-2">
          Enter Progress:
        </label>
        <input
          id="progressInput"
          type="number"
          value={progress}
          onChange={handleInputChange}
          className="w-[90px] text-center border border-white rounded-xl px-3 py-2 text-white bg-black"
        />
      </div>
    </div>
  );
};

export default ProgressSlider;
