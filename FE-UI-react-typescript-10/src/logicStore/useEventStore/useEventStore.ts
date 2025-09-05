import { create } from "zustand";
import type { EventState } from "../../interface";

export const useEventStore = create<EventState>((set) => ({
  lastEventType: null,
  lastEventTarget: null,
  setLastEvent: (event: Event) =>
    set({
      lastEventType: event.type,
      lastEventTarget: event.target,
    }),
}));
