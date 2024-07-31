// app/components/Home.tsx
"use client";

import React, { Suspense } from "react";
import Loading from "@/app/components/Loading";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="grid grid-rows-11 grid-cols-3 gap-[15px] w-3/4 mt-[500px]">
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-2 h-[135px] flex justify-center items-center">
            1
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-1 h-[135px] flex justify-center items-center">
            2
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-3 h-[135px] flex justify-center items-center">
            3
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-1 h-[135px] flex justify-center items-center">
            4
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-2 h-[135px] flex justify-center items-center">
            5
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-3 h-[135px] flex justify-center items-center">
            6
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-1 h-[135px] flex justify-center items-center">
            7
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-2 h-[135px] flex justify-center items-center">
            8
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-3 h-[135px] flex justify-center items-center">
            9
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-2 h-[135px] flex justify-center items-center">
            10
          </div>
          <div className="bg-white rounded-[10px] text-black row-span-1 col-span-1 h-[135px] flex justify-center items-center">
            11
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
