import { create } from "zustand";
import type { ClipboardState } from "../interface";

export const useClipboardStore = create<ClipboardState>((set) => ({
  copied: false,

  setCopied: (value) =>
    set({
      copied: value,
    }),
}));
