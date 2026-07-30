import { CalendarDays, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useMemo, useState } from "react";

type CalendarEvent = {
  id: number;
  title: string;
  date: string;
  time: string;
  type: "meeting" | "task" | "reminder";
};

const events: CalendarEvent[] = [
  {
    id: 1,
    title: "Design review",
    date: "2026-07-03",
    time: "10:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Submit report",
    date: "2026-07-08",
    time: "4:30 PM",
    type: "task",
  },
  {
    id: 3,
    title: "Client meeting",
    date: "2026-07-15",
    time: "12:00 PM",
    type: "meeting",
  },
  {
    id: 4,
    title: "Project deadline",
    date: "2026-07-22",
    time: "6:00 PM",
    type: "reminder",
  },
  {
    id: 5,
    title: "Team workshop",
    date: "2026-07-30",
    time: "2:00 PM",
    type: "meeting",
  },
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function isSameDate(firstDate: Date, secondDate: Date) {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
}

export function Calendar() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const [selectedDate, setSelectedDate] = useState(today);

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const startDate = new Date(year, month, 1 - firstDayOfMonth.getDay());

    const endDate = new Date(
      year,
      month,
      lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()),
    );

    const days: Date[] = [];
    const iterator = new Date(startDate);

    while (iterator <= endDate) {
      days.push(new Date(iterator));
      iterator.setDate(iterator.getDate() + 1);
    }

    return days;
  }, [currentDate]);

  const selectedEvents = events.filter(
    (event) => event.date === formatDateKey(selectedDate),
  );

  const monthTitle = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const selectedDateTitle = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const goToPreviousMonth = () => {
    setCurrentDate(
      (date) => new Date(date.getFullYear(), date.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      (date) => new Date(date.getFullYear(), date.getMonth() + 1, 1),
    );
  };

  const goToToday = () => {
    const currentToday = new Date();

    setCurrentDate(
      new Date(currentToday.getFullYear(), currentToday.getMonth(), 1),
    );

    setSelectedDate(currentToday);
  };

  return (
    <section className="min-h-screen bg-slate-100 px-5 py-10 font-brand text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-secondary">
                  <CalendarDays size={22} />
                </span>

                <div>
                  <p className="text-brand-14 text-slate-500 dark:text-slate-400">
                    Schedule
                  </p>

                  <h1 className="text-brand-32 text-secondary dark:text-primary">
                    Calendar
                  </h1>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-brand-14 text-white transition hover:bg-secondary/90 dark:bg-primary dark:text-slate-950"
            >
              <Plus size={18} />
              Add event
            </button>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none lg:grid-cols-[1fr_320px]">
            <div className="p-5 sm:p-7">
              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goToPreviousMonth}
                    aria-label="Previous month"
                    className="flex size-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-primary hover:bg-primary/10 hover:text-secondary dark:border-slate-700 dark:hover:text-primary"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={goToNextMonth}
                    aria-label="Next month"
                    className="flex size-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-primary hover:bg-primary/10 hover:text-secondary dark:border-slate-700 dark:hover:text-primary"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <h2 className="ml-2 text-brand-24 text-secondary dark:text-primary">
                    {monthTitle}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={goToToday}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-brand-14 text-slate-600 transition hover:border-primary hover:bg-primary/10 hover:text-secondary dark:border-slate-700 dark:text-slate-300 dark:hover:text-primary"
                >
                  Today
                </button>
              </div>

              <div className="grid grid-cols-7 border-b border-slate-200 pb-3 dark:border-slate-800">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-center text-brand-12 uppercase tracking-wider text-slate-400"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-7">
                {calendarDays.map((date) => {
                  const dateKey = formatDateKey(date);
                  const isCurrentMonth =
                    date.getMonth() === currentDate.getMonth();
                  const isToday = isSameDate(date, today);
                  const isSelected = isSameDate(date, selectedDate);
                  const dayEvents = events.filter(
                    (event) => event.date === dateKey,
                  );

                  return (
                    <button
                      key={dateKey}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={[
                        "relative min-h-20 border-b border-r border-slate-100 p-2 text-left transition sm:min-h-28 sm:p-3 dark:border-slate-800",
                        "hover:bg-primary/10",
                        !isCurrentMonth
                          ? "text-slate-300 dark:text-slate-700"
                          : "text-slate-700 dark:text-slate-200",
                        isSelected
                          ? "bg-primary/15 ring-2 ring-inset ring-primary"
                          : "",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "flex size-8 items-center justify-center rounded-full text-brand-14",
                          isToday
                            ? "bg-secondary text-white dark:bg-primary dark:text-slate-950"
                            : "",
                        ].join(" ")}
                      >
                        {date.getDate()}
                      </span>

                      <div className="mt-2 hidden space-y-1 sm:block">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className="truncate rounded-md bg-primary/20 px-2 py-1 text-brand-12 text-secondary dark:text-primary"
                          >
                            {event.title}
                          </div>
                        ))}

                        {dayEvents.length > 2 && (
                          <p className="px-1 text-brand-12 text-slate-400">
                            +{dayEvents.length - 2} more
                          </p>
                        )}
                      </div>

                      {dayEvents.length > 0 && (
                        <span className="absolute bottom-2 right-2 size-1.5 rounded-full bg-primary sm:hidden" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <aside className="border-t border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/50 lg:border-l lg:border-t-0">
              <div className="rounded-2xl bg-secondary p-5 text-white dark:bg-primary dark:text-slate-950">
                <p className="text-brand-12 opacity-70">Selected date</p>

                <h3 className="mt-2 text-brand-20">{selectedDateTitle}</h3>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-brand-18 text-secondary dark:text-primary">
                    Events
                  </h4>

                  <span className="rounded-full bg-primary/15 px-3 py-1 text-brand-12 text-secondary dark:text-primary">
                    {selectedEvents.length}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {selectedEvents.length > 0 ? (
                    selectedEvents.map((event) => (
                      <article
                        key={event.id}
                        className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={[
                              "mt-1 size-2.5 rounded-full",
                              event.type === "meeting"
                                ? "bg-primary"
                                : event.type === "task"
                                  ? "bg-amber-400"
                                  : "bg-rose-400",
                            ].join(" ")}
                          />

                          <div>
                            <h5 className="text-brand-14 text-slate-900 dark:text-white">
                              {event.title}
                            </h5>

                            <p className="mt-1 text-brand-12 text-slate-500 dark:text-slate-400">
                              {event.time}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 px-5 py-10 text-center dark:border-slate-700">
                      <CalendarDays
                        size={28}
                        className="mx-auto text-slate-300 dark:text-slate-600"
                      />

                      <p className="mt-3 text-brand-14 text-slate-500 dark:text-slate-400">
                        No events scheduled
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
