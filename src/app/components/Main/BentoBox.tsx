"use client";

import React, { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import DashboardHeader from "./DashboardSections/DashboardHeader";
import UniversityExplorer from "./DashboardSections/UniversityExplorer";
import AIMatcher from "./DashboardSections/AIMatcher";
import Mentors from "./DashboardSections/Mentors";
import VRTours from "./DashboardSections/VRTours";
import UniversityRankings from "./DashboardSections/UniversityRankings";
import Programs from "./DashboardSections/Programs";
import CampusEvents from "./DashboardSections/CampusEvents";
import Scholarships from "./DashboardSections/Scholarships";

const BentoBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const swapy = createSwapy(containerRef.current, {
        animation: "dynamic",
        autoScrollOnDrag: true,
      });

      swapy.onBeforeSwap((event) => {
        console.log(event);
        return true;
      });

      return () => {
        swapy.destroy();
      };
    }
  });

  return (
    <div className="pb-20 text-white overflow-y-scroll scrollbar-hide">
      <div >
        <DashboardHeader />
      </div>

      <div
        ref={containerRef}
        className="w-[95dvw] h-min mx-auto mt-8 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3"
      >
        <div
          className="col-span-2 max-[640px]:row-span-3 row-span-4"
          data-swapy-slot="a"
        >
          <UniversityExplorer data-swapy-item="a" />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 row-span-4"
          data-swapy-slot="b"
        >
          <AIMatcher data-swapy-item="b" />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 row-span-2"
          data-swapy-slot="c"
        >
          <Mentors data-swapy-item="c" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="d"
        >
          <VRTours data-swapy-item="d" />
        </div>
        <div className="col-span-1 row-span-1" data-swapy-slot="e">
          <UniversityRankings data-swapy-item="e" />
        </div>
        <div className="col-span-1 row-span-1" data-swapy-slot="f">
          <Programs data-swapy-item="f" />
        </div>
        <div className="col-span-1 row-span-1" data-swapy-slot="g">
          <CampusEvents data-swapy-item="g" />
        </div>
        <div className="col-span-1 row-span-1" data-swapy-slot="h">
          <Scholarships data-swapy-item="h" />
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
