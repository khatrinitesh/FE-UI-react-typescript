// src/store/useTextRotatorStore.ts
import { create } from "zustand";
import {
  ROTATOR_STATUS,
  type RotatorStatus,
} from "../components/TextRotator/textRotatorConstants";

interface TextRotatorStore {
  status: RotatorStatus;
  texts: string[];
  currentIndex: number;
  addText: (text: string) => void;
  removeText: (index: number) => void;
  nextText: () => void;
  toggleStatus: () => void;
  clearTexts: () => void;
}

export const useTextRotatorStore = create<TextRotatorStore>((set, get) => ({
  status: ROTATOR_STATUS.PLAYING,
  texts: ["Hello", "Welcome", "React + TypeScript", "Zustand Rocks!"],
  currentIndex: 0,

  addText: (text) => set((state) => ({ texts: [...state.texts, text] })),

  removeText: (index) =>
    set((state) => ({ texts: state.texts.filter((_, i) => i !== index) })),

  nextText: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % (state.texts.length || 1),
    })),

  toggleStatus: () =>
    set((state) => ({
      status:
        state.status === ROTATOR_STATUS.PLAYING
          ? ROTATOR_STATUS.PAUSED
          : ROTATOR_STATUS.PLAYING,
    })),

  clearTexts: () => set({ texts: [], currentIndex: 0 }),
}));
