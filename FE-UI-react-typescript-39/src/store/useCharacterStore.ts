import { create } from "zustand";
import type { CharacterState } from "../interface";

export const useCharacterStore = create<CharacterState>((set) => ({
  text: "",
  setText: (value) => set({ text: value }),
}));
