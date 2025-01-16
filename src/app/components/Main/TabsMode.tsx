import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/app/components/UI/Breadcrumb";

import DropdownMenu from "@/app/components/UI/DropdownMenu";
import UniversityExplorer from "./TabsSections/UniversityExplorer";
import AIMatcher from "./TabsSections/AIMatcher";
import Mentors from "./TabsSections/Mentors";
import VRTours from "./TabsSections/VRTours";
import UniversityRankings from "./TabsSections/UniversityRankings";
import Programs from "./TabsSections/Programs";
import CampusEvents from "./TabsSections/CampusEvents";
import Scholarships from "./TabsSections/Scholarships";

type NavigationItem = {
  name: string;
  component?: React.ReactNode;
  children?: NavigationItem[];
};

const onNavigate = (selectedName: string, level: number, currentPath: NavigationItem[], setPath: (prev) => void) => {
  const currentItem = currentPath[level];

  if (currentItem?.children) {
    const selectedItem = currentItem.children.find(
      (item) => item.name === selectedName
    );

    if (selectedItem) {
      setPath((prev) => [...prev.slice(0, level + 1), selectedItem]);
    }
  }
}

const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    children: [
      {
        name: "University Explorer",
        component: <UniversityExplorer onNavigate={onNavigate}/>,
        children: [
          { name: "Popular Universities", component: <UniversityExplorer onNavigate={onNavigate} /> },
          { name: "Search by Country", component: <UniversityExplorer onNavigate={onNavigate}/> },
          { name: "Compare Universities", component: <UniversityExplorer onNavigate={onNavigate}/> },
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

const TabsMode: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<NavigationItem[]>([
    navigationItems[0],
  ]);

  const renderContent = () => {
    const current = currentPath[currentPath.length - 1];
    return current?.component || <div>Welcome to the University Explorer</div>;
  };

  const handleNavigation = (selectedName: string, level: number) => {
    const currentItem = currentPath[level];

    if (currentItem?.children) {
      const selectedItem = currentItem.children.find(
        (item) => item.name === selectedName,
      );

      if (selectedItem) {
        setCurrentPath((prev) => [...prev.slice(0, level + 1), selectedItem]);
      }
    }
  };

  const BreadcrumbDropdown: React.FC<{
    level: number;
    current: NavigationItem;
  }> = ({ level, current }) => {
    const options = current?.children || [];

    return (
      <DropdownMenu
        options={options.map((item) => ({
          value: item.name,
          label: item.name,
        }))}
        placeholder={current.name}
        onSelect={(value) => handleNavigation(value, level)}
        hideIcon={true}
        className="w-full"
      />
    );
  };

  return (
    <div className="p-4">
      <Breadcrumb>
        <BreadcrumbList>
          {currentPath.map((item, index) => (
            <React.Fragment key={item.name}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                <BreadcrumbDropdown level={index} current={item} />
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default TabsMode;
