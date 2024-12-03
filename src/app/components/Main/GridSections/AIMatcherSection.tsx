import React from "react";
import { useRouter } from "next/navigation";
import BrainAI from "@/app/components/Icons/BrainAI";

const AIMatcherSection = () => {
  const router = useRouter();

  return (
    <div
      className={`relative row-span-1 col-span-2 max-[2000px]:col-span-4 max-[2000px]:-order-8 rounded-[10px] flex justify-center items-center text-center cursor-pointer smooth-animation overflow-hidden bg-linear-to-b from-[#212121] to-[#111111]`}
      onClick={() => router.push("/pages/main/ai-matching")}
    >
      <div className="relative flex items-center justify-center w-full h-full z-10">
        <div className="flex items-center justify-center flex-col gap-y-[10px]">
          <BrainAI className="transition-all duration-700 ease-in-out text-[#02ac81]" />
          <div className="flex flex-row items-center justify-center max-sm:text-xs max-md:text-sm text-base smooth-animation">
            AI Matcher
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMatcherSection;
