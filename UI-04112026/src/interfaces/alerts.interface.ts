export interface AlertProps {
  variant?: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  onClose?: () => void;
}
