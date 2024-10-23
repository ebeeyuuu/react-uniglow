"use client";

import React from "react";

import AIMatcherSection from "./GridSections/AIMatcherSection";
import VRToursSection from "./GridSections/VRToursSection";
import MentorsSection from "./GridSections/MentorsSection";
import ProgramsSection from "./GridSections/ProgramsSection";
import ApplicationTrackerSection from "./GridSections/ApplicationTrackerSection";
import UniversityExplorerSection from "./GridSections/UniversityExplorerSection";
import UniversityRankingsSection from "./GridSections/UniversityRankingsSection";
import CampusEventsSection from "./GridSections/CampusEventsSection";
import ScholarshipsSection from "./GridSections/ScholarshipsSection";
import { HoverProvider } from "@/context/hoverContext";

const BentoBox = () => {
  return (
    <HoverProvider>
      <div className="w-full h-[calc(100vh-120px)] scrollbar-hide flex justify-center items-center font-bold text-center max-[1000px]:ml-0 px-[25px] max-[700px]:px-[20px]">
        <div className="grid grid-cols-6 gap-[20px] w-full h-full max-[2000px]:grid-cols-6 max-[700px]:gap-[10px] max-[1000px]:py-4">
          <AIMatcherSection />
          <VRToursSection />
          <MentorsSection />
          <ProgramsSection />
          <ApplicationTrackerSection />
          <UniversityExplorerSection />
          <UniversityRankingsSection />
          <CampusEventsSection />
          <ScholarshipsSection />
        </div>
      </div>
    </HoverProvider>
  );
};

export default BentoBox;
