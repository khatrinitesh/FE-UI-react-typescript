import { ArrowRight, Sparkles, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import "./CanvasReveal.css";

interface Point {
  x: number;
  y: number;
}

const CanvasReveal = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const animationRef = useRef<number | null>(null);

  const mouseRef = useRef<Point>({
    x: -200,
    y: -200,
  });

  const targetMouseRef = useRef<Point>({
    x: -200,
    y: -200,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();

      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const draw = () => {
      mouseRef.current.x +=
        (targetMouseRef.current.x - mouseRef.current.x) * 0.12;

      mouseRef.current.y +=
        (targetMouseRef.current.y - mouseRef.current.y) * 0.12;

      context.clearRect(0, 0, width, height);

      /*
       * Background gradient
       */
      const backgroundGradient = context.createLinearGradient(
        0,
        0,
        width,
        height,
      );

      backgroundGradient.addColorStop(0, "rgba(34, 211, 238, 0.18)");

      backgroundGradient.addColorStop(0.45, "rgba(139, 92, 246, 0.16)");

      backgroundGradient.addColorStop(1, "rgba(236, 72, 153, 0.18)");

      context.fillStyle = backgroundGradient;
      context.fillRect(0, 0, width, height);

      /*
       * Grid
       */
      context.strokeStyle = "rgba(255,255,255,0.06)";
      context.lineWidth = 1;

      const gridSize = 40;

      for (let x = 0; x <= width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      /*
       * Reveal glow
       */
      const glow = context.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        220,
      );

      glow.addColorStop(0, "rgba(34, 211, 238, 0.55)");

      glow.addColorStop(0.25, "rgba(139, 92, 246, 0.25)");

      glow.addColorStop(0.65, "rgba(236, 72, 153, 0.08)");

      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      context.fillStyle = glow;

      context.fillRect(
        mouseRef.current.x - 220,
        mouseRef.current.y - 220,
        440,
        440,
      );

      /*
       * Decorative particles
       */
      for (let index = 0; index < 35; index++) {
        const x = ((index * 97) % Math.max(width, 1)) + Math.sin(index) * 10;

        const y = ((index * 53) % Math.max(height, 1)) + Math.cos(index) * 10;

        const distance = Math.sqrt(
          Math.pow(x - mouseRef.current.x, 2) +
            Math.pow(y - mouseRef.current.y, 2),
        );

        const visibility = Math.max(0, 1 - distance / 220);

        if (visibility > 0) {
          context.beginPath();

          context.arc(x, y, 1.5 + visibility * 2, 0, Math.PI * 2);

          context.fillStyle = `rgba(103, 232, 249, ${visibility})`;

          context.fill();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      targetMouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);

      targetMouseRef.current = {
        x: -200,
        y: -200,
      };
    };

    resizeCanvas();
    draw();

    container.addEventListener("mousemove", handleMouseMove);

    container.addEventListener("mouseenter", handleMouseEnter);

    container.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      container.removeEventListener("mousemove", handleMouseMove);

      container.removeEventListener("mouseenter", handleMouseEnter);

      container.removeEventListener("mouseleave", handleMouseLeave);

      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <main className="canvas-reveal-page">
      <div className="canvas-reveal-container">
        {/* Heading */}

        <header className="canvas-reveal-heading">
          <span>INTERACTION COMPONENT</span>

          <h1>
            Canvas <strong>Reveal Effect</strong>
          </h1>

          <p>
            Move your cursor across the card to reveal the interactive canvas
            effect.
          </p>
        </header>

        {/* Canvas Card */}

        <section
          ref={containerRef}
          className={`canvas-reveal-card ${
            isHovering ? "canvas-reveal-active" : ""
          }`}
        >
          <canvas ref={canvasRef} className="canvas-reveal-canvas" />

          <div className="canvas-reveal-overlay" />

          <div className="canvas-reveal-content">
            <div className="canvas-reveal-icon">
              <Sparkles size={24} />
            </div>

            <span className="canvas-reveal-label">CANVAS INTERACTION</span>

            <h2>
              Move your cursor.
              <br />
              <strong>Reveal the magic.</strong>
            </h2>

            <p>
              The canvas follows your cursor and reveals a glowing interactive
              background with particles and grid details.
            </p>

            <button type="button" className="canvas-reveal-button">
              Explore Effect
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Cursor Hint */}

          <div
            className={`canvas-reveal-cursor ${
              isHovering ? "canvas-reveal-cursor-hidden" : ""
            }`}
          >
            <MousePointer2 size={18} />
            <span>Move cursor</span>
          </div>

          {/* Decorative Corner */}

          <div className="canvas-reveal-corner canvas-reveal-corner-top" />

          <div className="canvas-reveal-corner canvas-reveal-corner-bottom" />
        </section>

        {/* Info */}

        <div className="canvas-reveal-info">
          <div>
            <span>TECHNOLOGY</span>
            <strong>HTML Canvas</strong>
          </div>

          <div>
            <span>ANIMATION</span>
            <strong>requestAnimationFrame</strong>
          </div>

          <div>
            <span>INTERACTION</span>
            <strong>Mouse Tracking</strong>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CanvasReveal;
