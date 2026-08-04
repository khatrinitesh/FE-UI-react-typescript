import { Link } from "@tanstack/react-router";
import { cn } from "../../utils/cn";

const navigationLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Posts",
    to: "/posts",
  },
  {
    label: "Contact",
    to: "/contact",
  },
] as const;

interface EqualWidthNavProps {
  className?: string;
  onNavigate?: () => void;
}

export function EqualWidthNav({ className, onNavigate }: EqualWidthNavProps) {
  return (
    <nav aria-label="Main navigation" className={cn("w-full", className)}>
      <ul className="flex w-full items-stretch overflow-hidden rounded-xl border border-primary/20 bg-white p-1 shadow-sm">
        {navigationLinks.map((navigation) => (
          <li key={navigation.to} className="flex min-w-0 flex-1 basis-0">
            <Link
              to={navigation.to}
              onClick={onNavigate}
              activeOptions={{
                exact: navigation.to === "/",
              }}
              className={cn(
                "flex min-h-11 w-full items-center justify-center",
                "rounded-lg px-2 text-center",
                "font-montserrat text-14 font-medium",
                "text-secondary",
                "transition-colors duration-200",
                "hover:bg-primary/10 hover:text-primary",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-primary",
                "focus-visible:ring-offset-2",
              )}
              activeProps={{
                className:
                  "bg-primary text-white hover:bg-primary hover:text-white",
              }}
            >
              <span className="truncate">{navigation.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
