import { create } from "zustand";

interface CalculatorState {
  display: string;
  append: (value: string) => void;
  clear: () => void;
  calculate: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  display: "",

  append: (value) =>
    set((state) => ({
      display: state.display + value,
    })),

  clear: () => set({ display: "" }),

  calculate: () => {
    try {
      const result = eval(get().display);
      set({ display: String(result) });
    } catch {
      set({ display: "Error" });
    }
  },
}));
