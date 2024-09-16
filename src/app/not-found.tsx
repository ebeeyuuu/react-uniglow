import React from "react";
import Link from "next/link";

const Page404 = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="flex flex-col gap-[20px] items-center">
        <div className="font-bold text-9xl text-[#0070e0]">404</div>
        <div className="text-xl font-bold">Page not found</div>
        <div className="">
          Oops! The page you were looking for doesn&apos;t exist. It might have
          been moved or deleted.
        </div>
        <div className="flex flex-row gap-x-4">
          <div className="px-5 py-3 border border-[#e07000] hover:bg-[#e07000] smooth-animation">
            <Link href="/">Back to landing page</Link>
          </div>
          <div className="px-5 py-3 border border-[#e07000] hover:bg-[#e07000] smooth-animation">
            <Link href="/pages/main">Back to home page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
