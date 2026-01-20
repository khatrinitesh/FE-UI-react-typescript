import { create } from "zustand";
import type { CalendarState } from "../../interface";

export const useCalendarStore = create<CalendarState>((set) => ({
  selectedDate: null,
  selectDate: (date) => set({ selectedDate: date }),
}));
