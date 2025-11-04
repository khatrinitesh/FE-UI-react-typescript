import type { NavItem } from "../interface";
import { ROUTE_PATHS } from "../routes/RoutePaths";

export const NAV_LINKS: NavItem[] = [
  { id: 1, name: "Home", path: ROUTE_PATHS.HOME },
  { id: 2, name: "About", path: ROUTE_PATHS.ABOUT },
  { id: 3, name: "Services", path: ROUTE_PATHS.SERVICES },
  { id: 4, name: "Service Detail", path: ROUTE_PATHS.SERVICE_DETAIL }, // example dynamic link
  { id: 5, name: "Contact", path: ROUTE_PATHS.CONTACT },
];
