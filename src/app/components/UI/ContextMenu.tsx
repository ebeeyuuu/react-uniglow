"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ContextMenuContent } from './ContextMenuContent';
import { ContextMenuProps } from './context-menu-types';

export const ContextMenu: React.FC<ContextMenuProps> = ({ children, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div onContextMenu={handleContextMenu} className="min-h-screen bg-black">
      {children}
      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
          className="z-50"
        >
          <ContextMenuContent items={items} />
        </div>
      )}
    </div>
  );
};

