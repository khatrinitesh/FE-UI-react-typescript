import { DAYS_OF_WEEK } from "../constants/constants";
import { useCalendarStore } from "../store/useCalendarStore/useCalendarStore";
import { motion } from "framer-motion";

const CalendarComp = () => {
  const { selectedDate, selectDate } = useCalendarStore();
  const today = new Date();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        width: 280,
        padding: 16,
        borderRadius: 10,
        background: "#1e1e1e",
        color: "#fff",
      }}
    >
      <h3>{today.toDateString()}</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
        {DAYS_OF_WEEK.map((day) => (
          <strong key={day}>{day}</strong>
        ))}

        {[...Array(30)].map((_, i) => {
          const date = new Date(today.getFullYear(), today.getMonth(), i + 1);

          return (
            <motion.button
              key={i}
              whileTap={{ scale: 0.9 }}
              onClick={() => selectDate(date)}
              style={{
                background:
                  selectedDate?.getDate() === date.getDate()
                    ? "#4caf50"
                    : "#333",
                color: "#fff",
                margin: 2,
                borderRadius: 6,
              }}
            >
              {i + 1}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CalendarComp;
