import React from "react";

const ThirdSlide = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/4 flex flex-col gap-y-10">
        <div className="text-center text-xl font-medium">
          When you think about your ideal college location, do you picture
          yourself in a bustling city, a quieter suburban area, or a rural
          settings surrounded by nature?
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-4 h-[400px]">
          <div className="bg-[#003dcc] rounded-xl items-center justify-center flex scale-100 hover:scale-[105%] transition-all duration-500 ease-in-out">
            <p className="text-xl font-bold">Bustling Cities</p>
          </div>
          <div className="bg-[#003dcc] rounded-xl items-center justify-center flex scale-100 hover:scale-[105%] transition-all duration-500 ease-in-out">
            <p className="text-xl font-bold">Suburban Areas</p>
          </div>
          <div className="bg-[#003dcc] rounded-xl items-center justify-center flex scale-100 hover:scale-[105%] transition-all duration-500 ease-in-out">
            <p className="text-xl font-bold">Rural Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSlide;
