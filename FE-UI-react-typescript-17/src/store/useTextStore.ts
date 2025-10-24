// src/store/useTextStore.ts
import { create } from "zustand";
import { TEXT_VALUES, type TextValue } from "../components/ToggleText/data";

interface TextState {
  text: TextValue;
  toggleText: () => void;
}

export const useTextStore = create<TextState>((set, get) => ({
  text: TEXT_VALUES.HELLO,
  toggleText: () => {
    const current = get().text;
    const next =
      current === TEXT_VALUES.HELLO ? TEXT_VALUES.HAPPY : TEXT_VALUES.HELLO;
    set({ text: next });
  },
}));
