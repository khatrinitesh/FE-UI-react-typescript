import type { NavItem } from "../interface";
import { Paths } from "../routes/path";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: `/${Paths.landing}` }, // becomes "/"
  { id: "about", label: "About", href: `/${Paths.about}` },
  { id: "services", label: "Services", href: `/${Paths.service}` },
  { id: "contact", label: "Contact", href: `/${Paths.contact}` },
];
