import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMemo, useState } from "react"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  })

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay()
    const totalDays = new Date(year, month + 1, 0).getDate()

    const dates: (Date | null)[] = []

    for (let i = 0; i < firstDay; i++) {
      dates.push(null)
    }

    for (let day = 1; day <= totalDays; day++) {
      dates.push(new Date(year, month, day))
    }

    return dates
  }, [year, month])

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const isToday = (date: Date) => {
    const today = new Date()

    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date: Date) => {
    if (!selectedDate) return false

    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md rounded-3xl bg-white p-5 shadow-xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={handlePrevMonth}
            className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900">
              {monthName} {year}
            </h2>

            {selectedDate && (
              <p className="mt-1 text-sm text-slate-500">
                Selected: {selectedDate.toDateString()}
              </p>
            )}
          </div>

          <button
            onClick={handleNextMonth}
            className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-semibold uppercase text-slate-400"
            >
              {day}
            </div>
          ))}

          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} />
            }

            const today = isToday(date)
            const selected = isSelected(date)

            return (
              <motion.button
                key={date.toISOString()}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedDate(date)}
                className={[
                  "relative flex aspect-square items-center justify-center rounded-2xl text-sm font-semibold transition",
                  selected
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-slate-700 hover:bg-blue-50",
                  today && !selected
                    ? "border border-blue-500 text-blue-600"
                    : "",
                ].join(" ")}
              >
                {date.getDate()}

                {selected && (
                  <motion.span
                    layoutId="selected-date"
                    className="absolute inset-0 -z-10 rounded-2xl bg-blue-600"
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}