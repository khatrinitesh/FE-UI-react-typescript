import { create } from "zustand";

interface TimelineStore {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useTimelineStore = create<TimelineStore>((set) => ({
  activeIndex: 0,
  setActiveIndex: (index) =>
    set({
      activeIndex: index,
    }),
}));
