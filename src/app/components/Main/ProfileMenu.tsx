"use client";

import React, { useState } from "react";
import {
  FaSignOutAlt,
  FaCog,
  FaBell,
  FaQuestionCircle,
  FaCreditCard,
  FaUser,
  FaStar,
} from "react-icons/fa";

import Avatar from "@/app/components/UI/Avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/app/components/UI/DropdownMenu";

interface ProfileMenuProps {
  username: string;
  email: string;
  avatarUrl?: string;
}

export default function ProfileMenu({
  username,
  email,
  avatarUrl,
}: ProfileMenuProps) {
  return (
    <div className="sticky bottom-0 p-4 mt-auto bg-zinc-900 border-t border-zinc-800">
      <DropdownMenu>
        <DropdownMenuTrigger
          onClick={() => {}}
          className="flex items-center w-full gap-3 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
        >
          <Avatar src={avatarUrl} fallback={username[0]} />
          <div className="flex flex-col text-left">
            <span className="text-xs font-medium text-zinc-100">
              {username}
            </span>
            <span className="text-[10px] text-zinc-400">{email}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => console.log("Upgrade to Pro")}
            selected={false}
          >
            <FaStar className="mr-2 h-4 w-4 text-indigo-500" />
            <span>Upgrade to Pro</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => console.log("Account")}
            selected={false}
          >
            <FaUser className="mr-2 h-4 w-4" />
            <span>Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("Billing")}
            selected={false}
          >
            <FaCreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("Settings")}
            selected={false}
          >
            <FaCog className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("Notifications")}
            selected={false}
          >
            <FaBell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("Help")}
            selected={false}
          >
            <FaQuestionCircle className="mr-2 h-4 w-4" />
            <span>Help</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => console.log("Log out")}
            selected={false}
            className="text-red-500"
          >
            <FaSignOutAlt className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
