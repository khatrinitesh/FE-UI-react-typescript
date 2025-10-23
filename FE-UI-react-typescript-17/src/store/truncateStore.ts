// src/store/truncateStore.ts

import { create } from "zustand";
import type { TruncateConfig } from "../interface";
import { DEFAULT_TRUNCATE_CONFIG } from "../components/TruncateStringEllipsis/truncateConstants";

interface TruncateState extends TruncateConfig {
  inputString: string;
  setInputString: (text: string) => void;
  setMaxLength: (length: number) => void;
  truncatedString: () => string;
}

export const useTruncateStore = create<TruncateState>((set, get) => ({
  ...DEFAULT_TRUNCATE_CONFIG,
  inputString: "",

  setInputString: (text) => set({ inputString: text }),

  setMaxLength: (length) => set({ maxLength: length }),

  truncatedString: () => {
    const { inputString, maxLength, ellipsis } = get();
    if (inputString.length <= maxLength) return inputString;
    return inputString.slice(0, maxLength) + ellipsis;
  },
}));
