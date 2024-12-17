import React, { ReactNode } from "react";
import FloatingDock from "@/app/components/Main/FloatingDock";
import {
  BsCompass,
  BsRobot,
  BsVr,
  BsPeople,
  BsBook,
  BsClipboardCheck,
  BsTrophy,
  BsCalendarEvent,
  BsCash,
} from "react-icons/bs";

interface MainLayoutProps {
  children: ReactNode;
  includeNavBar?: boolean;
  className?: string;
}

const navigationItems = [
  {
    title: "University Explorer",
    icon: <BsCompass className="w-full h-full text-white" />,
    href: "/explorer",
  },
  {
    title: "AI Matcher",
    icon: <BsRobot className="w-full h-full text-white" />,
    href: "/matcher",
  },
  {
    title: "VR Tours",
    icon: <BsVr className="w-full h-full text-white" />,
    href: "/tours",
  },
  {
    title: "Mentors",
    icon: <BsPeople className="w-full h-full text-white" />,
    href: "/mentors",
  },
  {
    title: "Programs",
    icon: <BsBook className="w-full h-full text-white" />,
    href: "/programs",
  },
  {
    title: "Application Tracker",
    icon: <BsClipboardCheck className="w-full h-full text-white" />,
    href: "/tracker",
  },
  {
    title: "Rankings",
    icon: <BsTrophy className="w-full h-full text-white" />,
    href: "/rankings",
  },
  {
    title: "Events",
    icon: <BsCalendarEvent className="w-full h-full text-white" />,
    href: "/events",
  },
  {
    title: "Scholarships",
    icon: <BsCash className="w-full h-full text-white" />,
    href: "/scholarships",
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  includeNavBar = true,
  className = "",
}) => {
  return (
    <div
      className={`flex h-screen w-full relative overflow-auto scrollbar-hide ${className}`}
    >
      <div
        className={`flex-grow scrollbar-hide flex items-center justify-center`}
      >
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
