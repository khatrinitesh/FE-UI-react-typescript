import { create } from "zustand";

interface MenuState {
  activeDropdown: string | null;
  setActiveDropdown: (label: string | null) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  activeDropdown: null,
  setActiveDropdown: (label) => set({ activeDropdown: label }),
}));
