import type { NavItem } from "../../interface";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";

export const NAVDATA: NavItem[] = [
  { title: "Home", path: "/", icon: FaHome },
  { title: "About", path: "/about", icon: FaInfoCircle },
  { title: "Services", path: "/services", icon: FaServicestack },
  { title: "Contact", path: "/contact", icon: FaEnvelope },
];
