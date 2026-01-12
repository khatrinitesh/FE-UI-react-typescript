import type { NavigationItem } from "../interface";

export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  SERVICE_DETAIL: "/services/:id",
  CONTACT: "/contact",
};

export const NAVIGATION: NavigationItem[] = [
  { label: "Home", path: ROUTES.HOME },
  { label: "Services", path: ROUTES.SERVICES },
  { label: "Contact", path: ROUTES.CONTACT },
];
