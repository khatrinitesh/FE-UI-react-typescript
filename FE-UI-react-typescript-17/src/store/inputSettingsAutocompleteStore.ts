// src/store/inputSettingsStore.ts

import { create } from "zustand";
import { DEFAULT_INPUT_SETTINGS_AUTOCOMPLETE } from "../components/TurnOffAutocomplete/turnOffConstants";
import type { InputSettings } from "../interface";

interface InputSettingsState extends InputSettings {
  toggleAutocomplete: () => void;
  setAutocomplete: (value: "on" | "off") => void;
}

export const useInputSettingsStore = create<InputSettingsState>((set) => ({
  ...DEFAULT_INPUT_SETTINGS_AUTOCOMPLETE,

  toggleAutocomplete: () =>
    set((state) => ({
      autocomplete: state.autocomplete === "on" ? "off" : "on",
    })),

  setAutocomplete: (value: "on" | "off") => set({ autocomplete: value }),
}));
