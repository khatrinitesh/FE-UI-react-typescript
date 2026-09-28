import type { ReactNode } from "react";
import "./BlurBackground.css";

interface BlurBackgroundProps {
  image: string;
  children: ReactNode;
  blur?: "sm" | "md" | "lg" | "xl";
  overlay?: boolean;
}

const BlurBackground = ({
  image,
  children,
  blur = "lg",
  overlay = true,
}: BlurBackgroundProps) => {
  return (
    <section className="blur-background">
      <div
        className={`blur-background__image blur-background__image--${blur}`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {overlay && <div className="blur-background__overlay" />}

      <div className="blur-background__content">{children}</div>
    </section>
  );
};

export default BlurBackground;
