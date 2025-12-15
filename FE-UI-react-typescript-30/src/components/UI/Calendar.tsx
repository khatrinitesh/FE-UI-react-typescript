import { useCalendarStore } from "../../store/calendar.store";
import { getMonthDays } from "../../utils/utils";
import { motion } from "framer-motion";

const Calendar = () => {
  const { selectedDate, setSelectedDate, currentMonth, setCurrentMonth } =
    useCalendarStore();
  const days = getMonthDays(currentMonth);

  const handlePrevMonth = () => {
    const prev = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    setCurrentMonth(prev);
  };

  const handleNextMonth = () => {
    const next = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    setCurrentMonth(next);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          {"<"}
        </button>
        <h2 className="text-lg font-semibold">
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          {">"}
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-medium text-gray-500">
            {d}
          </div>
        ))}

        {days.map((day) => {
          const isSelected =
            selectedDate?.toDateString() === day.date.toDateString();
          return (
            <motion.div
              key={day.date.toISOString()}
              className={`p-2 rounded cursor-pointer ${
                day.isCurrentMonth ? "" : "text-gray-400"
              } ${day.isToday ? "border border-blue-500" : ""}`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedDate(day.date)}
            >
              <motion.div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  isSelected ? "bg-blue-500 text-white" : ""
                }`}
                layout
              >
                {day.date.getDate()}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
