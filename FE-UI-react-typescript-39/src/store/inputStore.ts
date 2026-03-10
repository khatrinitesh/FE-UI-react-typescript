import { create } from "zustand";
import type { InputState } from "../interface";

export const useInputStore = create<InputState>((set) => ({
  value: "",

  setValue: (value) => set({ value }),

  clearValue: () => set({ value: "" }),
}));
