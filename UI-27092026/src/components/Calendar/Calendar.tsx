import { useState } from "react";

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

const Calendar = ({ value, onChange, className = "" }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(value ?? new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const previousMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const selectDate = (day: number) => {
    const selectedDate = new Date(year, month, day);
    onChange?.(selectedDate);
  };

  const isToday = (day: number) => today.toDateString() === new Date(year, month, day).toDateString();

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  return (
    <div className={`calendar w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${className}`}>
      <div className="calendar__header mb-4 flex items-center justify-between">
        <button type="button" onClick={previousMonth} className="calendar__nav rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">‹</button>
        <h2 className="calendar__title text-sm font-semibold text-gray-900">{monthName} {year}</h2>
        <button type="button" onClick={nextMonth} className="calendar__nav rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">›</button>
      </div>

      <div className="calendar__weekdays mb-2 grid grid-cols-7 text-center text-xs font-medium text-gray-500">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <span key={day}>{day}</span>)}
      </div>

      <div className="calendar__days grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, index) => <span key={`empty-${index}`} />)}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;

          return (
            <button key={day} type="button" onClick={() => selectDate(day)} className={`calendar__day flex h-9 w-9 items-center justify-center rounded-lg text-sm transition ${isToday(day) ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}`}>
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;