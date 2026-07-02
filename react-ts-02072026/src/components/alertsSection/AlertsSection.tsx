import { useState } from "react"
import type { AlertVariant } from "./Alerts"
import Alert from "./Alerts"

interface AlertItem {
  id: number
  title: string
  description: string
  variant: AlertVariant
}

const alerts: AlertItem[] = [
  {
    id: 1,
    title: "Success",
    description: "Your form has been submitted successfully.",
    variant: "success",
  },
  {
    id: 2,
    title: "Error",
    description: "Something went wrong. Please try again.",
    variant: "error",
  },
  {
    id: 3,
    title: "Warning",
    description: "Please check all required fields before continuing.",
    variant: "warning",
  },
  {
    id: 4,
    title: "Information",
    description: "This is a normal information alert message.",
    variant: "info",
  },
]



export default function AlertsSection() {

     const [visibleAlerts, setVisibleAlerts] = useState<number[]>(
    alerts.map((item) => item.id),
  )

  const handleClose = (id: number) => {
    setVisibleAlerts((prev) => prev.filter((alertId) => alertId !== id))
  }
  return (
    <>
       <div className="space-y-4">
        {alerts.map((item) => (
          <Alert
            key={item.id}
            title={item.title}
            description={item.description}
            variant={item.variant}
            isOpen={visibleAlerts.includes(item.id)}
            onClose={() => handleClose(item.id)}
          />
        ))}
      </div></>
  )
}
