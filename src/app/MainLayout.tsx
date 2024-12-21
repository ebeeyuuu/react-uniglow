"use client";

import React, { ReactNode } from "react";
import FloatingDock from "@/app/components/Main/FloatingDock";
import { BsHouse } from "react-icons/bs";

interface MainLayoutProps {
  children: ReactNode;
  includeNavBar?: boolean;
  className?: string;
  navItems?: NavigationItem[];
}

type NavigationItem = {
  title: string;
  icon: ReactNode;
  href: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  includeNavBar = true,
  className = "",
  navItems = [{ title: "Home", icon: <BsHouse />, href: "/" }],
}) => {
  return (
    <div className={`flex h-screen w-full relative overflow-auto ${className}`}>
      <div className={`flex-grow flex items-center justify-center`}>
        {children}
      </div>
      {includeNavBar && (
        <div className="fixed z-50 bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center w-full">
          <FloatingDock items={navItems} />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
