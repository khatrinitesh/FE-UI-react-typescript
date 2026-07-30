import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex h-11 w-20 items-center rounded-full border border-secondary/15 bg-primary-soft p-1 transition-colors duration-300 hover:border-primary dark:border-dark-border dark:bg-dark-surface"
    >
      <span
        className={`flex size-9 items-center justify-center rounded-full bg-secondary text-white shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-9" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>
  );
}
