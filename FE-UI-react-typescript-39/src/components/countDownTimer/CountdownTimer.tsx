import { useEffect } from "react";
import { useCounterTimerStore } from "../../store/useCounterTimerStore";
import { TARGET_DATE } from "../../constants/constants";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const { time, setTime } = useCounterTimerStore();
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime]);

  const items = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="flex justify-center gap-6">
      {items.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-lg rounded-xl p-6 w-24 text-center"
        >
          <motion.div
            key={item.value}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            className="text-2xl font-bold"
          >
            {item.value}
          </motion.div>

          <div className="text-gray-500 text-sm">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
