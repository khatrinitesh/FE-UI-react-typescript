import {
  useEffect,
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

type AuroraBackgroundProps = {
  children?: ReactNode;
  className?: string;
  interactive?: boolean;
  showGrid?: boolean;
};

type AuroraStyles = CSSProperties & {
  "--mouse-x": string;
  "--mouse-y": string;
};

export function AuroraBackground({
  children,
  className = "",
  interactive = true,
  showGrid = true,
}: AuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const mouseX = ((event.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((event.clientY - rect.top) / rect.height) * 100;

    containerRef.current.style.setProperty("--mouse-x", `${mouseX}%`);
    containerRef.current.style.setProperty("--mouse-y", `${mouseY}%`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty("--mouse-x", "50%");
    containerRef.current.style.setProperty("--mouse-y", "50%");
  };

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty("--mouse-x", "50%");
    containerRef.current.style.setProperty("--mouse-y", "50%");
  }, []);

  const styles: AuroraStyles = {
    "--mouse-x": "50%",
    "--mouse-y": "50%",
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styles}
      className={`relative isolate min-h-screen overflow-hidden bg-[#050507] text-white ${className}`}
    >
      {/* Base background */}
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_top,#171126_0%,#08080c_45%,#030305_100%)]" />

      {/* Aurora layer one */}
      <div className="aurora-layer aurora-layer-one absolute -left-[20%] -top-[45%] -z-40 h-[95%] w-[110%] rounded-[50%] opacity-70 blur-[70px]" />

      {/* Aurora layer two */}
      <div className="aurora-layer aurora-layer-two absolute -right-[25%] top-[5%] -z-40 h-[85%] w-[100%] rounded-[50%] opacity-60 blur-[90px]" />

      {/* Aurora layer three */}
      <div className="aurora-layer aurora-layer-three absolute -bottom-[45%] left-[5%] -z-40 h-[90%] w-[90%] rounded-[50%] opacity-50 blur-[100px]" />

      {/* Mouse-following glow */}
      {interactive && (
        <div className="aurora-pointer absolute inset-0 -z-30 opacity-60 transition-opacity duration-500" />
      )}

      {/* Noise texture */}
      <div className="aurora-noise pointer-events-none absolute inset-0 -z-20 opacity-[0.045]" />

      {/* Grid */}
      {showGrid && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      )}

      {/* Top light */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
