import { ReactNode } from "react";

export type ContextMenuItemType =
  | "item"
  | "checkbox"
  | "radio"
  | "sub"
  | "separator"
  | "label";
export type ShortcutKey =
  | "Cmd"
  | "Ctrl"
  | "Shift"
  | "Alt"
  | "Super"
  | "Option"
  | "Tab"
  | "Space"
  | "Enter"
  | "Return";

export interface BaseContextMenuItem {
  type: ContextMenuItemType;
  label?: string;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
}

export interface ContextMenuActionItem extends BaseContextMenuItem {
  type: "item";
  onClick: () => void;
}

export interface ContextMenuCheckboxItem extends BaseContextMenuItem {
  type: "checkbox";
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface ContextMenuRadioItem extends BaseContextMenuItem {
  type: "radio";
  value: string;
  name: string;
}

export interface ContextMenuSubItem extends BaseContextMenuItem {
  type: "sub";
  items: ContextMenuItem[];
}

export interface ContextMenuSeparatorItem extends BaseContextMenuItem {
  type: "separator";
}

export interface ContextMenuLabelItem extends BaseContextMenuItem {
  type: "label";
}

export type ContextMenuItem =
  | ContextMenuActionItem
  | ContextMenuCheckboxItem
  | ContextMenuRadioItem
  | ContextMenuSubItem
  | ContextMenuSeparatorItem
  | ContextMenuLabelItem;

export interface ContextMenuProps {
  children: ReactNode;
  items: ContextMenuItem[];
}

export interface ContextMenuContentProps {
  items: ContextMenuItem[];
}

export interface ContextMenuItemProps {
  item: ContextMenuItem;
}
