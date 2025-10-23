import { create } from "zustand";

interface VortexState {
  active: boolean;
  reverse: boolean;
  toggleActive: () => void;
  toggleDirection: () => void;
}

export const useVortexStore = create<VortexState>((set) => ({
  active: false,
  reverse: false,
  toggleActive: () => set((state) => ({ active: !state.active })),
  toggleDirection: () => set((state) => ({ reverse: !state.reverse })),
}));
