import React from "react";
import { ContextMenuItem } from "./ContextMenuItem";
import { ContextMenuContentProps } from "./context-menu-types";

export const ContextMenuContent: React.FC<ContextMenuContentProps> = ({
  items,
}) => {
  return (
    <div className="bg-zinc-950 w-full border border-white/[0.25] rounded-md shadow-lg min-w-[200px]">
      {items.map((item, index) => (
        <ContextMenuItem key={index} item={item} />
      ))}
    </div>
  );
};
