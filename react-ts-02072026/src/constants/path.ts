export const PATHS = {
  home: "/",
  about: "/about",
  contact: "/contact",
} as const

export const NAV_LINKS = [
  {
    label: "Home",
    path: PATHS.home,
  },
  {
    label: "About",
    path: PATHS.about,
  },
  {
    label: "Contact",
    path: PATHS.contact,
  },
] as const