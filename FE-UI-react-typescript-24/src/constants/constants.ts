import type { TabItem } from "../interface";
import { FiHome, FiUser, FiBell, FiSettings } from "react-icons/fi";

export const tabs: TabItem[] = [
  { label: "Home", icon: FiHome },
  { label: "Profile", icon: FiUser },
  { label: "Alerts", icon: FiBell },
  { label: "Settings", icon: FiSettings },
];
export const typeStyles = {
  success: "bg-green-100 border-green-400 text-green-700",
  error: "bg-red-100 border-red-400 text-red-700",
  warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
  info: "bg-blue-100 border-blue-400 text-blue-700",
};

export const variantStyles = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-200 text-gray-900",
  outline: "border border-gray-400 text-gray-800 bg-white",
};

export const rotations = {
  left: "rotate-180",
  right: "",
  up: "-rotate-90",
  down: "rotate-90",
};
