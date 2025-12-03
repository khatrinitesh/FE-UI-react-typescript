// useArrowStore.ts
import { create } from "zustand";

interface ArrowState {
  active: "up" | "down" | "left" | "right" | null;
  setActive: (dir: ArrowState["active"]) => void;
}

export const useArrowStore = create<ArrowState>((set) => ({
  active: null,
  setActive: (dir) => set({ active: dir }),
}));
