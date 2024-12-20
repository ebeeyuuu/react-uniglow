import React, { useState } from 'react';
import { ContextMenuItemProps, ContextMenuSubItem } from './context-menu-types';
import { HiChevronRight } from 'react-icons/hi';
import { FiCheck } from 'react-icons/fi';
import { FaApple, FaWindows, FaKeyboard } from 'react-icons/fa';
import { ContextMenuContent } from './ContextMenuContent';

interface NavigatorUAData {
  platform: string;
  brands: Array<{ brand: string; version: string }>;
  mobile: boolean;
}

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ item }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const baseClasses =
    "w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-zinc-800 focus:outline-none focus:bg-gray-700 flex items-center";

  const isMac = (() => {
    try {
      if ('userAgentData' in navigator && 
          (navigator.userAgentData as NavigatorUAData)) {
        return (navigator.userAgentData as NavigatorUAData)
          .platform.toLowerCase().includes('mac');
      }
      
      return /Mac|iPhone|iPad/i.test(navigator.userAgent);
    } catch (error) {
      console.warn('Error detecting Mac device:', error);
      return false;
    }
  })();

  const keyMapping: { [key: string]: string } = {
    Super: isMac ? 'Cmd' : 'Ctrl',
    Meta: isMac ? 'Cmd' : 'Ctrl',
    Option: 'Alt',
  };

  const shortcutIcons: { [key: string]: JSX.Element } = {
    Ctrl: <FaKeyboard className="h-[1em]" />,
    Cmd: isMac ? <FaApple className="h-[1em]" /> : <FaWindows className="h-[1em]" />,
    Alt: <span className="font-semibold text-[1em]">⌥</span>,
    Shift: <span className="font-semibold text-[1em]">⇧</span>,
    Left: <span className="font-semibold text-[1em]">←</span>,
    Right: <span className="font-semibold text-[1em]">→</span>,
    Up: <span className="font-semibold text-[1em]">↑</span>,
    Down: <span className="font-semibold text-[1em]">↓</span>,
    Return: <span className="font-semibold text-[1em]">↵</span>,
    Enter: <span className="font-semibold text-[1em]">↵</span>,
    Space: <span className="font-semibold text-[1em]">␣</span>,
  };

  const getShortcut = (shortcut: string | undefined) => {
    if (!shortcut) return null;

    const keys = shortcut.split("+");
    return keys.map((key, idx) => {
      const mappedKey = keyMapping[key.trim()] || key.trim();
      return (
        <React.Fragment key={idx}>
          {shortcutIcons[mappedKey] || <span>{mappedKey}</span>}
          {idx < keys.length - 1 && <span className="mx-0.5" />}
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
    const radioItem = item as Extract<ContextMenuItemProps['item'], { type: 'radio' }>;
    return (
      <button className={baseClasses} disabled={radioItem.disabled}>
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center">
          <span
            className={`w-2 h-2 rounded-full ${
              radioItem.checked ? "bg-blue-500" : "bg-gray-600"
            }`}
          />
        </span>
        {radioItem.icon && <span className="mr-2">{radioItem.icon}</span>}
        {radioItem.label}
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
            <ContextMenuContent items={(item as ContextMenuSubItem).items} />
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
