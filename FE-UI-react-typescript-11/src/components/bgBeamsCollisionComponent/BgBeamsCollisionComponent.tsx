import { useEffect, useRef } from "react";
import type { BackgroundBeamsProps, Beam } from "../../interface";
import { BEAMS_CONFIG } from "./bgBeamsCollisionData";

const BgBeamsCollisionComponent = () => {
  return (
    <>
      <BackgroundBeams />
    </>
  );
};

export default BgBeamsCollisionComponent;

const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({
  width = window.innerWidth,
  height = window.innerHeight,
  beamCount = BEAMS_CONFIG.BEAM_COUNT,
  colors = BEAMS_CONFIG.COLORS,
  minSpeed = BEAMS_CONFIG.MIN_SPEED,
  maxSpeed = BEAMS_CONFIG.MAX_SPEED,
  minSize = BEAMS_CONFIG.MIN_SIZE,
  maxSize = BEAMS_CONFIG.MAX_SIZE,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);

  // Initialize beams with random positions and speeds
  const initBeams = () => {
    const beams: Beam[] = [];
    for (let i = 0; i < beamCount; i++) {
      const widthBeam = Math.random() * (maxSize - minSize) + minSize;
      const heightBeam = widthBeam / 4; // beams are rectangular, width longer than height
      beams.push({
        x: Math.random() * (width - widthBeam),
        y: Math.random() * (height - heightBeam),
        width: widthBeam,
        height: heightBeam,
        velocityX:
          (Math.random() * (maxSpeed - minSpeed) + minSpeed) *
          (Math.random() > 0.5 ? 1 : -1),
        velocityY:
          (Math.random() * (maxSpeed - minSpeed) + minSpeed) *
          (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return beams;
  };

  // Collision detection between beams (AABB)
  const detectCollision = (a: Beam, b: Beam) => {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  };

  // Resolve collision: simple velocity swap on collision for effect
  const resolveCollision = (a: Beam, b: Beam) => {
    const tempVX = a.velocityX;
    const tempVY = a.velocityY;
    a.velocityX = b.velocityX;
    a.velocityY = b.velocityY;
    b.velocityX = tempVX;
    b.velocityY = tempVY;
  };

  useEffect(() => {
    beamsRef.current = initBeams();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const beams = beamsRef.current;

      // Update positions
      for (let i = 0; i < beams.length; i++) {
        const b = beams[i];

        b.x += b.velocityX;
        b.y += b.velocityY;

        // Bounce off walls
        if (b.x <= 0 || b.x + b.width >= width) b.velocityX *= -1;
        if (b.y <= 0 || b.y + b.height >= height) b.velocityY *= -1;
      }

      // Check collisions between beams
      for (let i = 0; i < beams.length; i++) {
        for (let j = i + 1; j < beams.length; j++) {
          if (detectCollision(beams[i], beams[j])) {
            resolveCollision(beams[i], beams[j]);
          }
        }
      }

      // Draw beams
      for (const b of beams) {
        const gradient = ctx.createLinearGradient(
          b.x,
          b.y,
          b.x + b.width,
          b.y + b.height
        );
        gradient.addColorStop(0, b.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(b.x, b.y, b.width, b.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [width, height, beamCount, colors, minSpeed, maxSpeed, minSize, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ display: "block" }}
    />
  );
};
