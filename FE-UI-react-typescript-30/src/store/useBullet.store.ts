import { create } from "zustand";
import type { BulletState } from "../interface/auth";

export const useBulletStore = create<BulletState>((set) => ({
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
}));
