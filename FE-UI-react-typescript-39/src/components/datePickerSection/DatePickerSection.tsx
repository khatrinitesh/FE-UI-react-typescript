import { motion, AnimatePresence } from "framer-motion";
import { useDateStore } from "../../store/useDateStore";
import { DAYS } from "../../constants/constants";

const DatePickerSection = () => {
  const { selectedDate, isOpen, toggleCalendar, setDate } = useDateStore();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return (
    <div className="relative w-64">
      <div
        onClick={toggleCalendar}
        className="border rounded-lg px-4 py-3 cursor-pointer bg-white"
      >
        {selectedDate ? selectedDate.toDateString() : "Select Date"}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute mt-2 bg-white border rounded-lg shadow-lg p-4 w-full"
          >
            <div className="grid grid-cols-7 text-sm mb-2">
              {DAYS.map((day) => (
                <div key={day} className="text-center font-semibold">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {daysArray.map((day) => (
                <motion.div
                  key={day}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDate(new Date(year, month, day))}
                  className="text-center p-2 rounded cursor-pointer hover:bg-blue-100"
                >
                  {day}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatePickerSection;
