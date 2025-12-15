import type { Day } from "../interface/auth";

export const getMonthDays = (currentMonth: Date): Day[] => {
  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );

  const days: Day[] = [];
  const startDay = startOfMonth.getDay(); // day of week (0-6)

  // Previous month's tail days
  for (let i = startDay - 1; i >= 0; i--) {
    const date = new Date(startOfMonth);
    date.setDate(date.getDate() - (i + 1));
    days.push({ date, isCurrentMonth: false, isToday: false });
  }

  // Current month days
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      i
    );
    const isToday = date.toDateString() === new Date().toDateString();
    days.push({ date, isCurrentMonth: true, isToday });
  }

  return days;
};
