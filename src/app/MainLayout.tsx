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
import AIMatcher from "./components/Main/DashboardSections/AIMatcher";
import CampusEvents from "./components/Main/DashboardSections/CampusEvents";
import Mentors from "./components/Main/DashboardSections/Mentors";
import Programs from "./components/Main/DashboardSections/Programs";
import Scholarships from "./components/Main/DashboardSections/Scholarships";
import UniversityExplorer from "./components/Main/DashboardSections/UniversityExplorer";
import VRTours from "./components/Main/DashboardSections/VRTours";
import UniversityRankings from "./pages/university-rankings/page";
import {
  FaUniversity,
  FaRobot,
  FaUserGraduate,
  FaVrCardboard,
  FaTrophy,
  FaGraduationCap,
  FaCalendarAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

interface MainLayoutProps {
  children: ReactNode;
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
    name: "University Explorer",
    icon: <FaUniversity />,
    component: <UniversityExplorer />,
    children: [
      {
        name: "Popular Universities",
        component: <UniversityExplorer />,
      },
      {
        name: "Search by Country",
        component: <UniversityExplorer />,
      },
      {
        name: "Compare Universities",
        component: <UniversityExplorer />,
      },
    ],
  },
  {
    name: "AI Matcher",
    icon: <FaRobot />,
    component: <AIMatcher />,
    children: [
      {
        name: "Career Assessment",
        component: <AIMatcher />,
      },
      { name: "Program Matcher", component: <AIMatcher /> },
      {
        name: "University Matcher",
        component: <AIMatcher />,
      },
    ],
  },
  {
    name: "Mentors",
    icon: <FaUserGraduate />,
    component: <Mentors />,
    children: [
      { name: "Find Mentor", component: <Mentors /> },
      { name: "Mentor Reviews", component: <Mentors /> },
      { name: "Schedule Session", component: <Mentors /> },
    ],
  },
  {
    name: "VR Tours",
    icon: <FaVrCardboard />,
    component: <VRTours />,
    children: [
      { name: "Campus Tours", component: <VRTours /> },
      { name: "Facility Tours", component: <VRTours /> },
      { name: "Virtual Events", component: <VRTours /> },
    ],
  },
  {
    name: "University Rankings",
    icon: <FaTrophy />,
    component: <UniversityRankings />,
    children: [
      {
        name: "Global Rankings",
        component: <UniversityRankings />,
      },
      {
        name: "Program Rankings",
        component: <UniversityRankings />,
      },
      {
        name: "Research Rankings",
        component: <UniversityRankings />,
      },
    ],
  },
  {
    name: "Programs",
    icon: <FaGraduationCap />,
    component: <Programs />,
    children: [
      { name: "Undergraduate", component: <Programs /> },
      { name: "Graduate", component: <Programs /> },
      { name: "Research", component: <Programs /> },
    ],
  },
  {
    name: "Campus Events",
    icon: <FaCalendarAlt />,
    component: <CampusEvents />,
    children: [
      { name: "Open Days", component: <CampusEvents /> },
      { name: "Workshops", component: <CampusEvents /> },
      {
        name: "Information Sessions",
        component: <CampusEvents />,
      },
    ],
  },
  {
    name: "Scholarships",
    icon: <FaMoneyCheckAlt />,
    component: <Scholarships />,
    children: [
      { name: "Merit Based", component: <Scholarships /> },
      {
        name: "Need Based",
        component: <Scholarships />,
      },
      {
        name: "Research Grants",
        component: <Scholarships />,
      },
    ],
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className = "",
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activePath, setActivePath] = useState<string[]>(["Home"]);

  const handleNavigation = (path: string[]) => {
    setActivePath(path);
  };

  return (
    <div className={cn("flex h-screen bg-zinc-950 overflow-hidden", className)}>
      <Sidebar
        items={navigationItems}
        username="shadcn"
        email="m@example.com"
        avatarUrl="https://images.unsplash.com/photo-1576158114254-3ba81558b87d"
        isCollapsed={isSidebarCollapsed}
        onNavigate={handleNavigation}
      />
      <main className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center p-4 bg-zinc-900">
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
        <div className="flex-1 p-8 min-h-0">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
