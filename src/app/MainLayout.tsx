"use client";

import React, { ReactNode, useState } from "react";
import { FaBars } from "react-icons/fa6";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./components/UI/Breadcrumb";
import Sidebar from "./components/Main/Sidebar";
import { cn } from "@/lib/utils";
import {
  FaUniversity,
  FaRobot,
  FaHandshake,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";
import SearchUniversities from "./components/Main/SearchUniversities";
import VRTours from "./components/Main/VRTours";
import UniversityRankings from "./components/Main/UniversityRankings";
import AIMatcher from "./components/Main/AIMatcher";
import Mentorship from "./components/Main/Mentorship";
import ProgramsAndScholarships from "./components/Main/ProgramsAndScholarships";
import CampusEvents from "./components/Main/CampusEvents";

interface MainLayoutProps {
  children?: ReactNode;
  className?: string;
}

type NavigationItem = {
  name: string;
  component?: React.ReactNode;
  children?: NavigationItem[];
  icon?: React.ReactNode;
};

const navigationItems: NavigationItem[] = [
  {
    name: "Explore",
    icon: <FaUniversity />,
    children: [
      {
        name: "Search Universities",
        icon: <FaUniversity />,
        component: <SearchUniversities />,
      },
      {
        name: "VR Tours",
        icon: <FaRobot />,
        component: <VRTours />,
      },
      {
        name: "University Rankings",
        icon: <FaUniversity />,
        component: <UniversityRankings />,
      },
    ],
  },
  {
    name: "AI Matcher",
    icon: <FaRobot />,
    component: <AIMatcher />,
  },
  {
    name: "Mentorship",
    icon: <FaHandshake />,
    component: <Mentorship />,
  },
  {
    name: "Programs & Scholarships",
    icon: <FaBook />,
    component: <ProgramsAndScholarships />,
  },
  {
    name: "Campus Events",
    icon: <FaCalendarAlt />,
    component: <CampusEvents />,
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({ className = "" }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activePath, setActivePath] = useState<string[]>(["Home"]);
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
    navigationItems[0].component
  );

  const handleNavigation = (path: string[], component?: React.ReactNode) => {
    setActivePath(path);
    if (component) {
      setActiveComponent(component);
    }
  };

  return (
    <div className={cn("flex w-full flex-row h-screen bg-zinc-950", className)}>
      <Sidebar
        items={navigationItems}
        username="shadcn"
        email="m@example.com"
        avatarUrl="https://images.unsplash.com/photo-1576158114254-3ba81558b87d"
        isCollapsed={isSidebarCollapsed}
        onNavigate={handleNavigation}
      />
      <main className="flex flex-col w-full overflow-hidden">
        <header className="flex w-full items-center p-4 bg-zinc-900">
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="mr-4 p-2 rounded-md hover:bg-zinc-800 transition-colors"
          >
            <FaBars className="w-6 h-6 text-zinc-100" />
          </button>
          <Breadcrumb>
            <BreadcrumbList>
              {activePath.map((item, index) => (
                <React.Fragment key={item}>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      isCurrentPage={index === activePath.length - 1}
                    >
                      {item}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < activePath.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="p-8 overflow-auto scrollbar-hide">
          {activeComponent}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
