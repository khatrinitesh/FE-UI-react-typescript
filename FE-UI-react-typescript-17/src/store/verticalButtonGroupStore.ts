import { create } from "zustand";

interface VerticalButtonGroupState {
  activeValue: string;
  setActiveValue: (value: string) => void;
}

export const useButtonGroupStore = create<VerticalButtonGroupState>((set) => ({
  activeValue: "option1", // default active
  setActiveValue: (value) => set({ activeValue: value }),
}));
