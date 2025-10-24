// src/store/useThemeStore.ts
import { create } from "zustand";
import { THEME_CLASSES, type ThemeClass } from "../components/ToggleClass/data";

interface ThemeState {
  theme: ThemeClass;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: THEME_CLASSES.LIGHT,
  toggleTheme: () => {
    const current = get().theme;
    const next =
      current === THEME_CLASSES.LIGHT
        ? THEME_CLASSES.DARK
        : THEME_CLASSES.LIGHT;
    set({ theme: next });
  },
}));
