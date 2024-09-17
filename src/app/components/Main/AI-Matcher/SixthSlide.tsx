import React from "react";
import ExpandingServices from "./SixthSlide/ExpandingServices";
import { supportServices } from "@/data";

const SixthSlide = () => {
  return (
    <div className="w-full h-full flex flex-col relative">
      <p className="font-semibold text-3xl text-center py-6">
        What kind of support services would make you feel comfortable on campus?
      </p>
      <div className="flex-1 overflow-hidden">
        <ExpandingServices services={supportServices} />
      </div>
    </div>
  );
};

export default SixthSlide;
