"use client";

import * as React from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

interface DropdownMenuProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const DropdownMenu = ({ children, className }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`relative inline-block text-left ${className || ""}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === DropdownMenuTrigger) {
            return React.cloneElement(child, {
              ...child.props,
              onClick: () => setIsOpen(!isOpen),
            });
          }
          if (child.type === DropdownMenuContent) {
            return React.cloneElement(child, {
              ...child.props,
              isOpen,
            });
          }
        }
        return child;
      })}
    </div>
  );
};

const DropdownMenuTrigger = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        className ||
        `flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-zinc-900 border border-zinc-800 rounded-md shadow-sm hover:bg-zinc-900`
      }
    >
      {children}
    </button>
  );
};

const DropdownMenuContent = ({
  children,
  isOpen,
  className,
  position = "bottom",
}: {
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
  position?: "bottom" | "right" | "left" | "top";
}) => {
  if (!isOpen) return null;

  const positionClasses = {
    bottom: "top-full left-0 mt-2",
    right: "left-full top-0 ml-2",
    left: "right-full top-0 mr-2",
    top: "bottom-full left-0 mb-2",
  };

  return (
    <div
      className={`
        absolute z-50 w-56 origin-top-right bg-zinc-900 
        border border-zinc-800 rounded-md shadow-lg 
        ring-1 ring-black ring-opacity-5 focus:outline-none
        ${positionClasses[position]}
        ${className || ""}
      `}
    >
      <div className="py-1">{children}</div>
    </div>
  );
};

const DropdownMenuItem = ({
  children,
  onClick,
  selected,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  selected: boolean;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center w-full px-4 py-2 text-sm text-gray-700 ${
        selected ? "bg-purple-600" : "hover:bg-zinc-900"
      } ${className}`}
    >
      {selected && <FaCheck className="mr-2 h-4 w-4 text-white-600" />}
      {children}
    </button>
  );
};

const DropdownMenuCheckboxItem = ({
  children,
  checked,
  onChange,
  className,
}: {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  className?: string;
}) => {
  return (
    <label
      className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-2 w-4 h-4"
      />
      {children}
    </label>
  );
};

const DropdownMenuRadioItem = ({
  children,
  selected,
  onChange,
  className,
}: {
  children: React.ReactNode;
  selected: boolean;
  onChange: () => void;
  className?: string;
}) => {
  return (
    <label
      className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 cursor-pointer ${className}`}
    >
      <input
        type="radio"
        checked={selected}
        onChange={onChange}
        className="mr-2 w-4 h-4"
      />
      {children}
    </label>
  );
};

const DropdownMenuLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-2 text-sm font-semibold text-gray-700">
      {children}
    </div>
  );
};

const DropdownMenuSeparator = () => {
  return <div className="my-1 h-px bg-gray-200"></div>;
};

const DropdownMenuShortcut = ({ children }: { children: React.ReactNode }) => {
  return <span className="ml-auto text-xs text-gray-500">{children}</span>;
};

const DropdownMenuGroup = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const DropdownMenuPortal = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const DropdownMenuSub = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const DropdownMenuSubTrigger = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-zinc-900 ${className}`}
    >
      {children}
      <FaChevronDown className="ml-auto w-5 h-5" />
    </button>
  );
};

const DropdownMenuSubContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="absolute left-0 mt-1 origin-top-right bg-zinc-900 border border-zinc-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="py-1">{children}</div>
    </div>
  );
};

const DropdownMenuRadioGroup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div>{children}</div>;
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
