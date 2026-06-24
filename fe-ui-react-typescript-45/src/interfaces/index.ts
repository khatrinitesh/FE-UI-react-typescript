import type { ReactNode } from "react";

export interface INavItem {
  label: string;
  path: string;
}

export interface IAppState {
  isDarkMode: boolean;
  activePage: string;

  toggleTheme: () => void;
  setActivePage: (page: string) => void;
}

export interface IPageWrapperProps {
  children: ReactNode;
}
