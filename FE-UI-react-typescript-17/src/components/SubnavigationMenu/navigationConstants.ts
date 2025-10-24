// src/constants/navigationConstants.ts
export const MAIN_MENU = {
  DASHBOARD: "Dashboard",
  SETTINGS: "Settings",
  PROFILE: "Profile",
} as const;

export const SUB_MENU = {
  DASHBOARD: ["Overview", "Stats", "Reports"] as const,
  SETTINGS: ["Account", "Security", "Notifications"] as const,
  PROFILE: ["Info", "Preferences", "Activity"] as const,
};

export type MainMenuKey = keyof typeof MAIN_MENU;
export type SubMenuKey = (typeof SUB_MENU)[MainMenuKey][number];
