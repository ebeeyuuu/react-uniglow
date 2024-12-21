import React, { useState, useEffect, useCallback } from "react";
import { ContextMenuItemProps, ShortcutKey } from "./context-menu-types";
import { HiChevronRight } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";
import {
  MdOutlineKeyboardCommandKey,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { ContextMenuContent } from "./ContextMenuContent";

const getSuperKeyLabel = (): string => {
  const userAgent = navigator?.userAgent || "";
  if (userAgent.includes("Mac")) {
    return "Cmd";
  } else if (userAgent.includes("Win") || userAgent.includes("Linux")) {
    return "Win";
  }
  return "Super";
};

const useKeyboardShortcut = (item: ContextMenuItemProps['item']) => {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const isSuper = e.metaKey || e.ctrlKey || e.key === "Meta";
      if (!isSuper) return;

      const shortcut = item.shortcut?.toLowerCase().split("+").map(k => k.trim());
      if (!shortcut) return;

      const keyPressed = e.key.toLowerCase();
      if (shortcut.includes(keyPressed)) {
        e.preventDefault();
        item.onClick?.();
      }
    },
    [item]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
};

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ item }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
  useKeyboardShortcut(item);

  const baseClasses =
    "w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-zinc-800 focus:outline-none focus:bg-gray-700 flex items-center";

  const keyIcons: { [key in ShortcutKey]?: React.ReactNode } = {
    Cmd: <MdOutlineKeyboardCommandKey className="h-[1em] w-[1em]" />,
    Ctrl: <span className="font-semibold text-[1em]">Ctrl</span>,
    Shift: <span className="font-semibold text-[1em]">⇧</span>,
    Alt: <span className="font-semibold text-[1em]">⎇</span>,
    Super: <span className="font-semibold text-[1em]">{getSuperKeyLabel()}</span>,
    Option: <span className="font-semibold text-[1em]">⌥</span>,
    Tab: <span className="font-semibold text-[1em]">⇥</span>,
    Space: <span className="font-semibold text-[1em]">␣</span>,
    Enter: <span className="font-semibold text-[1em]">↵</span>,
    Return: <span className="font-semibold text-[1em]">↩</span>,
    Up: <MdOutlineKeyboardArrowUp className="h-[1em] w-[1em]" />,
    Down: <MdOutlineKeyboardArrowDown className="h-[1em] w-[1em]" />,
    Left: <MdOutlineKeyboardArrowLeft className="h-[1em] w-[1em]" />,
    Right: <MdOutlineKeyboardArrowRight className="h-[1em] w-[1em]" />,
  };

  const getShortcut = (shortcut: string | undefined) => {
    if (!shortcut) return null;

    const keys = shortcut.split("+");
    return keys.map((key, idx) => {
      const trimmedKey = key.trim() as ShortcutKey;
      return (
        <React.Fragment key={idx}>
          {keyIcons[trimmedKey] || <span>{trimmedKey}</span>}
          {idx < keys.length - 1 && <span className="mx-0.5">+</span>}
        </React.Fragment>
      );
    });
  };

  if (item.type === "separator") {
    return <hr className="my-1 border-gray-700" />;
  }

  if (item.type === "label") {
    return (
      <div className={`${baseClasses} font-semibold text-gray-400`}>
        {item.label}
      </div>
    );
  }

  if (item.type === "checkbox") {
    return (
      <button
        onClick={() => item.onChange(!item.checked)}
        className={baseClasses}
        disabled={item.disabled}
      >
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center">
          {item.checked && <FiCheck className="w-3 h-3 text-blue-500" />}
        </span>
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label}
        {item.shortcut && (
          <span className="ml-auto flex items-center text-gray-500">
            {getShortcut(item.shortcut)}
          </span>
        )}
      </button>
    );
  }

  if (item.type === "radio") {
    return (
      <button
        className={baseClasses}
        disabled={item.disabled}
        onClick={() => item.onChange?.(item.value)}
      >
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center">
          <span
            className={`w-2 h-2 rounded-full ${
              item.checked ? "bg-blue-500" : "bg-gray-600"
            }`}
          />
        </span>
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label}
      </button>
    );
  }

  if (item.type === "sub") {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
      >
        <button
          className={`${baseClasses} justify-between`}
          disabled={item.disabled}
        >
          <span className="flex items-center">
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </span>
          <HiChevronRight className="w-4 h-4 ml-2" />
        </button>
        {isSubMenuOpen && (
          <div className="absolute left-full top-0 ml-1">
            <ContextMenuContent items={item.items} />
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={item.onClick}
      className={baseClasses}
      disabled={item.disabled}
    >
      {item.icon && <span className="mr-2">{item.icon}</span>}
      <span className="mr-6">{item.label}</span>
      {item.shortcut && (
        <span className="ml-auto flex items-center text-gray-500">
          {getShortcut(item.shortcut)}
        </span>
      )}
    </button>
  );
};
