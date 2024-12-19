import React, { ReactNode } from "react";
import FloatingDock from "@/app/components/Main/FloatingDock";
import {
  BsBell,
  BsGear,
  BsHouse,
  BsPerson,
  BsQuestionCircle,
} from "react-icons/bs";

interface MainLayoutProps {
  children: ReactNode;
  includeNavBar?: boolean;
  className?: string;
}

const navigationItems = [
  {
    title: "Home",
    icon: <BsHouse className="w-full h-full text-white" />,
    href: "/home",
  },
  {
    title: "Profile",
    icon: <BsPerson className="w-full h-full text-white" />,
    href: "/profile",
  },
  {
    title: "Settings",
    icon: <BsGear className="w-full h-full text-white" />,
    href: "/settings",
  },
  {
    title: "Notifications",
    icon: <BsBell className="w-full h-full text-white" />,
    href: "/notifications",
  },
  {
    title: "Help",
    icon: <BsQuestionCircle className="w-full h-full text-white" />,
    href: "/help",
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  includeNavBar = true,
  className = "",
}) => {
  return (
    <div
      className={`flex h-screen w-full relative overflow-auto ${className}`}
    >
      <div className={`flex-grow flex items-center justify-center`}>
        {children}
      </div>
      {includeNavBar && (
        <div className="fixed z-50 bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center w-full">
          <FloatingDock items={navigationItems} />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
