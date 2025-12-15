import { create } from "zustand";
import type { CalendarState } from "../interface/auth";

export const useCalendarStore = create<CalendarState>((set) => ({
  selectedDate: null,
  currentMonth: new Date(),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setCurrentMonth: (date) => set({ currentMonth: date }),
}));
