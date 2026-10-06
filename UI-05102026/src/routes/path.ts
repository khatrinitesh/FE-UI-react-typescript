export const PATHS = {
  home: "/",
  about: "/about",
  contact: "/contact",
  college: "/college",
} as const

export const collegeDetailPath = (collegeId: string | number) =>
  `/college/${collegeId}`