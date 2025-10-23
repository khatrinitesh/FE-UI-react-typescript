// src/store/buttonStore.ts

import { create } from "zustand";
import type { ButtonConfig } from "../interface";
import { DEFAULT_BUTTON_CONFIG } from "../components/TriggerButtonEnter/data";

interface ButtonState extends ButtonConfig {
  clickCount: number;
  incrementCount: () => void;
}

export const useButtonStore = create<ButtonState>((set) => ({
  ...DEFAULT_BUTTON_CONFIG,
  clickCount: 0,
  incrementCount: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}));
