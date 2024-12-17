"use client";

import React, { useState, useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import DashboardHeader from "./DashboardSections/DashboardHeader";
import UniversityExplorer from "./DashboardSections/UniversityExplorer";

interface SwapEvent {
  fromSlot: string;
  toSlot: string;
  draggingItem: string;
  swapWithItem: string;
}

const BentoBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [swapEvent, setSwapEvent] = useState<SwapEvent | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const swapy = createSwapy(containerRef.current, {
        animation: "dynamic",
        autoScrollOnDrag: true,
      });

      swapy.onBeforeSwap((event) => {
        setSwapEvent({
          fromSlot: event.fromSlot,
          toSlot: event.toSlot,
          draggingItem: event.draggingItem,
          swapWithItem: event.swapWithItem,
        })

        return event;
      })

      return () => {
        swapy.destroy();
      };
    }
  });

  return (
    <div className="text-white pb-20 overflow-auto scrollbar-hide">
      <div>
        <DashboardHeader />
      </div>

      <div
        ref={containerRef}
        className="w-[80dvw] mx-auto mt-8 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3"
      >
        <div
          className="col-span-3 max-[640px]:row-span-3 row-span-4"
          data-swapy-slot="a"
        >
          <UniversityExplorer data-swapy-item="a" />
        </div>
        <div
          className="col-span-1 max-[640px]:row-span-1 row-span-4"
          data-swapy-slot="b"
        >
          <div data-swapy-item="b" className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">Box 2</div>
        </div>
        <div
          className="col-span-2 max-[640px]:row-span-1 row-span-2"
          data-swapy-slot="c"
        >
          <div data-swapy-item="c" className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">Box 3</div>
        </div>
        <div
          className="col-span-1 max-[640px]:col-span-2 row-span-1"
          data-swapy-slot="d"
        >
          <div data-swapy-item="d" className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">Box 4</div>
        </div>
        <div
          className="col-span-1 row-span-1"
          data-swapy-slot="e"
        >
          <div data-swapy-item="e" className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">Box 5</div>
        </div>
        <div
          className="col-span-1 row-span-1"
          data-swapy-slot="f"
        >
          <div data-swapy-item="f" className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">Box 6</div>
        </div>
        <div
          className="col-span-1 row-span-1"
          data-swapy-slot="g"
        >
          <div data-swapy-item="g" className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">Box 7</div>
        </div>
        <div
          className="col-span-1 row-span-1"
          data-swapy-slot="h"
        >
          <div data-swapy-item="h" className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">Box 8</div>
        </div>
        <div
          className="max-[640px]:col-span-3 col-span-2 xl:col-span-3 row-span-1"
          data-swapy-slot="i"
        >
          <div data-swapy-item="i" className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">Box 9</div>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
