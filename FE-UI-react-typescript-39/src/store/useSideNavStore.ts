import { create } from "zustand";

interface SideNavState {
  openMenu: number | null;
  toggleMenu: (id: number) => void;
}

export const useSideNavStore = create<SideNavState>((set) => ({
  openMenu: null,
  toggleMenu: (id) =>
    set((state) => ({
      openMenu: state.openMenu === id ? null : id,
    })),
}));
