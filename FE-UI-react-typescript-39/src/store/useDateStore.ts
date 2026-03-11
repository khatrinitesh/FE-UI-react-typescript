import { create } from "zustand";

interface DateState {
  selectedDate: Date | null;
  isOpen: boolean;
  toggleCalendar: () => void;
  setDate: (date: Date) => void;
}

export const useDateStore = create<DateState>((set) => ({
  selectedDate: null,
  isOpen: false,

  toggleCalendar: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),

  setDate: (date) =>
    set({
      selectedDate: date,
      isOpen: false,
    }),
}));
