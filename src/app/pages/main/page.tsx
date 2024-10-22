import React from "react";
import MainLayout from "@/app/MainLayout";
import BentoBox from "@/app/components/Main/BentoBox";

const Page = () => {
  return (
    <MainLayout className="bg-[#0d0d0d]">
      <div className="flex justify-center items-center w-full h-full">
        <BentoBox />
      </div>
    </MainLayout>
  );
};

export default Page;
