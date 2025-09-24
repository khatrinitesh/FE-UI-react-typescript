import { useEffect, useRef, useState } from "react";
import { SCROLL_BACKGROUND_STEPS } from "./components/data";

const ChangeBgScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentColor, setCurrentColor] = useState<string>(
    SCROLL_BACKGROUND_STEPS[0].color
  );

  const getCurrentColorByScroll = (scrollY: number): string => {
    let selectedColor = SCROLL_BACKGROUND_STEPS[0].color;

    for (let i = 0; i < SCROLL_BACKGROUND_STEPS.length; i++) {
      const step = SCROLL_BACKGROUND_STEPS[i];
      if (scrollY >= step.scrollY) {
        selectedColor = step.color;
      }
    }

    return selectedColor;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newColor = getCurrentColorByScroll(scrollY);

      if (newColor !== currentColor) {
        setCurrentColor(newColor);
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            backgroundColor: newColor,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentColor]);
  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "200vh", // enough height to scroll
        transition: "background-color 0.3s ease",
        padding: "40px",
      }}
    >
      <h1>Scroll to Change Background</h1>
      <p>Scroll down to see the background color change dynamically.</p>
    </div>
  );
};

export default ChangeBgScrollSection;
