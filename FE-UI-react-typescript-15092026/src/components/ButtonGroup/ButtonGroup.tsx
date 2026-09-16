import { useState } from "react";
import {
  Grid2X2,
  List,
  LayoutDashboard,
  Check,
  ArrowRight,
} from "lucide-react";

import "./ButtonGroup.css";

type ButtonGroupVariant = "default" | "outline" | "segmented" | "pill";

interface ButtonItem {
  id: string;
  label: string;
  icon?: React.ElementType;
}

interface ButtonGroupProps {
  title?: string;
  description?: string;
  variant?: ButtonGroupVariant;
  items?: ButtonItem[];
  defaultActive?: string;
  onChange?: (value: string) => void;
}

const defaultButtons: ButtonItem[] = [
  {
    id: "grid",
    label: "Grid",
    icon: Grid2X2,
  },
  {
    id: "list",
    label: "List",
    icon: List,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
];

const ButtonGroup = ({
  title = "Button Group",
  description = "A reusable button group with active and hover states.",
  variant = "default",
  items = defaultButtons,
  defaultActive,
  onChange,
}: ButtonGroupProps) => {
  const [activeButton, setActiveButton] = useState(
    defaultActive ?? items[0]?.id ?? "",
  );

  const handleButtonClick = (id: string) => {
    setActiveButton(id);
    onChange?.(id);
  };

  return (
    <main className="button-group-page">
      <div className="button-group-container">
        {/* Heading */}

        <header className="button-group-heading">
          <span>BUTTON COMPONENT</span>

          <h1>
            Interactive <strong>Button Group</strong>
          </h1>

          <p>{description}</p>
        </header>

        {/* Button Group Card */}

        <section className="button-group-card">
          <div className="button-group-card-heading">
            <span>SELECT OPTION</span>

            <h2>{title}</h2>
          </div>

          <div className={`button-group button-group-${variant}`}>
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeButton === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`group-button ${isActive ? "active" : ""}`}
                  aria-pressed={isActive}
                  onClick={() => handleButtonClick(item.id)}
                >
                  {Icon && <Icon size={18} />}

                  <span>{item.label}</span>

                  {isActive && variant === "default" && (
                    <Check size={16} className="group-button-check" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Result */}

          <div className="button-group-result">
            <span>SELECTED VALUE</span>

            <h3>{items.find((item) => item.id === activeButton)?.label}</h3>

            <p>
              You selected the{" "}
              <strong>
                {items.find((item) => item.id === activeButton)?.label}
              </strong>{" "}
              button.
            </p>
          </div>
        </section>

        {/* CTA Example */}

        <section className="button-group-cta">
          <div>
            <span>READY TO START?</span>

            <h2>Build beautiful interfaces faster.</h2>
          </div>

          <button type="button" className="button-group-primary">
            Get Started
            <ArrowRight size={18} />
          </button>
        </section>
      </div>
    </main>
  );
};

export default ButtonGroup;
