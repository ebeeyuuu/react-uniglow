"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";

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
}

const Sidebar: React.FC<SidebarProps> = ({
  items,
  username,
  email,
  avatarUrl,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`
      fixed md:sticky top-0 h-screen bg-zinc-900 text-zinc-100 
      transition-all duration-300 ease-in-out
      ${isCollapsed ? "-translate-x-full" : "translate-x-0"}
      md:translate-x-0
      ${isCollapsed ? "w-0" : "w-64"}
      md:w-64
    `}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 overflow-y-auto scrollbar-hide p-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <SidebarItem key={item.name} item={item} />
            ))}
          </ul>
        </nav>
        <ProfileMenu username={username} email={email} avatarUrl={avatarUrl} />
      </div>
    </aside>
  );
};

const SidebarItem: React.FC<{ item: NavigationItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const content = (
    <div
      className={`
        flex items-center justify-between p-2 rounded-md cursor-pointer
        hover:bg-zinc-800/50 transition-colors
      `}
      onClick={() => hasChildren && setIsOpen(!isOpen)}
    >
      <div className="flex items-center space-x-3">
        {item.icon && <span className="w-5 h-5">{item.icon}</span>}
        <span className="text-xs">{item.name}</span>
      </div>
      {hasChildren && (
        <span className="text-zinc-400">
          {isOpen ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />}
        </span>
      )}
    </div>
  );

  return (
    <li>
      {item.href ? (
        <Link href={item.href} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
      {hasChildren && isOpen && (
        <ul className="ml-4 mt-2 space-y-1.5 border-l border-zinc-800 pl-2">
          {item.children!.map((child) => (
            <SidebarItem key={child.name} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
