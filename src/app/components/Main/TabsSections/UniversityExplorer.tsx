import React, { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import UniversityFinder from "./UniversityExplorer/UniversityFinder";
import CareerPathways from "./UniversityExplorer/CareerPathways";
import AdmissionTracker from "./UniversityExplorer/AdmissionTracker";
import ResearchImpactMeter from "./UniversityExplorer/ResearchImpactMeter";
import AlumniSnapshot from "./UniversityExplorer/AlumniSnapshot";
import CampusSafetyStats from "./UniversityExplorer/CampusSafetyStats";
import LibraryResources from "./UniversityExplorer/LibraryResources";
import InternationalStudentHub from "./UniversityExplorer/InternationalStudentHub";

const UniversityExplorer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const swapy = createSwapy(containerRef.current, {
        animation: "dynamic",
        autoScrollOnDrag: true,
      });

      return () => {
        swapy.destroy();
      };
    }
  });

  return (
    <div className="pb-24 text-white overflow-y-scroll scrollbar-hide">
      <div
        ref={containerRef}
        className="w-[95dvw] max-h-[65dvh] mx-auto mt-8 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3"
      >
        <div
          className="col-span-2 max-[640px]:row-span-3 row-span-3"
          data-swapy-slot="a"
        >
          <UniversityFinder data-swapy-item="a" />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 row-span-3"
          data-swapy-slot="b"
        >
          <AdmissionTracker data-swapy-item="b" />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 lg:row-span-1 xl:row-span-2"
          data-swapy-slot="c"
        >
          <CareerPathways data-swapy-item="c" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="d"
        >
          <ResearchImpactMeter data-swapy-item="d" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="e"
        >
          <AlumniSnapshot data-swapy-item="e" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="f"
        >
          <CampusSafetyStats data-swapy-item="f" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="g"
        >
          <LibraryResources data-swapy-item="g" />
        </div>
        <div
          className="col-span-2 lg:col-span-2 xl:col-span-1"
          data-swapy-slot="h"
        >
          <InternationalStudentHub data-swapy-item="h" />
        </div>
      </div>
    </div>
  );
};

export default UniversityExplorer;
