 "use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return <button aria-label="Toggle dark mode" className="grid h-11 w-11 place-items-center rounded-[14px] border border-[var(--line)] bg-[var(--card)]" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
    {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
  </button>;
}
