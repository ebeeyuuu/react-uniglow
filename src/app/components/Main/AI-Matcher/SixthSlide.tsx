import ExpandingServices from "./SixthSlide/ExpandingServices";
import { supportServices } from "@/data";

interface SlideProps {
  onNextSlide: () => void;
}

const SixthSlide: React.FC<SlideProps> = ({ onNextSlide }) => {
  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      <ExpandingServices
        services={supportServices}
        leftColumnCount={20}
        onConfirm={onNextSlide}
      />
    </div>
  );
};

export default SixthSlide;
