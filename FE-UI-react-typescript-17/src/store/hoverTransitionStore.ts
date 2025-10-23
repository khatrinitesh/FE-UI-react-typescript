// src/store/hoverTransitionStore.ts

import { create } from "zustand";
import type { HoverTransitionSettings } from "../interface";
import { DEFAULT_HOVER_TRANSITION_SETTINGS } from "../components/TransitionHover/data";

interface HoverTransitionState extends HoverTransitionSettings {
  setScale: (value: number) => void;
  setDuration: (value: number) => void;
  setColor: (value: string) => void;
}

export const useHoverTransitionStore = create<HoverTransitionState>((set) => ({
  ...DEFAULT_HOVER_TRANSITION_SETTINGS,

  setScale: (value) => set({ scale: value }),
  setDuration: (value) => set({ duration: value }),
  setColor: (value) => set({ color: value }),
}));
