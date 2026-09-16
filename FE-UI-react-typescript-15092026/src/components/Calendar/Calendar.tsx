import { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays, Check } from "lucide-react";

import "./Calendar.css";

interface CalendarProps {
  initialDate?: Date;
  onDateChange?: (date: Date) => void;
}

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

const isSameDate = (first: Date, second: Date) => {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

const Calendar = ({
  initialDate = new Date(),
  onDateChange,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
  );

  const [selectedDate, setSelectedDate] = useState(initialDate);

  const today = new Date();

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const goToToday = () => {
    const todayDate = new Date();

    setCurrentDate(new Date(todayDate.getFullYear(), todayDate.getMonth(), 1));

    setSelectedDate(todayDate);
    onDateChange?.(todayDate);
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );

    setSelectedDate(newDate);
    onDateChange?.(newDate);
  };

  const calendarDays = [];

  // Previous month's trailing days
  for (let index = firstDay - 1; index >= 0; index--) {
    const day = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      -index,
    );

    calendarDays.push({
      day: day.getDate(),
      date: day,
      isCurrentMonth: false,
    });
  }

  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );

    calendarDays.push({
      day,
      date,
      isCurrentMonth: true,
    });
  }

  // Next month's leading days
  const remainingDays = 42 - calendarDays.length;

  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      day,
    );

    calendarDays.push({
      day,
      date,
      isCurrentMonth: false,
    });
  }

  return (
    <main className="calendar-page">
      <div className="calendar-container">
        {/* Heading */}
        <header className="calendar-heading">
          <span>DATE COMPONENT</span>

          <h1>
            Modern <strong>Calendar</strong>
          </h1>

          <p>
            A responsive calendar component built with React, TypeScript and
            Tailwind CSS.
          </p>
        </header>

        {/* Calendar Card */}
        <section className="calendar-card">
          {/* Header */}
          <div className="calendar-header">
            <div className="calendar-title">
              <div className="calendar-title-icon">
                <CalendarDays size={20} />
              </div>

              <div>
                <span>SELECT DATE</span>

                <h2>
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h2>
              </div>
            </div>

            <div className="calendar-navigation">
              <button
                type="button"
                onClick={previousMonth}
                aria-label="Previous month"
                className="calendar-nav-button"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={goToToday}
                className="calendar-today-button"
              >
                Today
              </button>

              <button
                type="button"
                onClick={nextMonth}
                aria-label="Next month"
                className="calendar-nav-button"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Week Days */}
          <div className="calendar-weekdays">
            {weekDays.map((day) => (
              <div key={day} className="calendar-weekday">
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="calendar-grid">
            {calendarDays.map(({ day, date, isCurrentMonth }, index) => {
              const selected = isSameDate(date, selectedDate);

              const isToday = isSameDate(date, today);

              return (
                <button
                  key={`${date.toISOString()}-${index}`}
                  type="button"
                  onClick={() => handleDateClick(day)}
                  className={[
                    "calendar-day",
                    !isCurrentMonth ? "calendar-day-muted" : "",
                    selected ? "calendar-day-selected" : "",
                    isToday && !selected ? "calendar-day-today" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span>{day}</span>

                  {selected && <Check size={12} className="calendar-check" />}
                </button>
              );
            })}
          </div>

          {/* Selected Date */}
          <div className="calendar-selected">
            <div>
              <span>SELECTED DATE</span>

              <strong>
                {selectedDate.toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </strong>
            </div>

            <CalendarDays size={22} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Calendar;
