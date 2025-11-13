import type { VerticalMenuItem } from "../../interface";
import { FiHome, FiUser, FiSettings, FiInfo } from "react-icons/fi";

export const VERTICAL_CONSTANTS: VerticalMenuItem[] = [
  { id: 1, label: "Home", path: "/", icon: FiHome },
  { id: 2, label: "Profile", path: "/profile", icon: FiUser },
  { id: 3, label: "Settings", path: "/settings", icon: FiSettings },
  { id: 4, label: "About", path: "/about", icon: FiInfo },
];
