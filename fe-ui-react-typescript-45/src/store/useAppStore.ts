import { create } from "zustand";
import type { IAppState } from "../interfaces";

export const useAppStore = create<IAppState>()((set) => ({
  isDarkMode: true,
  activePage: "Home",

  toggleTheme: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
    })),

  setActivePage: (page) =>
    set({
      activePage: page,
    }),
}));
