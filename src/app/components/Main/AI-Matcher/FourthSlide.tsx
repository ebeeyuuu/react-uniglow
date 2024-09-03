import React, { useState } from "react";
import ProgressSlider from "./FourthSlide/ProgressSlider";

type SlideProps = {
  onNextSlide: () => void;
};

const FourthSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  const [isValueChanged, setIsValueChanged] = useState(false);

  const handleValueChange = (newValue: number) => {
    setIsValueChanged(true);
  };

  return (
    <div className="w-5/6 h-full flex flex-col justify-center items-center">
      <p className="text-center">
        How important is access to cultural attractions like museums, theatres,
        or music venus in your ideal college town?
      </p>
      <div>
        <ProgressSlider onValueChange={handleValueChange} />
      </div>
      {isValueChanged && (
        <button
          onClick={onNextSlide}
          className="mt-5 px-5 py-2 bg-[#003dcc]/70 text-white rounded-xl hover:bg-[#003dcc] transition duration-300 ease-in-out"
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default FourthSlide;
