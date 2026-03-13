import { create } from "zustand";

interface DropdownState {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export const useDropMorphismStore = create<DropdownState>((set) => ({
  isOpen: false,
  toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDropdown: () => set({ isOpen: false }),
}));
