import { create } from "zustand";

interface NavbarState {
  activeId: number | null;
  setActive: (id: number | null) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
