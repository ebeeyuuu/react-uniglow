import React, { useState } from 'react';
import { ContextMenuItemProps, ContextMenuSubItem } from './context-menu-types';
import { HiChevronRight } from 'react-icons/hi';
import { FiCheck } from 'react-icons/fi';
import { ContextMenuContent } from './ContextMenuContent';

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ item }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const baseClasses = "w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 flex items-center";

  if (item.type === 'separator') {
    return <hr className="my-1 border-gray-700" />;
  }

  if (item.type === 'label') {
    return <div className={`${baseClasses} font-semibold text-gray-400`}>{item.label}</div>;
  }

  if (item.type === 'checkbox') {
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
          <span className="ml-auto text-xs text-gray-500">{item.shortcut}</span>
        )}
      </button>
    );
  }

  if (item.type === 'radio') {
    return (
      <button className={baseClasses} disabled={item.disabled}>
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center">
          <span className={`w-2 h-2 rounded-full ${item.checked ? 'bg-blue-500' : 'bg-gray-600'}`} />
        </span>
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label}
      </button>
    );
  }

  if (item.type === 'sub') {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
      >
        <button className={`${baseClasses} justify-between`} disabled={item.disabled}>
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
      {item.label}
      {item.shortcut && (
        <span className="ml-auto text-xs text-gray-500">{item.shortcut}</span>
      )}
    </button>
  );
};

