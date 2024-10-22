import React, { ReactNode } from "react";
import NavBar from "@/app/components/Main/NavBar";
import FloatingDock from "@/app/components/Main/FloatingDock";
import Home from "./components/Icons/Home";
import AI from "./components/Icons/AI";
import VR from "./components/Icons/VR";
import Mentorship from "./components/Icons/Mentorship";
import Explore from "./components/Icons/Explore";
import Program from "./components/Icons/Program";

interface MainLayoutProps {
  children: ReactNode;
  includeNavBar?: boolean; // Optional prop with a default value of true
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  includeNavBar = true,
  className = "",
}) => {
  // TODO: Revamp the main page to remove hover states
  const links = [
    {
      title: "Home",
      icon: <Home />,
      href: "/",
    },
    {
      title: "AI",
      icon: <AI />,
      href: "/pages/main/ai-matching",
    },
    {
      title: "VR",
      icon: <VR />,
      href: "/pages/main/vr-tours",
    },
    {
      title: "Mentorship",
      icon: <Mentorship />,
      href: "/pages/main/mentorship",
    },
    {
      title: "Explore",
      icon: <Explore />,
      href: "/pages/main/explore",
    },
    {
      title: "Program",
      icon: <Program />,
      href: "/pages/main/program",
    },
  ];

  return (
    <div
      className={`flex h-screen w-full relative overflow-hidden scrollbar-hide ${className}`}
    >
      <div
        className={`flex-grow scrollbar-hide flex items-center justify-center overflow-auto`}
      >
        {children}
      </div>
      {includeNavBar && (
        <div className="absolute z-50 bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-full">
          <FloatingDock items={links} />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
