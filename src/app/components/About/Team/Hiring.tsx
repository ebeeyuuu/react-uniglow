import React from "react";

const Hiring = () => {
  return (
    <div className="w-full h-full flex flex-col gap-9 justify-center items-center">
      <div className="min-h-[100px] border rounded-full border-zinc-400"> </div>
      <div className="text-5xl font-extrabold max-md:scale-[70%] scale-100 transition-all duration-300 ease-in-out">
        Open positions
      </div>
      <div className="flex flex-col gap-6 justify-center items-center w-full h-full px-10">
        <div className="border-2 border-blue-500 rounded-full px-5 py-3 uppercase text-sm">
          1. Engineering
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 mx-auto">
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Engineering Manager</div>
            <div className="text-lg font-light text-gray-400">
              Build, lead, and develop a group of passionate and talented
              product engineers to build a better future for the world.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Engineering Manager</div>
            <div className="text-lg font-light text-gray-400">
              Build, lead, and develop a group of passionate and talented
              product engineers to build a better future for the world.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Engineering Manager</div>
            <div className="text-lg font-light text-gray-400">
              Build, lead, and develop a group of passionate and talented
              product engineers to build a better future for the world.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Engineering Manager</div>
            <div className="text-lg font-light text-gray-400">
              Build, lead, and develop a group of passionate and talented
              product engineers to build a better future for the world.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
