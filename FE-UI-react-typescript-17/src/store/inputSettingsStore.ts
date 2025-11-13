// src/store/inputSettingsStore.ts

import { create } from "zustand";
import { DEFAULT_INPUT_SETTINGS } from "../components/TurnOffSpellcheck/inputConstants";
import type { InputSettings } from "../interface";

interface InputSettingsState extends InputSettings {
  toggleSpellCheck: () => void;
  setSpellCheck: (value: boolean) => void;
}

export const useInputSettingsStore = create<InputSettingsState>((set) => ({
  ...DEFAULT_INPUT_SETTINGS,

  toggleSpellCheck: () => set((state) => ({ spellCheck: !state.spellCheck })),

  setSpellCheck: (value: boolean) => set({ spellCheck: value }),
}));
