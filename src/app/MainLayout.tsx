"use client";

import React, { ReactNode } from "react";
import FloatingDock from "@/app/components/Main/FloatingDock";
import {
  BsBell,
  BsGear,
  BsHouse,
  BsPerson,
  BsQuestionCircle,
} from "react-icons/bs";
import { FaBackward, FaForward } from "react-icons/fa6";
import { ContextMenu } from "./components/UI/ContextMenu";
import { ContextMenuItem } from "./components/UI/context-menu-types";

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

const contextMenuItems: ContextMenuItem[] = [
  {
    type: "item",
    label: "Back",
    icon: <FaBackward className="w-4 h-4" />,
    onClick: () => window.history.back(),
    shortcut: "Alt+Left",
  },
  {
    type: "item",
    label: "Forward",
    icon: <FaForward className="w-4 h-4" />,
    onClick: () => window.history.forward(),
    shortcut: "Alt+Right",
  },
  { type: "separator" },
  {
    type: "item",
    label: "View Page Source",
    icon: <BsHouse className="w-4 h-4" />,
    onClick: () => {
      window.open("view-source:" + window.location.href, "_blank");
    },
    shortcut: "Super+U",
  },
  {
    type: "item",
    label: "Inspect",
    icon: <BsGear className="w-4 h-4" />,
    onClick: () => {
      console.warn(
        "The 'Inspect' option cannot be implemented programmatically due to browser security restrictions."
      );
    },
    shortcut: "Super+Shift+I",
  },
  { type: "separator" },
  {
    type: "item",
    label: "Refresh Page",
    icon: <BsHouse className="w-4 h-4" />,
    onClick: () => window.location.reload(),
    shortcut: "Super+R",
  },
  {
    type: "item",
    label: "Toggle Navigation Bar",
    icon: <BsGear className="w-4 h-4" />,
    onClick: () => console.log("Toggle Navigation Bar"),
    shortcut: "Super+Shift+N",
  },
  { type: "separator" },
  {
    type: "sub",
    label: "Quick Navigation",
    icon: <BsPerson className="w-4 h-4" />,
    items: navigationItems.map((item) => ({
      type: "item" as const,
      label: item.title,
      icon: React.cloneElement(item.icon, { className: "w-4 h-4" }),
      onClick: () => (window.location.href = item.href),
      shortcut: `Super+${item.title.charAt(0)}`,
    })),
  },
  { type: "separator" },
  {
    type: "item",
    label: "Report an Issue",
    icon: <BsQuestionCircle className="w-4 h-4" />,
    onClick: () => console.log("Report an Issue"),
    shortcut: "Super+Shift+?",
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  includeNavBar = true,
  className = "",
}) => {
  return (
    <ContextMenu items={contextMenuItems}>
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
    </ContextMenu>
  );
};

export default MainLayout;
