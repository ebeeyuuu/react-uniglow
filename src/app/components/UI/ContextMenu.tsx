import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const isSuper = e.metaKey || e.ctrlKey;

    items.forEach((item) => {
      if (!item.shortcut) return;

      const parts = item.shortcut.toLowerCase().split('+').map(k => k.trim());

      const requiresSuper = parts.includes('super');
      if (requiresSuper !== isSuper) return;

      const requiresAlt = parts.includes('alt');
      if (requiresAlt !== e.altKey) return;

      const requiresShift = parts.includes('shift');
      if (requiresShift !== e.shiftKey) return;

      const targetKey = parts[parts.length - 1];
      const pressedKey = e.key.toLowerCase();

      if (targetKey === pressedKey) {
        e.preventDefault();
        item.onClick?.();
      }
    });
  }, [items]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, items, handleKeyDown]);

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
