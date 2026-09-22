import { Bell, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Alert = {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
};

const initialAlerts: Alert[] = [
  {
    id: 1,
    title: "New message",
    message: "You received a new message from Alex.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Payment received",
    message: "Your payment was processed successfully.",
    time: "15 min ago",
    read: false,
  },
  {
    id: 3,
    title: "Project updated",
    message: "The website project has been updated.",
    time: "1 hour ago",
    read: true,
  },
];

export function AlertButton() {
  const [open, setOpen] = useState(false);
  const [alerts, setAlerts] = useState(initialAlerts);

  const containerRef = useRef<HTMLDivElement>(null);

  const unreadCount = alerts.filter((alert) => !alert.read).length;

  const markAsRead = (id: number) => {
    setAlerts((current) => current.map((alert) => (alert.id === id ? { ...alert, read: true } : alert)));
  };

  const markAllAsRead = () => {
    setAlerts((current) =>
      current.map((alert) => ({
        ...alert,
        read: true,
      })),
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button type="button" className="alert-button" onClick={() => setOpen((current) => !current)} aria-label="Alerts" aria-expanded={open}>
        <Bell className="size-5" />

        {unreadCount > 0 && <span className="alert-badge">{unreadCount > 9 ? "9+" : unreadCount}</span>}
      </button>

      {open && (
        <div className="alert-panel">
          <div className="alert-header">
            <div>
              <h3 className="text-sm font-semibold text-neutral-950">Alerts</h3>

              <p className="text-xs text-neutral-500">{unreadCount} unread</p>
            </div>

            {unreadCount > 0 && (
              <button type="button" onClick={markAllAsRead} className="text-xs font-medium text-blue-600 hover:text-blue-700">
                Mark all as read
              </button>
            )}
          </div>

          <div className="max-h-100 overflow-y-auto">
            {alerts.map((alert) => (
              <button key={alert.id} type="button" onClick={() => markAsRead(alert.id)} className={`alert-item w-full text-left ${!alert.read ? "alert-item-unread" : ""}`}>
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100">{alert.read ? <Check className="size-4 text-neutral-500" /> : <Bell className="size-4 text-blue-600" />}</div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2">
                    <p className="flex-1 text-sm font-medium text-neutral-950">{alert.title}</p>

                    {!alert.read && <span className="alert-dot" />}
                  </div>

                  <p className="mt-0.5 text-sm text-neutral-600">{alert.message}</p>

                  <p className="mt-1 text-xs text-neutral-400">{alert.time}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="border-t border-neutral-200 p-2">
            <button type="button" className="w-full rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100">
              View all alerts
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
