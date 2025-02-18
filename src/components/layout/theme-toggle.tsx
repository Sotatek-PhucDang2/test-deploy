"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="hidden md:flex"
    >
      {theme === "dark" || !theme ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
