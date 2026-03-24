import type { Variants } from "framer-motion";
import type { NavItem } from "../interface";

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  PRODUCT: "/product",
  PRODUCT_DETAIL: "/product/:id",
  CONTACT: "/contact",
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Contact", path: "/contact" },
];

// animation for loader
export const barVariants: Variants = {
  animate: (i: number) => ({
    scaleY: [1, 1.5, 1],
    backgroundColor: [
      "rgba(255,255,255,0.5)",
      "#ffffff",
      "rgba(255,255,255,0.5)",
    ],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.2,
    },
  }),
};
