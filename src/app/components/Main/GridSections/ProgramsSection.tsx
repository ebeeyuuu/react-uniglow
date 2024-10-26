import React from "react";
import { useRouter } from "next/navigation";
import Grid from "../../Icons/Grid";

const ProgramsSection = () => {
  const router = useRouter();

  const gridItems = Array.from({ length: 20 }, (_, index) => {
    const rowSpan = Math.floor(Math.random() * 3) + 1;
    const colSpan = Math.floor(Math.random() * 3) + 1;

    return (
      <div
        key={index}
        className={`bg-black/20 rounded-lg overflow-hidden row-span-${rowSpan} col-span-${colSpan}`}
      />
    );
  });

  return (
    <div
      className="row-span-2 col-span-1 max-[2000px]:col-span-2 max-[1200px]:row-span-1 max-[1200px]:col-span-4 hover:border-[#f4b034] max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative bg-gradient-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/programs")}
    >
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(20px, 1fr))] gap-1 p-4 w-full h-full">
          {gridItems}
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center flex-col gap-y-[10px]">
          <Grid className="transition-all duration-700 ease-in-out text-[#02ac81]" />
          <div className="flex flex-row items-center justify-center max-sm:text-xs max-md:text-sm text-base smooth-animation">
            Programs
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
