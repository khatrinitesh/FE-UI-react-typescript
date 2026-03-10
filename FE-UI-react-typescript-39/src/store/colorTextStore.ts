import { create } from "zustand";
import type { CollorfulTextState } from "../interface";
import { DEFAULT_TEXT } from "../constants/constants";

export const colorTextStore = create<CollorfulTextState>((set) => ({
  text: DEFAULT_TEXT,

  setText: (value) => set({ text: value }),
}));
