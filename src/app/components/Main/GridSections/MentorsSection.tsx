import React from "react";
import { useRouter } from "next/navigation";
import Mentoring from "../../Icons/Mentoring";

const MentorsSection = () => {
  const router = useRouter();

  return (
    <div
      className="row-span-2 col-span-1 max-[2000px]:col-span-2 max-[1200px]:row-span-1 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-gradient-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/mentors")}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center flex-col gap-y-[10px]">
          <Mentoring className="transition-all duration-700 ease-in-out text-[#02ac81]" />
          <div className="flex flex-row items-center justify-center max-sm:text-base max-md:text-lg text-xl smooth-animation">
            Mentors
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;
