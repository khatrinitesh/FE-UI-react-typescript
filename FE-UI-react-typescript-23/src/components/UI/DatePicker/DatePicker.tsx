import React, { useState, useMemo } from "react";
import FieldInput from "../FieldInput/FieldInput";
import { CalendarIcon } from "lucide-react";

type DatePickerProps = {
  name: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
};

type CalendarDay = {
  date: Date;
  inCurrentMonth: boolean;
};

const getCalendarDays = (monthDate: Date): CalendarDay[] => {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const startWeekDay = firstOfMonth.getDay(); // 0 = Sun

  const startDate = new Date(year, month, 1 - startWeekDay);
  const days: CalendarDay[] = [];

  for (let i = 0; i < 42; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    days.push({
      date: d,
      inCurrentMonth: d.getMonth() === month,
    });
  }

  return days;
};

const formatDate = (date: Date | null) => {
  if (!date) return "";
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`; // 11/24/2025
};

const DatePicker: React.FC<DatePickerProps> = ({
  name,
  value,
  onChange,
  placeholder = "Select your date",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(value ?? new Date());
  const days = useMemo(() => getCalendarDays(currentMonth), [currentMonth]);

  const handleSelect = (day: Date) => {
    onChange(day);
    setIsOpen(false);
  };

  const goPrevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const goNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const monthLabel = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const selectedTime = value?.setHours(0, 0, 0, 0) ?? null;

  return (
    <>
      {/* Trigger input */}
      <div className={className} onClick={() => setIsOpen(true)}>
        <FieldInput
          name={name}
          type="text"
          value={formatDate(value)}
          onChange={() => {}}
          placeholder={placeholder}
          disabled={false}
          rightIcon={<CalendarIcon className="w-4 h-4" />}
          className="cursor-pointer"
        />
      </div>

      {/* FULL-VIEWPORT CALENDAR OVERLAY */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/20
          "
          onClick={() => setIsOpen(false)} // click backdrop to close
        >
          <div
            className="
              w-[280px] max-w-[90vw]
              rounded-3xl bg-white
              shadow-[0_15px_40px_rgba(38,20,84,0.35)]
              p-3
            "
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* header */}
            <div className="flex items-center justify-between px-1 pb-2">
              <button
                type="button"
                onClick={goPrevMonth}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <span className="text-sm font-semibold text-gray-800">
                {monthLabel}
              </span>

              <button
                type="button"
                onClick={goNextMonth}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* weekdays */}
            <div className="grid grid-cols-7 text-[11px] text-gray-400 px-2 pb-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <div key={d} className="flex items-center justify-center">
                  {d}
                </div>
              ))}
            </div>

            {/* days */}
            <div className="grid grid-cols-7 gap-y-1 px-1 pb-2">
              {days.map(({ date, inCurrentMonth }) => {
                const time = date.setHours(0, 0, 0, 0);
                const isSelected = selectedTime === time;

                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onClick={() => handleSelect(date)}
                    className={`
                      mx-auto my-[2px]
                      flex h-8 w-8 items-center justify-center
                      text-sm rounded-full
                      transition-colors
                      ${
                        !inCurrentMonth
                          ? "text-gray-300"
                          : isSelected
                          ? "bg-[#eee7fa] text-[#4c2b87] font-semibold"
                          : "text-gray-800 hover:bg-[#f1e9ff]"
                      }
                    `}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DatePicker;
