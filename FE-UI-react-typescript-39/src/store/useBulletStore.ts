import { create } from "zustand";

interface BulletState {
  activeId: number | null;
  setActive: (id: number) => void;
}

export const useBulletStore = create<BulletState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
