import { create } from "zustand";
import type { ChatState } from "../interface";

export const useCharacterStore = create<ChatState>((set) => ({
  messages: [], // ✅ MUST exist

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),
}));
