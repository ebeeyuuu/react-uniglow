"use client";

import React, { forwardRef } from "react";
import { FaCheck } from "react-icons/fa";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center group cursor-pointer select-none">
        <input type="checkbox" ref={ref} className="sr-only peer" {...props} />
        <span
          className={`
          inline-block w-5 h-5 border-2 rounded transition-all duration-200
          ${props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
          peer-focus:ring-2 peer-focus:ring-blue-500/50
          border-gray-300
          peer-checked:bg-blue-600 peer-checked:border-blue-600
          ${className}
        `}
        >
          <span className="flex items-center justify-center h-full">
            {props.checked && <FaCheck className="text-white w-3 h-3" />}
          </span>
        </span>
        {label && (
          <span className="ml-2 text-sm text-white">
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
