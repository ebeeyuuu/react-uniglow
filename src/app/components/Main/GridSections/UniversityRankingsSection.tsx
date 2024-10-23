import React from "react";
import { useRouter } from "next/navigation";
import Rankings from "@/app/components/Icons/Rankings";

const UniversityRankingsSection = () => {
  const router = useRouter();

  return (
    <div
      className="row-span-1 col-span-1 max-[2000px]:col-span-2 rounded-[10px] flex justify-center items-center font-bold text-center cursor-pointer smooth-animation overflow-hidden bg-gradient-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/university-rankings")}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center flex-col gap-y-[10px]">
          <Rankings className="transition-all duration-700 ease-in-out text-[#02ac81]" />
          <div className="flex flex-col items-center justify-center max-sm:text-sm max-md:text-md text-base smooth-animation">
            <span className="block">University</span>
            <span className="block">Rankings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityRankingsSection;
