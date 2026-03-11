import { create } from "zustand";

interface RadioState {
  selected: string;
  setSelected: (value: string) => void;
}

export const useRadioStore = create<RadioState>((set) => ({
  selected: "",
  setSelected: (value) => set({ selected: value }),
}));
