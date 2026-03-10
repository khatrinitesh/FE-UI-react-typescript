import { create } from "zustand";
import type { DotState } from "../interface";

export const useDotsStore = create<DotState>((set) => ({
  active: 0,
  setActive: (index) => set({ active: index }),
}));
