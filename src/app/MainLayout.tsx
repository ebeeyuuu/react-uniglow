import React, { ReactNode } from "react";
import NavBar from "@/app/components/Main/NavBar";

interface MainLayoutProps {
  children: ReactNode;
  includeNavBar?: boolean; // Optional prop with a default value of true
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  includeNavBar = true,
}) => {
  return (
    <div className="flex h-screen w-full overflow-hidden scrollbar-hide">
      {includeNavBar && <NavBar />}
      <div
        className={`flex-grow scrollbar-hide flex items-center justify-center overflow-auto ${includeNavBar ? "ml-[145px] max-[1000px]:mt-[130px] max-[1000px]:ml-0" : "max-[1000px]:ml-0 ml-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
