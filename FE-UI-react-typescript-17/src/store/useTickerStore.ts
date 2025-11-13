// src/store/useTickerStore.ts
import { create } from "zustand";
import {
  TICKER_STATUS,
  type TickerStatus,
} from "../components/TickerMarquee/tickerConstants";

interface TickerStore {
  status: TickerStatus;
  messages: string[];
  addMessage: (msg: string) => void;
  removeMessage: (index: number) => void;
  clearMessages: () => void;
  toggleStatus: () => void;
}

export const useTickerStore = create<TickerStore>((set, get) => ({
  status: TICKER_STATUS.PLAYING,
  messages: ["🚀 Welcome to the Live Ticker!", "📈 Stay tuned for updates..."],

  addMessage: (msg) => {
    if (!msg.trim()) return;
    set((state) => ({ messages: [...state.messages, msg] }));
  },

  removeMessage: (index) => {
    set((state) => ({
      messages: state.messages.filter((_, i) => i !== index),
    }));
  },

  clearMessages: () => set({ messages: [] }),

  toggleStatus: () => {
    const current = get().status;
    const next =
      current === TICKER_STATUS.PLAYING
        ? TICKER_STATUS.PAUSED
        : TICKER_STATUS.PLAYING;
    set({ status: next });
  },
}));
