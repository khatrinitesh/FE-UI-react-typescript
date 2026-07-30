import { useRef, useState, type CSSProperties, type ReactNode } from "react";

type Beam = {
  id: number;
  left: string;
  width: number;
  height: number;
  duration: number;
  delay: number;
  rotation: number;
};

type Collision = {
  id: number;
  x: number;
  y: number;
};

type BackgroundBeamsWithCollisionProps = {
  children?: ReactNode;
  className?: string;
  beamCount?: number;
};

const createBeams = (count: number): Beam[] =>
  Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${8 + (index * 84) / Math.max(count - 1, 1)}%`,
    width: 1 + (index % 2),
    height: 80 + ((index * 37) % 130),
    duration: 3.5 + ((index * 29) % 30) / 10,
    delay: -((index * 0.7) % 4),
    rotation: -14 + ((index * 9) % 28),
  }));

export function BackgroundBeamsWithCollision({
  children,
  className = "",
  beamCount = 10,
}: BackgroundBeamsWithCollisionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [beams] = useState(() => createBeams(beamCount));
  const [collisions, setCollisions] = useState<Collision[]>([]);

  const createCollision = (beamElement: HTMLDivElement) => {
    const container = containerRef.current;

    if (!container) return;

    const beamRect = beamElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const collision: Collision = {
      id: Date.now() + Math.random(),
      x: beamRect.left - containerRect.left + beamRect.width / 2,
      y: containerRect.height - 74,
    };

    setCollisions((current) => [...current, collision]);

    window.setTimeout(() => {
      setCollisions((current) =>
        current.filter((item) => item.id !== collision.id),
      );
    }, 1100);
  };

  return (
    <div
      ref={containerRef}
      className={`relative isolate min-h-screen overflow-hidden bg-[#050507] text-white ${className}`}
    >
      {/* Base gradient */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-[radial-gradient(circle_at_top,#201338_0%,#09090d_46%,#030304_100%)]" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-40 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 -z-40 size-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      {/* Beams */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {beams.map((beam) => (
          <BeamElement
            key={beam.id}
            beam={beam}
            onCollision={createCollision}
          />
        ))}
      </div>

      {/* Collision line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[72px] z-10">
        <div className="mx-auto h-px w-[92%] bg-gradient-to-r from-transparent via-violet-300/60 to-transparent shadow-[0_0_20px_rgba(196,181,253,0.5)]" />
      </div>

      {/* Collision particles */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {collisions.map((collision) => (
          <CollisionEffect key={collision.id} collision={collision} />
        ))}
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-36 bg-gradient-to-t from-violet-950/70 via-violet-950/20 to-transparent" />

      {/* Noise */}
      <div className="beam-noise pointer-events-none absolute inset-0 z-30 opacity-[0.04]" />

      {/* Content */}
      <div className="relative z-40">{children}</div>
    </div>
  );
}

type BeamElementProps = {
  beam: Beam;
  onCollision: (element: HTMLDivElement) => void;
};

function BeamElement({ beam, onCollision }: BeamElementProps) {
  const beamRef = useRef<HTMLDivElement>(null);

  const style = {
    left: beam.left,
    width: `${beam.width}px`,
    height: `${beam.height}px`,
    animationDuration: `${beam.duration}s`,
    animationDelay: `${beam.delay}s`,
    "--beam-rotation": `${beam.rotation}deg`,
  } as CSSProperties;

  return (
    <div
      ref={beamRef}
      style={style}
      onAnimationIteration={() => {
        if (beamRef.current) {
          onCollision(beamRef.current);
        }
      }}
      className="beam-fall absolute top-[-220px] rounded-full bg-gradient-to-b from-transparent via-violet-300 to-cyan-200 shadow-[0_0_12px_rgba(167,139,250,0.8)]"
    >
      <span className="absolute inset-x-[-3px] bottom-0 h-8 rounded-full bg-white/70 blur-sm" />
    </div>
  );
}

type CollisionEffectProps = {
  collision: Collision;
};

function CollisionEffect({ collision }: CollisionEffectProps) {
  return (
    <div
      style={{
        left: collision.x,
        top: collision.y,
      }}
      className="absolute"
    >
      <div className="collision-flash absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_15px_#fff,0_0_35px_#a78bfa,0_0_60px_#22d3ee]" />

      <div className="collision-ring absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200" />

      {Array.from({ length: 10 }).map((_, index) => {
        const angle = (index / 10) * Math.PI * 2;
        const distance = 28 + (index % 3) * 10;

        const particleStyle = {
          "--particle-x": `${Math.cos(angle) * distance}px`,
          "--particle-y": `${Math.sin(angle) * distance}px`,
          animationDelay: `${index * 20}ms`,
        } as CSSProperties;

        return (
          <span
            key={index}
            style={particleStyle}
            className="collision-particle absolute left-1/2 top-1/2 size-1 rounded-full bg-cyan-100 shadow-[0_0_8px_rgba(165,243,252,1)]"
          />
        );
      })}
    </div>
  );
}
