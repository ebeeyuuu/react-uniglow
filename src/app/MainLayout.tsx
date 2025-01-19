"use client";

import React, { ReactNode, useState } from "react";
import AIMatcher from "./components/Main/DashboardSections/AIMatcher";
import CampusEvents from "./components/Main/DashboardSections/CampusEvents";
import Mentors from "./components/Main/DashboardSections/Mentors";
import Programs from "./components/Main/DashboardSections/Programs";
import Scholarships from "./components/Main/DashboardSections/Scholarships";
import UniversityExplorer from "./components/Main/DashboardSections/UniversityExplorer";
import VRTours from "./components/Main/DashboardSections/VRTours";
import UniversityRankings from "./pages/university-rankings/page";
import { title } from "process";
import { FaBars } from "react-icons/fa6";
import Sidebar from "./components/Main/Sidebar";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

type NavigationItem = {
  title: string;
  icon: ReactNode;
  href: string;
};

type NavigationItems = {
  name: string;
  component?: React.ReactNode;
  children?: NavigationItems[];
};

const navigationItems: NavigationItems[] = [
  {
    name: "Home",
    children: [
      {
        name: "University Explorer",
        component: <UniversityExplorer />,
        children: [
          { name: "Popular Universities", component: <UniversityExplorer /> },
          { name: "Search by Country", component: <UniversityExplorer /> },
          { name: "Compare Universities", component: <UniversityExplorer /> },
        ],
      },
      {
        name: "AI Matcher",
        component: <AIMatcher />,
        children: [
          { name: "Career Assessment", component: <AIMatcher /> },
          { name: "Program Matcher", component: <AIMatcher /> },
          { name: "University Matcher", component: <AIMatcher /> },
        ],
      },
      {
        name: "Mentors",
        component: <Mentors />,
        children: [
          { name: "Find Mentor", component: <Mentors /> },
          { name: "Mentor Reviews", component: <Mentors /> },
          { name: "Schedule Session", component: <Mentors /> },
        ],
      },
      {
        name: "VR Tours",
        component: <VRTours />,
        children: [
          { name: "Campus Tours", component: <VRTours /> },
          { name: "Facility Tours", component: <VRTours /> },
          { name: "Virtual Events", component: <VRTours /> },
        ],
      },
      {
        name: "University Rankings",
        component: <UniversityRankings />,
        children: [
          { name: "Global Rankings", component: <UniversityRankings /> },
          { name: "Program Rankings", component: <UniversityRankings /> },
          { name: "Research Rankings", component: <UniversityRankings /> },
        ],
      },
      {
        name: "Programs",
        component: <Programs />,
        children: [
          { name: "Undergraduate", component: <Programs /> },
          { name: "Graduate", component: <Programs /> },
          { name: "Research", component: <Programs /> },
        ],
      },
      {
        name: "Campus Events",
        component: <CampusEvents />,
        children: [
          { name: "Open Days", component: <CampusEvents /> },
          { name: "Workshops", component: <CampusEvents /> },
          { name: "Information Sessions", component: <CampusEvents /> },
        ],
      },
      {
        name: "Scholarships",
        component: <Scholarships />,
        children: [
          { name: "Merit Based", component: <Scholarships /> },
          { name: "Need Based", component: <Scholarships /> },
          { name: "Research Grants", component: <Scholarships /> },
        ],
      },
    ],
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className = "",
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className={cn("flex h-screen bg-zinc-950 overflow-hidden", className)}>
      <Sidebar
        items={navigationItems}
        username="shadcn"
        email="m@example.com"
        avatarUrl="https://images.unsplash.com/photo-1576158114254-3ba81558b87d"
      />
      <main className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center p-4 bg-zinc-900">
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="mr-4 p-2 rounded-md hover:bg-zinc-800 transition-colors"
          >
            <FaBars className="w-6 h-6 text-zinc-100" />
          </button>
          <h1 className="text-xl font-bold text-zinc-100">{title}</h1>
        </header>
        <div className="flex-1 p-8 min-h-0">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
