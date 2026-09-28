import { useEffect, useRef } from "react";

interface CanvasRevealEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const CanvasRevealEffect = ({ className = "", children }: CanvasRevealEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let particles: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

      particles = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.4 + 0.1,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y -= particle.speed;

        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={containerRef} className={`canvas-reveal-effect relative overflow-hidden rounded-xl bg-black ${className}`}>
      <canvas ref={canvasRef} className="canvas-reveal-effect__canvas absolute inset-0 h-full w-full" />
      <div className="canvas-reveal-effect__content relative z-10">{children}</div>
    </div>
  );
};

export default CanvasRevealEffect;