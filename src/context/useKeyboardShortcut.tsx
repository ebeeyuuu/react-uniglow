import { useEffect } from "react";

export const useKeyboardShortcut = (
  shortcut: string,
  onShortcut: () => void,
) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const keys = shortcut.split("+").map((k) => k.trim().toLowerCase());
      const keyPressed = e.key.toLowerCase();

      if (keys.includes(keyPressed)) {
        e.preventDefault();
        onShortcut();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [shortcut, onShortcut]);
};
