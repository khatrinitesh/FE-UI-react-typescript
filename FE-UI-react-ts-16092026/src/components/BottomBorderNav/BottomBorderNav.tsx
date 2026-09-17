import "./BottomBorderNav.css";

const navItems = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "About", href: "#" },
  { id: 3, label: "Work", href: "#" },
  { id: 4, label: "Contact", href: "#" },
];

export const BottomBorderNav = () => {
  return (
    <nav className="bottomBorderNav">
      {navItems.map((item) => (
        <a className="bottomBorderNavLink" href={item.href} key={item.id}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};
