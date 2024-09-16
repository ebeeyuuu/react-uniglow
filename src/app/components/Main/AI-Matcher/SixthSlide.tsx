import React from "react";
import ExpandingServices from "./SixthSlide/ExpandingServices";
import { supportServices } from "@/data";

const SixthSlide = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hide gap-6 justify-center items-center relative">
      <p className="font-semibold text-3xl">
        What kind of support services would make you feel comfortable on campus?
      </p>
      <ExpandingServices services={supportServices} />
    </div>
  );
};

export default SixthSlide;
