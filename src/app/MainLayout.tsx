import React, { ReactNode } from "react";
import FloatingDock from "@/app/components/Main/FloatingDock";
import {
  FaHome,
  FaUser,
  FaCog,
  FaBell,
  FaBookmark,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdExplore, MdLibraryBooks } from "react-icons/md";

interface MainLayoutProps {
  children: ReactNode;
  includeNavBar?: boolean;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  includeNavBar = true,
  className = "",
}) => {
  const links = [
    {
      title: "Home",
      icon: <FaHome />,
      href: "/pages/main",
    },
    {
      title: "Explore",
      icon: <MdExplore />,
      href: "/pages/explore",
    },
    {
      title: "Notifications",
      icon: <FaBell />,
      href: "/pages/notifications",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      href: "/pages/profile",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      href: "/pages/settings",
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
