import { create } from "zustand";
import type { TypewriterStore } from "../../interface";

export const useTypewriterStore = create<TypewriterStore>((set) => ({
  text: "",
  displayText: "",
  status: "IDLE",

  setText: (text) => set({ text }),
  setStatus: (status) => set({ status }),
  setDisplayText: (text) => set({ displayText: text }),
  reset: () =>
    set({
      text: "",
      displayText: "",
      status: "IDLE",
    }),
}));
