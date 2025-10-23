import { useEffect, useRef } from "react";
import { useTracingBeamStore } from "../../store/tracingBeamStore";

const TracingBeam = () => {
  const { x, y, color, thickness, speed, setPosition } = useTracingBeamStore();
  const beamRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x, y });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [setPosition]);

  // Smooth interpolation
  useEffect(() => {
    const animate = () => {
      const target = { x, y };
      posRef.current.x += (target.x - posRef.current.x) * speed;
      posRef.current.y += (target.y - posRef.current.y) * speed;

      if (beamRef.current) {
        beamRef.current.style.left = `${posRef.current.x}px`;
        beamRef.current.style.top = `${posRef.current.y}px`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [speed, x, y]);
  return (
    <div
      ref={beamRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: thickness,
        height: thickness,
        backgroundColor: color,
        borderRadius: "50%",
        pointerEvents: "none",
        boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
};

export default TracingBeam;
