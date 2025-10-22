import type { ReactElement, ReactNode } from "react";
import type { IconType } from "react-icons/lib";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Props {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
}

export interface RouteType {
  path: string;
  element: ReactElement;
  title: string;
  isProtected?: boolean;
}

export interface NavItem {
  title: string;
  path: string;
  icon: IconType;
}

export interface HeadTitleProps {
  children: ReactNode;
  className: string;
}
