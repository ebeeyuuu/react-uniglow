import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import VROutline from "../../Icons/VROutline";
import Cross from "../../Icons/Cross";

const VRToursSection = () => {
  const router = useRouter();
  const [items, setItems] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setItems(10);
      } else if (width >= 1280) {
        setItems(8);
      } else if (width >= 1024) {
        setItems(6);
      } else {
        setItems(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridItems = Array.from({ length: items }).map((_, index) => (
    <div
      key={index}
      className="row-span-1 col-span-1 bg-black/20 rounded-lg w-full h-full relative"
    >
      <Cross className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
      <Cross className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
      <Cross className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
      <Cross className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
    </div>
  ));

  return (
    <div
      className="relative row-span-1 col-span-1 max-[2000px]:col-span-2 max-[2000px]:-order-7 rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer smooth-animation overflow-hidden bg-gradient-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/vr-tours")}
    >
      <div className="absolute inset-0 z-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1.5 p-4 h-full w-full">
          {gridItems}
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center flex-col gap-y-[10px]">
          <VROutline className="transition-all duration-700 ease-in-out text-[#02ac81]" />
          <div className="flex flex-row items-center justify-center max-sm:text-xs max-md:text-sm text-base smooth-animation">
            VR Tours
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRToursSection;
