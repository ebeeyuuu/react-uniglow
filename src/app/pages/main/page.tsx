"use client";

import React, { useEffect } from "react";
import MainLayout from "@/app/MainLayout";
import BentoBox from "@/app/components/Main/BentoBox";
import TabsMode from "@/app/components/Main/TabsMode";
import { useTabsMode } from "@/context/useTabsMode";
import { ContextMenuItem } from "@/app/components/UI/context-menu-types";
import {
  BsHouse,
  BsGear,
  BsPerson,
  BsTable,
  BsColumns,
  BsQuestionCircle,
  BsBell,
} from "react-icons/bs";
import { FaBackward, FaForward } from "react-icons/fa6";
import { ContextMenu } from "@/app/components/UI/ContextMenu";

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

const Page = () => {
  const { isTabsMode, toggleTabsMode } = useTabsMode();

  const contextMenuItems: ContextMenuItem[] = [
    {
      type: "item",
      label: "Back",
      icon: <FaBackward className="w-4 h-4" />,
      onClick: () => window.history.back(),
      shortcut: "Super+Left",
    },
    {
      type: "item",
      label: "Forward",
      icon: <FaForward className="w-4 h-4" />,
      onClick: () => window.history.forward(),
      shortcut: "Super+Right",
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
      shortcut: "Super+Alt+B",
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
    {
      type: "item",
      label: isTabsMode ? "Switch to Concise mode" : "Switch to Tabs Mode",
      icon: isTabsMode ? (
        <BsTable className="w-4 h-4" />
      ) : (
        <BsColumns className="w-4 h-4" />
      ),
      onClick: toggleTabsMode,
      shortcut: "Super+Alt+T",
    },
    { type: "separator" },
    {
      type: "item",
      label: "Report an Issue",
      icon: <BsQuestionCircle className="w-4 h-4" />,
      onClick: () => console.log("Report an Issue"),
      shortcut: "Super+Alt+I",
    },
  ];

  return (
    <ContextMenu items={contextMenuItems}>
      <MainLayout className="bg-[#0a0a0a]" navItems={navigationItems}>
        {isTabsMode ? (
          <div className="w-full h-full flex justify-center items-center">
            <TabsMode />
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <BentoBox />
          </div>
        )}
      </MainLayout>
    </ContextMenu>
  );
};

export default Page;
