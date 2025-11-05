import React from "react";
import { useToastStore } from "../../../store/toastStore";
import "./ToastContainer.css";

const ToastContainer: React.FC = () => {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div className="toast-container">
      {toasts.map(({ id, message, type }) => (
        <div
          key={id}
          className={`toast toast-${type}`}
          onClick={() => removeToast(id)}
          role="alert"
          aria-live="assertive"
        >
          {message}
          <button
            aria-label="Close toast"
            className="toast-close"
            onClick={(e) => {
              e.stopPropagation();
              removeToast(id);
            }}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
