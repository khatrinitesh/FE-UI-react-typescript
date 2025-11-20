import { useEffect, useRef } from "react";
import { typeStyles } from "../../constants/constants";
import type { AlertType } from "../../interface";
import gsap from "gsap";

interface Props {
  type?: AlertType;
  message: string;
  duration?: number; // auto close time (ms)
  onClose?: () => void;
}

const Alerts = ({
  type = "info",
  message,
  duration = 3000,
  onClose,
}: Props) => {
  const alertRef = useRef<HTMLDivElement>(null);

  // GSAP appear animation
  useEffect(() => {
    gsap.fromTo(
      alertRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
    );

    const timer = setTimeout(() => {
      closeAlert();
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  // GSAP exit animation
  const closeAlert = () => {
    gsap.to(alertRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        onClose?.();
      },
    });
  };
  return (
    <div
      ref={alertRef}
      className={`
        fixed top-5 right-5 
        px-4 py-3 rounded-md border 
        shadow-lg flex items-center justify-between gap-4
        ${typeStyles[type]}
      `}
    >
      <span className="font-medium">{message}</span>

      <button
        onClick={closeAlert}
        className="font-bold text-lg leading-none hover:opacity-80"
      >
        ×
      </button>
    </div>
  );
};

export default Alerts;
