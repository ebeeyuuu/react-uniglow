import React, { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import PersonaDevelopmentHub from "./Mentors/PersonaDevelopmentHub";
import MentorConnectionHub from "./Mentors/MentorConnectionHub";
import MentorGuidanceCenter from "./Mentors/MentorGuidanceCenter";
import FindAMentor from "./Mentors/FindAMentor";
import ResourceLibrary from "./Mentors/ResourceLibrary";

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
          <PersonaDevelopmentHub data-swapy-item="a" />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 row-span-3"
          data-swapy-slot="b"
        >
          <MentorConnectionHub data-swapy-item="b" />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 lg:row-span-1 xl:row-span-2"
          data-swapy-slot="c"
        >
          <MentorGuidanceCenter data-swapy-item="c" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="d"
        >
          <FindAMentor data-swapy-item="d" />
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="e"
        >
          <ResourceLibrary data-swapy-item="e" />
        </div>
      </div>
    </div>
  );
};

export default UniversityExplorer;
