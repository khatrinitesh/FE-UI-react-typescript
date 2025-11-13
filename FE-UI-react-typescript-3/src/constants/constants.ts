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

export const ICON_ANIMATION = {
  initial: { scale: 1, rotate: 0 },
  animate: { scale: 1.2, rotate: 360 },
  transition: { duration: 0.5 },
};

export const SEARCH_ANIMATION = {
  initial: { scale: 1, opacity: 0.7 },
  animate: { scale: 1.2, opacity: 1 },
  transition: { duration: 0.4 },
};

export const ANIMATION_CONFIG = {
  initial: { scale: 1, opacity: 0.8 },
  animate: { scale: 1.2, opacity: 1 },
  transition: { duration: 0.3 },
};

export const ARROW_ANIMATION_CONFIG = {
  initial: { scale: 1, opacity: 0.8 },
  animate: { scale: 1.2, opacity: 1 },
  transition: { duration: 0.3 },
};

export const AUTOCOMPLETE_CONFIG = {
  minChars: 2,
  debounce: 300,
};
export const mockDataAutoComplete = [
  "apple",
  "banana",
  "orange",
  "grape",
  "watermelon",
];

// Avatar image constants
export const AVATAR_IMAGES = {
  user1:
    "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  user2:
    "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
  user3:
    "https://img.freepik.com/premium-psd/3d-render-young-businesswoman-with-long-brown-hair-wearing-light-blue-blazer-white-shirt-she-looks-friendly-approachable-perfect-avatar-professional-woman_632498-32059.jpg",
  default: "/images/default-avatar.png",
};
