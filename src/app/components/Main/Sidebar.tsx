"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "../UI/DropdownMenu";

interface NavigationItem {
  name: string;
  icon?: React.ReactNode;
  href?: string;
  component?: React.ReactNode;
  children?: NavigationItem[];
}

interface SidebarProps {
  items: NavigationItem[];
  username: string;
  email: string;
  avatarUrl?: string;
  isCollapsed: boolean;
  onNavigate: (path: string[]) => void;
}

interface SidebarItemProps {
  item: NavigationItem;
  parentPath: string[];
  onNavigate: (path: string[]) => void;
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  items,
  username,
  email,
  avatarUrl,
  isCollapsed,
  onNavigate,
}) => {
  return (
    <aside
      className={`
        fixed md:relative top-0 h-screen bg-zinc-900 text-zinc-100 
        transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 overflow-y-auto scrollbar-hide p-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <SidebarItem 
                key={item.name} 
                item={item} 
                parentPath={[]}
                onNavigate={onNavigate}
                isCollapsed={isCollapsed}
              />
            ))}
          </ul>
        </nav>
        {!isCollapsed && (
          <ProfileMenu username={username} email={email} avatarUrl={avatarUrl} />
        )}
      </div>
    </aside>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  item, 
  parentPath,
  onNavigate,
  isCollapsed
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const currentPath = [...parentPath, item.name];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (hasChildren && isCollapsed) {
      setIsOpen(!isOpen);
    } else if (hasChildren) {
      setIsOpen(!isOpen);
      onNavigate(currentPath);
    } else {
      onNavigate(currentPath);
    }
  };

  const content = (
    <div
      className="relative"
      onMouseEnter={() => isCollapsed && setShowTooltip(true)}
      onMouseLeave={() => {
        isCollapsed && setShowTooltip(false);
        if (isCollapsed && !isOpen) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className={`
          flex items-center justify-between p-2 rounded-md cursor-pointer
          hover:bg-zinc-800/50 transition-colors relative
        `}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-3">
          {item.icon && (
            <span className="w-5 h-5 text-zinc-400">
              {item.icon}
            </span>
          )}
          {!isCollapsed && <span className="text-sm">{item.name}</span>}
        </div>
        {hasChildren && !isCollapsed && (
          <span className="text-zinc-400">
            {isOpen ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />}
          </span>
        )}
      </div>

      {isCollapsed && showTooltip && !isOpen && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-zinc-800 text-zinc-100 text-xs px-2 py-1 rounded z-50 whitespace-nowrap">
          {item.name}
        </div>
      )}

      {isCollapsed && isOpen && hasChildren && (
        <DropdownMenu>
          <DropdownMenuContent 
            position="right" 
            className="left-full top-0 ml-2"
            isOpen={true}
          >
            {item.children!.map((child) => (
              <DropdownMenuItem
                key={child.name}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate([...currentPath, child.name]);
                  setIsOpen(false);
                }}
                selected={false}
              >
                {child.icon && <span className="w-4 h-4 text-zinc-400 mr-2">{child.icon}</span>}
                <span>{child.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );

  return (
    <li>
      {item.href ? (
        <Link href={item.href} className="block" onClick={() => onNavigate(currentPath)}>
          {content}
        </Link>
      ) : (
        content
      )}
      {hasChildren && isOpen && !isCollapsed && (
        <ul className="ml-4 mt-2 space-y-1.5 border-l border-zinc-800 pl-2">
          {item.children!.map((child) => (
            <SidebarItem 
              key={child.name} 
              item={child} 
              parentPath={currentPath}
              onNavigate={onNavigate}
              isCollapsed={isCollapsed}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
