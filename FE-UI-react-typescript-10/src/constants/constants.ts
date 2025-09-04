import type { NavLinkItem } from "../interface";
import { PATHS } from "../routes/path";

export const navLinks: NavLinkItem[] = [
  { label: "Home", path: PATHS.HOME },
  { label: "About", path: PATHS.ABOUT },
  { label: "Services", path: PATHS.SERVICES },
  { label: "Contact", path: PATHS.CONTACT },
];
