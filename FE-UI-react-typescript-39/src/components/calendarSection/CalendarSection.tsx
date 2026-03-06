import { CALENDAR_TRANSITION, DAYS_IN_MONTH } from "../../constants/constants";
import { useCalendarStore } from "../../store/useCalendarStore";
import { motion } from "framer-motion";

const CalendarSection = () => {
  const { selectedDay, setDay } = useCalendarStore();

  const days = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-center font-semibold mb-4">Calendar</h2>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => {
            const isSelected = selectedDay === day;

            return (
              <motion.div
                key={day}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={CALENDAR_TRANSITION}
                onClick={() => setDay(day)}
                className={`flex items-center justify-center cursor-pointer h-10 rounded-lg text-sm font-medium
                  ${isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}
                `}
              >
                {day}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
