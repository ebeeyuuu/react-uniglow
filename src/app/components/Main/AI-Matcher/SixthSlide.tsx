import ExpandingServices from "./SixthSlide/ExpandingServices";
import { supportServices } from "@/data";

const SixthSlide = () => {
  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      <ExpandingServices services={supportServices} leftColumnCount={20} />
    </div>
  );
};

export default SixthSlide;
