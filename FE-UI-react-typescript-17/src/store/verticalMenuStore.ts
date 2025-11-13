// store/menuStore.ts
import { create } from "zustand";

interface VerticalMenuState {
  isOpen: boolean;
  activePath: string;
  toggleMenu: () => void;
  setActivePath: (path: string) => void;
}

export const useMenuStore = create<VerticalMenuState>((set) => ({
  isOpen: true,
  activePath: "/",
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setActivePath: (path) => set({ activePath: path }),
}));
