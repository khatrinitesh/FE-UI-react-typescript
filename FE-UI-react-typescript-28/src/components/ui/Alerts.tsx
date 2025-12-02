import { motion, AnimatePresence } from "framer-motion";
import { useAlertStore } from "../../store/useAlertStore";
import { ALERT_CONFIG } from "../../constants/constants";

const Alerts = () => {
  const { alert, hideAlert } = useAlertStore();

  return (
    <AnimatePresence>
      {alert && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`fixed top-5 right-5 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 cursor-pointer
            ${ALERT_CONFIG.colors[alert.type]}`}
          onClick={hideAlert}
        >
          <span className="text-xl">{ALERT_CONFIG.icons[alert.type]}</span>
          <span>{alert.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alerts;
