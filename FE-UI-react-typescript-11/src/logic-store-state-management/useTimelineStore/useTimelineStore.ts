import { create } from "zustand";
import type { TimelineItem } from "../../interface";
import { timelineData } from "../../components/timeline/timeline2/data";

interface TimelineState {
  items: TimelineItem[];
}

export const useTimelineStore = create<TimelineState>(() => ({
  items: timelineData,
}));
