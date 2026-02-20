import { useAlertStore } from "../../store/useAlertStore";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ALERT_ANIMATION, ALERT_CONFIG } from "../../constants/constants";

const getBackground = (type: string) => {
  switch (type) {
    case "success":
      return "#16a34a";
    case "error":
      return "#dc2626";
    case "warning":
      return "#f59e0b";
    case "info":
      return "#2563eb";
    default:
      return "#333";
  }
};

const AlertsContainer = () => {
  const { alerts, removeAlert } = useAlertStore();
  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 1000,
      }}
    >
      <AnimatePresence>
        {alerts.map((alert) => (
          <AlertItem
            key={alert.id}
            {...alert}
            onClose={() => removeAlert(alert.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AlertsContainer;

interface AlertProps {
  id: string;
  message: string;
  type: string;
  onClose: () => void;
}

const AlertItem: React.FC<AlertProps> = ({ message, type, onClose }) => {
  const { removeAlert } = useAlertStore();

  useEffect(() => {
    const timer = setTimeout(onClose, ALERT_CONFIG.AUTO_CLOSE_DELAY);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      {...ALERT_ANIMATION}
      style={{
        minWidth: 250,
        padding: "12px 16px",
        borderRadius: 10,
        color: "white",
        background: getBackground(type),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      }}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          marginLeft: 10,
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ✕
      </button>
    </motion.div>
  );
};
