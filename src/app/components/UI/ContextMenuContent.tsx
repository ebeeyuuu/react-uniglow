import React from 'react';
import { ContextMenuItem } from './ContextMenuItem';
import { ContextMenuContentProps } from './context-menu-types';

export const ContextMenuContent: React.FC<ContextMenuContentProps> = ({ items }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 min-w-[200px]">
      {items.map((item, index) => (
        <ContextMenuItem key={index} item={item} />
      ))}
    </div>
  );
};

