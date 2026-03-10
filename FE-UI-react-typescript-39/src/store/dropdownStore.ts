import { create } from "zustand";
import type { DropdownState } from "../interface";

export const useDropdownStore = create<DropdownState>((set) => ({
  open: false,

  toggleDropdown: () => set((state) => ({ open: !state.open })),
  closeDropdown: () => set({ open: false }),
}));
