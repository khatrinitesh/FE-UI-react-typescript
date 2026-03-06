import { create } from "zustand";

interface CalendarState {
  selectedDay: number | null;
  setDay: (day: number) => void;
}

export const useCalendarStore = create<CalendarState>((set) => ({
  selectedDay: null,
  setDay: (day) => set({ selectedDay: day }),
}));
