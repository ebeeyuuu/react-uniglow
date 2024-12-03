import React from "react";
import { useRouter } from "next/navigation";
import VROutline from "../../Icons/VROutline";

const VRToursSection = () => {
  const router = useRouter();

  return (
    <div
      className="relative row-span-1 col-span-1 max-[2000px]:col-span-2 max-[2000px]:-order-7 rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer smooth-animation overflow-hidden bg-linear-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/vr-tours")}
    >
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
