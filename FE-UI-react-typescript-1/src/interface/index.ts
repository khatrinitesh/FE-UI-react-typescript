export interface RouteDefinition {
  element: any;
  redirect?: any;
  requires?: any;
  routes?: RouteDefinition[];
  protected?: boolean;
  path: string;
  title?: string;
  pathType?: number;
}

export interface I_LayoutProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  label: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  variant?:
    | "yellow"
    | "outline"
    | "darkblue"
    | "whiteBorder"
    | "white"
    | "whiteBlueBorder";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}
