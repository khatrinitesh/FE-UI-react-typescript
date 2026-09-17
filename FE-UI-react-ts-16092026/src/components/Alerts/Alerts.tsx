import { CheckCircle2, CircleAlert, Info, TriangleAlert, X } from "lucide-react";
import { useState } from "react";

import "./Alerts.css";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertItem {
  id: number;
  type: AlertType;
  title: string;
  description: string;
}

const alertData: AlertItem[] = [
  {
    id: 1,
    type: "success",
    title: "Success",
    description: "Your action was completed successfully.",
  },
  {
    id: 2,
    type: "error",
    title: "Error",
    description: "Something went wrong. Please try again.",
  },
  {
    id: 3,
    type: "warning",
    title: "Warning",
    description: "Please review this information before continuing.",
  },
  {
    id: 4,
    type: "info",
    title: "Information",
    description: "Here is some useful information for you.",
  },
];

export const Alerts = () => {
  const [activeAlert, setActiveAlert] = useState<AlertItem | null>(null);

  const getIcon = (type: AlertType) => {
    if (type === "success") return <CheckCircle2 />;
    if (type === "error") return <CircleAlert />;
    if (type === "warning") return <TriangleAlert />;
    return <Info />;
  };

  return (
    <div className="alerts">
      <div className="alertButtons">
        {alertData.map((item) => (
          <button key={item.id} className="alertButton" type="button" onClick={() => setActiveAlert(item)}>
            {item.title}
          </button>
        ))}
      </div>

      {activeAlert && (
        <div className={`alert alert-${activeAlert.type}`}>
          <div className="alertIcon">{getIcon(activeAlert.type)}</div>

          <div className="alertContent">
            <h4 className="alertTitle">{activeAlert.title}</h4>

            <p className="alertDescription">{activeAlert.description}</p>
          </div>

          <button className="alertClose" type="button" onClick={() => setActiveAlert(null)}>
            <X />
          </button>
        </div>
      )}
    </div>
  );
};
