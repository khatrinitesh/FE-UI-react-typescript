import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Code2,
  CornerDownLeft,
  CornerDownRight,
  CornerUpLeft,
  CornerUpRight,
} from "lucide-react";

import "./BorderFrame.css";

interface BorderFrameProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

interface FrameCard {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  variant: string;
}

const frameCards: FrameCard[] = [
  {
    id: 1,
    title: "Minimal Frame",
    description: "A clean border frame for simple content.",
    icon: <CornerUpLeft size={22} />,
    variant: "frame-minimal",
  },
  {
    id: 2,
    title: "Gradient Frame",
    description: "Animated gradient borders for modern interfaces.",
    icon: <CornerUpRight size={22} />,
    variant: "frame-gradient",
  },
  {
    id: 3,
    title: "Neon Frame",
    description: "A glowing frame for futuristic UI sections.",
    icon: <Code2 size={22} />,
    variant: "frame-neon",
  },
  {
    id: 4,
    title: "Corner Frame",
    description: "Decorative corners without a complete border.",
    icon: <CornerDownRight size={22} />,
    variant: "frame-corner",
  },
];

function BorderFrame({
  children,
  title = "Border Frame",
  description = "Reusable decorative border components for modern UI.",
  className = "",
}: BorderFrameProps) {
  return (
    <main className={`border-frame-page ${className}`}>
      <div className="border-frame-container">
        {/* Heading */}
        <header className="border-frame-heading">
          <span>UI COMPONENT</span>

          <h1>
            Beautiful <strong>Border Frames</strong>
          </h1>

          <p>{description}</p>
        </header>

        {/* Custom children */}
        {children && (
          <section className="border-frame-custom">
            <div className="frame-label">{title}</div>

            <div className="border-frame-wrapper">
              <div className="frame-corner frame-corner-tl" />
              <div className="frame-corner frame-corner-tr" />
              <div className="frame-corner frame-corner-bl" />
              <div className="frame-corner frame-corner-br" />

              <div className="border-frame-content">{children}</div>
            </div>
          </section>
        )}

        {/* Examples */}
        <section className="border-frame-grid">
          {frameCards.map((card) => (
            <article key={card.id} className={`frame-card ${card.variant}`}>
              <div className="frame-card-border">
                <span className="frame-line frame-line-top" />
                <span className="frame-line frame-line-right" />
                <span className="frame-line frame-line-bottom" />
                <span className="frame-line frame-line-left" />
              </div>

              <div className="frame-card-content">
                <div className="frame-card-top">
                  <div className="frame-icon">{card.icon}</div>

                  <ArrowUpRight className="frame-arrow" size={20} />
                </div>

                <div>
                  <span className="frame-number">0{card.id}</span>

                  <h2>{card.title}</h2>

                  <p>{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default BorderFrame;
