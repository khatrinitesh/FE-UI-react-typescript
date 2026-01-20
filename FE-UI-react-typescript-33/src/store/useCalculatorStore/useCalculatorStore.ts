import { create } from "zustand";
import type { CalculatorState } from "../../interface";

export const useCalculatorStore = create<CalculatorState>((set) => ({
  value: 0,
  add: (n) => set((state) => ({ value: state.value + n })),
  subtract: (n) => set((state) => ({ value: state.value - n })),
  reset: () => set({ value: 0 }),
}));
