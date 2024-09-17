import ExpandingServices from "./SixthSlide/ExpandingServices";
import { supportServices } from "@/data";

const SixthSlide = () => {
  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="w-full min-h-screen">
        <ExpandingServices services={supportServices} leftColumnCount={22} />
      </div>
    </div>
  );
};

export default SixthSlide;
