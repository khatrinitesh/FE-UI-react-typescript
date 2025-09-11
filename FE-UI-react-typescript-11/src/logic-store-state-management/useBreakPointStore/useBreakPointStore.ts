import { create } from "zustand";
import type { BreakpointStore } from "../../interface";

export const useBreakpointStore = create<BreakpointStore>((set) => ({
  current: "desktop", // default
  setBreakpoint: (bp) => set({ current: bp }),
}));
