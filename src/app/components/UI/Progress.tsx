"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, ...props }, ref) => {
    const progressValue = Math.min(100, Math.max(0, value));

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
          className,
        )}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressValue}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-zinc-700 transition-all duration-200 ease-in-out"
          style={{ transform: `translateX(-${100 - progressValue}%)` }}
        />
      </div>
    );
  },
);

Progress.displayName = "Progress";

export { Progress };
