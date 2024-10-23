import React from "react";
import { useRouter } from "next/navigation";
import Calendar from "@/app/components/Icons/Calendar";

const CampusEventsSection = () => {
  const router = useRouter();

  return (
    <div
      className="row-span-1 col-span-1 max-[2000px]:col-span-2 max-[700px]:text-lg rounded-[10px] flex justify-center items-center font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-gradient-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/campus-events")}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center flex-col gap-y-[10px]">
          <Calendar className="transition-all duration-700 ease-in-out text-[#02ac81]" />
          <div className="flex flex-col items-center justify-center max-sm:text-xs max-md:text-sm text-base smooth-animation">
            <span className="block">Campus</span>
            <span className="block">Events</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusEventsSection;
