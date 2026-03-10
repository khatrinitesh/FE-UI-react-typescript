import { create } from "zustand";
import type { TimerState } from "../interface";

export const useCounterTimerStore = create<TimerState>((set) => ({
  time: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },

  setTime: (time) =>
    set({
      time,
    }),
}));
