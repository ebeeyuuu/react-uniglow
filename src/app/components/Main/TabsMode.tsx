import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../UI/Tabs";
import TabsHeader from "./TabsSections/TabsHeader";
import UniversityExplorer from "./TabsSections/UniversityExplorer";
import AIMatcher from "./TabsSections/AIMatcher";
import Mentors from "./TabsSections/Mentors";
import VRTours from "./TabsSections/VRTours";
import UniversityRankings from "./TabsSections/UniversityRankings";
import Programs from "./TabsSections/Programs";
import CampusEvents from "./TabsSections/CampusEvents";
import Scholarships from "./TabsSections/Scholarships";

const TabsMode = () => {
  return (
    <div>
      <TabsHeader />
      <Tabs defaultValue="universityexplorer" className="px-2">
        <TabsList>
          <TabsTrigger value="universityexplorer">University Explorer</TabsTrigger>
          <TabsTrigger value="aimatcher">AI Matcher</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
          <TabsTrigger value="vrtours">VR Tours</TabsTrigger>
          <TabsTrigger value="universityrankings">University Rankings</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="campusevents">Campus Events</TabsTrigger>
          <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
        </TabsList>
        <TabsContent value="universityexplorer">
          <UniversityExplorer />
        </TabsContent>
        <TabsContent value="aimatcher">
          <AIMatcher />
        </TabsContent>
        <TabsContent value="mentors">
          <Mentors />
        </TabsContent>
        <TabsContent value="vrtours">
          <VRTours />
        </TabsContent>
        <TabsContent value="universityrankings">
          <UniversityRankings />
        </TabsContent>
        <TabsContent value="programs">
          <Programs />
        </TabsContent>
        <TabsContent value="campusevents">
          <CampusEvents />
        </TabsContent>
        <TabsContent value="scholarships">
          <Scholarships />
        </TabsContent>
      </Tabs>
    </div>
  )
};

export default TabsMode;
