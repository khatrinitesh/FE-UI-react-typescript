import type { AccordionItem, NavItem } from "../interface";
import { Paths } from "../routes/path";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: `/${Paths.landing}` }, // becomes "/"
  { id: "about", label: "About", href: `/${Paths.about}` },
  { id: "services", label: "Services", href: `/${Paths.service}` },
  { id: "contact", label: "Contact", href: `/${Paths.contact}` },
];

export const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "First Item",
    content: "This is the content of the first accordion item.",
  },
  {
    id: 2,
    title: "Second Item",
    content: "This is the content of the second accordion item.",
  },
  {
    id: 3,
    title: "Third Item",
    content: "This is the content of the third accordion item.",
  },
];

export const ALERT_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
} as const;

export type AlertType = (typeof ALERT_TYPES)[keyof typeof ALERT_TYPES];
