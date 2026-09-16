import { useState } from "react";
import { Home, User, Briefcase, Layers, Mail } from "lucide-react";

import "./BottomBorderNav.css";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "work",
    label: "Work",
    icon: Briefcase,
  },
  {
    id: "services",
    label: "Services",
    icon: Layers,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

const BottomBorderNav = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <main className="bottom-nav-page">
      <div className="bottom-nav-container">
        {/* Heading */}

        <div className="bottom-nav-heading">
          <span>NAVIGATION</span>

          <h1>
            Bottom <strong>Border Links</strong>
          </h1>

          <p>
            A clean navigation menu with an animated bottom border for active
            and hover states.
          </p>
        </div>

        {/* Navigation */}

        <nav className="bottom-border-nav">
          <div className="bottom-nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`bottom-nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setActiveNav(item.id)}
                >
                  <Icon className="bottom-nav-icon" size={18} />

                  <span>{item.label}</span>

                  <span className="bottom-nav-border" />
                </button>
              );
            })}
          </div>
        </nav>

        {/* Active Content */}

        <div className="bottom-nav-result">
          <span>ACTIVE LINK</span>

          <h2>{navItems.find((item) => item.id === activeNav)?.label}</h2>

          <p>
            You selected the{" "}
            <strong>
              {navItems.find((item) => item.id === activeNav)?.label}
            </strong>{" "}
            navigation link.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BottomBorderNav;
