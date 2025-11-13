import type { NavItem } from "../interface";
import { PATH } from "../routes/Path";

export const navLinks: NavItem[] = [
  { name: "Home", path: PATH.HOME },
  { name: "About", path: PATH.ABOUT },
  { name: "Services", path: PATH.SERVICES },
  { name: "Contact", path: PATH.CONTACT },
];
