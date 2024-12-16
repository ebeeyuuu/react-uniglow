"use client";

import React from "react";
import DashboardHeader from "./DashboardSections/DashboardHeader";
import DashboardStats from "./DashboardSections/DashboardStats";
import ApplicationProgress from "./DashboardSections/ApplicationProgress";

//import AIMatcherSection from "./GridSections/AIMatcherSection";
//import VRToursSection from "./GridSections/VRToursSection";
//import MentorsSection from "./GridSections/MentorsSection";
//import ProgramsSection from "./GridSections/ProgramsSection";
//import ApplicationTrackerSection from "./GridSections/ApplicationTrackerSection";
//import UniversityExplorerSection from "./GridSections/UniversityExplorerSection";
//import UniversityRankingsSection from "./GridSections/UniversityRankingsSection";
//import CampusEventsSection from "./GridSections/CampusEventsSection";
//import ScholarshipsSection from "./GridSections/ScholarshipsSection";
//import { HoverProvider } from "@/context/hoverContext";

const BentoBox = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="max-w-7xl mx-auto px-4">
        <DashboardHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <DashboardStats />
          </div>
          <div>
            <ApplicationProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
