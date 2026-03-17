import { create } from "zustand";

interface FloatState {
  activeId: number | null;
  setActive: (id: number | null) => void;
}

export const useFloatStore = create<FloatState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
