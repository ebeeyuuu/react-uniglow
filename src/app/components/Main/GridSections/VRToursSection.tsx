import React from "react";
import { useRouter } from "next/navigation";
import VROutline from "../../Icons/VROutline";
import Cross from "../../Icons/Cross";

const VRToursSection = () => {
  const router = useRouter();

  const crosses = Array.from({ length: 100 }, (_, index) => (
    <div key={index} className="relative w-full h-full">
      <Cross className="w-4 h-4 text-zinc-400" />
    </div>
  ));

  return (
    <div
      className="relative row-span-1 col-span-1 max-[2000px]:col-span-2 max-[2000px]:-order-7 rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer smooth-animation overflow-hidden bg-gradient-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/vr-tours")}
    >
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(20px,_1fr))] gap-1 h-full w-full p-4 -mt-2">
          {crosses}
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
