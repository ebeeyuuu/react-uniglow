import React, { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import StudentProfileOverview from "./AIMatcher/StudentProfileOverview";
import UniversityRecommendations from "./AIMatcher/UniversityRecommendations";
import MatchAnalysis from "./AIMatcher/MatchAnalysis";
import AdmissionFitScore from "./AIMatcher/AdmissionFitScore";
import CampusPreferences from "./AIMatcher/CampusPreferences";

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
          className="col-span-2 max-[640px]:row-span-4 row-span-4"
          data-swapy-slot="a"
        >
          <StudentProfileOverview data-swapy-item="a" />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 row-span-4"
          data-swapy-slot="b"
        >
          <UniversityRecommendations data-swapy-item="b" />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 lg:row-span-1 xl:row-span-4"
          data-swapy-slot="c"
        >
          <MatchAnalysis data-swapy-item="c" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-2"
          data-swapy-slot="d"
        >
          <AdmissionFitScore data-swapy-item="d" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-2"
          data-swapy-slot="e"
        >
          <CampusPreferences data-swapy-item="e" />
        </div>
      </div>
    </div>
  );
};

export default UniversityExplorer;
