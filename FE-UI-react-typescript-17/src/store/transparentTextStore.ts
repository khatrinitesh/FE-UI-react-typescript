// src/store/transparentTextStore.ts

import { create } from "zustand";
import type { TransparentTextSettings } from "../interface";
import { DEFAULT_TRANSPARENT_TEXT_SETTINGS } from "../components/TransparentImgTxt/data";

interface TransparentTextState extends TransparentTextSettings {
  setText: (text: string) => void;
  setOpacity: (opacity: number) => void;
  setColor: (color: string) => void;
}

export const useTransparentTextStore = create<TransparentTextState>((set) => ({
  ...DEFAULT_TRANSPARENT_TEXT_SETTINGS,

  setText: (text) => set({ text }),

  setOpacity: (opacity) => set({ opacity }),

  setColor: (color) => set({ color }),
}));
