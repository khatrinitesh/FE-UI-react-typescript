import { useEffect } from "react";
import { useAlertStore } from "../../store/useAlertStore/usealertStore";
import { v4 as uuidv4 } from "uuid";
import "./alerts-style.css";

const AlertsComponent = () => {
  const addAlert = useAlertStore((state) => state.addAlert);

  const showAlert = (type: "success" | "error" | "info" | "warning") => {
    addAlert({
      id: uuidv4(),
      message: `This is a ${type} alert!`,
      type,
    });
  };
  return (
    <div className="grid gap-[20px]">
      <h2>Zustand Alert System</h2>
      <div className="btnBlock flex gap-[10px]">
        <button
          className="bg-green-300 cursor-pointer px-[10px] py-[5px] rounded-[10px]"
          onClick={() => showAlert("success")}
        >
          Success
        </button>
        <button
          className="bg-red-300 cursor-pointer px-[10px] py-[5px] rounded-[10px]"
          onClick={() => showAlert("error")}
        >
          Error
        </button>
        <button
          className="bg-blue-300 cursor-pointer px-[10px] py-[5px] rounded-[10px]"
          onClick={() => showAlert("info")}
        >
          Info
        </button>
        <button
          className="bg-orange-300 cursor-pointer px-[10px] py-[5px] rounded-[10px]"
          onClick={() => showAlert("warning")}
        >
          Warning
        </button>
      </div>
      <Alert />
    </div>
  );
};

export default AlertsComponent;

const Alert = () => {
  const { alerts, removeAlert } = useAlertStore();

  useEffect(() => {
    const timers = alerts.map((alert) =>
      setTimeout(() => removeAlert(alert.id), 3000)
    );
    return () => timers.forEach(clearTimeout);
  }, [alerts]);

  return (
    <>
      {" "}
      <div className="alert-container">
        {alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            {alert.message}
          </div>
        ))}
      </div>
    </>
  );
};
