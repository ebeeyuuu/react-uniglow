import React, { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import TestComponent from "./UniversityExplorer/TestComponent";

interface UniversityExplorerProps {
  onNavigate: (...params) => void;
}

const UniversityExplorer: React.FC<UniversityExplorerProps> = ({ onNavigate }) => {
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

  const handleItemClick = (name: string) => {
    onNavigate(name);
  }

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
          <TestComponent data-swapy-item="a" onClick={() => handleItemClick("Search by Country")} />
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 row-span-3"
          data-swapy-slot="b"
        >
          <div
            data-swapy-item="b"
            className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide"
          >
            01
          </div>
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 lg:row-span-1 xl:row-span-2"
          data-swapy-slot="c"
        >
          <div
            data-swapy-item="c"
            className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide"
          >
            01
          </div>
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="d"
        >
          <div
            data-swapy-item="d"
            className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide"
          >
            01
          </div>
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="e"
        >
          <div
            data-swapy-item="e"
            className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide"
          >
            01
          </div>
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="f"
        >
          <div
            data-swapy-item="f"
            className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide"
          >
            01
          </div>
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="g"
        >
          <div
            data-swapy-item="g"
            className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide"
          >
            01
          </div>
        </div>
        <div
          className="col-span-2 lg:col-span-2 xl:col-span-1"
          data-swapy-slot="h"
        >
          <div
            data-swapy-item="h"
            className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide"
          >
            01
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityExplorer;
