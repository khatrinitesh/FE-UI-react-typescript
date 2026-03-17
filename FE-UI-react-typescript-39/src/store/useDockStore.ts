import { create } from "zustand";

interface DockState {
  activeId: number | null;
  setActive: (id: number | null) => void;
}

export const useDockStore = create<DockState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
