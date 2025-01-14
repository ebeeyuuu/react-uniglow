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
  component: React.ComponentType;
  children?: NavigationItem[];
};

const navigationItems: NavigationItem[] = [
  { name: "University Explorer", component: UniversityExplorer },
  { name: "AI Matcher", component: AIMatcher },
  { name: "Mentors", component: Mentors },
  { name: "VR Tours", component: VRTours },
  { name: "University Rankings", component: UniversityRankings },
  { name: "Programs", component: Programs },
  { name: "Campus Events", component: CampusEvents },
  { name: "Scholarships", component: Scholarships },
];

const TabsMode: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<NavigationItem[]>([]);

  const renderContent = () => {
    const CurrentComponent = currentPath.length > 0 
      ? currentPath[currentPath.length - 1].component 
      : () => <div>Welcome to the University Explorer</div>;
    return <CurrentComponent />;
  };

  const handleNavigation = (item: NavigationItem) => {
    setCurrentPath([item]);
  };

  const BreadcrumbDropdown: React.FC<{ items: NavigationItem[], current: NavigationItem }> = ({ items, current }) => (
    <DropdownMenu
      options={items.map(item => ({ value: item.name, label: item.name }))}
      placeholder={current.name}
      onSelect={handleNavigation}
    />
  );

  return (
    <div className="p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbDropdown items={navigationItems} current={{ name: "Home", component: () => null }} />
          </BreadcrumbItem>
          {currentPath.map((item, index) => (
            <React.Fragment key={item.name}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbDropdown 
                  items={index === 0 ? navigationItems : (currentPath[index - 1].children || [])}
                  current={item}
                />
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabsMode;
