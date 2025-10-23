// src/store/typewriterStore.ts

import { create } from "zustand";
import { DEFAULT_TYPEWRITER_CONFIG } from "../components/TypewriterEffect/typeWriterConstants";
import type { TypewriterConfig } from "../interface";

interface TypewriterState extends TypewriterConfig {
  currentIndex: number;
  displayedText: string;
  startTyping: () => void;
  resetTyping: () => void;
}

export const useTypewriterStore = create<TypewriterState>((set, get) => ({
  ...DEFAULT_TYPEWRITER_CONFIG,
  currentIndex: 0,
  displayedText: "",

  startTyping: () => {
    const { text, speed } = get();
    let index = 0;

    const intervalId = setInterval(() => {
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
        return;
      }
      set({ currentIndex: index, displayedText: text.slice(0, index) });
    }, speed);
  },

  resetTyping: () => set({ currentIndex: 0, displayedText: "" }),
}));
