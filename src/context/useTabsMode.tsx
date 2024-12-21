import { useState, useEffect } from "react";

const TABS_MODE_KEY = "isTabsMode";

export const useTabsMode = () => {
  const [isTabsMode, setIsTabsMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(TABS_MODE_KEY);
      if (storedValue !== null) {
        setIsTabsMode(JSON.parse(storedValue));
      }
    }
  }, []);

  const toggleTabsMode = () => {
    setIsTabsMode((prev) => {
      const newValue = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem(TABS_MODE_KEY, JSON.stringify(newValue));
      }
      return newValue;
    });
  };

  return { isTabsMode, toggleTabsMode };
};
