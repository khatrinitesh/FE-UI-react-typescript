import type { NavItem } from "../interfaces/common.interface";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    path: ROUTES.HOME,
  },
  {
    label: "About",
    path: ROUTES.ABOUT,
  },
  {
    label: "Contact",
    path: ROUTES.CONTACT,
  },
];
