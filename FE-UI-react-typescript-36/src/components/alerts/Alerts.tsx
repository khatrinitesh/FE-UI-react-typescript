import { useAlertStore } from "../../store/useAlertStore";
import AlertsContainer from "./AlertsContainer";

const Alerts = () => {
  const { addAlert } = useAlertStore();
  return (
    <>
      <AlertsContainer />
      <div style={{ padding: 40 }}>
        <button
          onClick={() =>
            addAlert({
              message: "Success! Data saved.",
              type: "success",
            })
          }
        >
          Show Success
        </button>

        <button
          onClick={() =>
            addAlert({
              message: "Something went wrong.",
              type: "error",
            })
          }
          style={{ marginLeft: 10 }}
        >
          Show Error
        </button>
      </div>
    </>
  );
};

export default Alerts;
