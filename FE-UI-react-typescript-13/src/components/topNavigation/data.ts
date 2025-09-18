import type { NavLinkItem } from "../../interface";
import Paths from "../../routes/Path";

export const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", path: Paths.HOME },
  { name: "About", path: Paths.ABOUT },
  { name: "Services", path: Paths.SERVICES },
  { name: "Contact", path: Paths.CONTACT },
];
