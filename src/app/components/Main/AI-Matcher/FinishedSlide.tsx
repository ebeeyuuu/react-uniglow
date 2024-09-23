import React from "react";
import Link from "next/link";

const FinishedSlide = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold text-center">You&apos;re all done!</h1>
      <p className="text-center w-1/3 text-gray-300 font-light text-base">
        You have successfully chosen the best univesrity for you. You can either
        restart and choose another university or return to the main page.
      </p>
      <div className=" mt-4 flex flex-col gap-6 justify-center items-center">
        <button className="bg-[#003dcc] px-5 text-sm py-3 scale-100 hover:scale-110 rounded-xl font-medium smooth-animation">
          Redecide your university?
        </button>
        <Link
          href="/pages/main"
          className="bg-[#003dcc] px-5 py-3 text-sm scale-100 hover:scale-110 rounded-xl font-medium smooth-animation"
        >
          Return to main page
        </Link>
      </div>
    </div>
  );
};

export default FinishedSlide;
