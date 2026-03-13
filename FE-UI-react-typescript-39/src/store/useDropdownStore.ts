import { create } from "zustand";
import type { NavState } from "../interface";

export const useDropdownStore = create<NavState>((set) => ({
  isOpen: false,

  toggleDropdown: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),

  closeDropdown: () =>
    set({
      isOpen: false,
    }),
}));
