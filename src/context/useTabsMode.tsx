"use client";

import { useState, useEffect } from "react";

export const useTabsMode = () => {
  const [isTabsMode, setIsTabsMode] = useState(false);

  const toggleTabsMode = () => {
    setIsTabsMode((prev) => !prev);
  };

  return { isTabsMode, toggleTabsMode };
};
