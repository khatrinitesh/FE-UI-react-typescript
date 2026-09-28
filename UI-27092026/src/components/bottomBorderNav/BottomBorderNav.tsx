import { Link } from "@tanstack/react-router";

export interface NavItem {
  label: string;
  path: string;
  className?: string;
}

interface BottomBorderNavProps {
  items: NavItem[];
  className?: string;
}

const BottomBorderNav = ({ items, className = "" }: BottomBorderNavProps) => {
  return (
    <nav className={`bottom-nav ${className}`}>
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`bottom-nav__link ${item.className ?? ""}`}
          activeProps={{
            className: "bottom-nav__link--active",
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default BottomBorderNav;
