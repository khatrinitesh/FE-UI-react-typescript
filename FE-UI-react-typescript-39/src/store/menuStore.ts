import { create } from "zustand";
import type { MenuState } from "../interface";

export const useMenuStore = create<MenuState>((set) => ({
  open: false,
  toggleMenu: () => set((state) => ({ open: !state.open })),
}));
