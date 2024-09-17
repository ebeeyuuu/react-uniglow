import ExpandingServices from "./SixthSlide/ExpandingServices";
import { supportServices } from "@/data";

const SixthSlide = () => {
  console.log("Total support services ", supportServices.length);
  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="w-full h-screen">
        <ExpandingServices services={supportServices} leftColumnCount={22} />
      </div>
    </div>
  );
};

export default SixthSlide;
