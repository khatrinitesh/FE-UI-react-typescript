import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import {
  useEffect,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";

import { cn } from "../../utils/cn";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/{}[]";

const TOTAL_CHARACTERS = 216;

function createEncryptedCharacters(frame = 0) {
  return Array.from(
    {
      length: TOTAL_CHARACTERS,
    },
    (_, index) => {
      const characterIndex = (index * 17 + frame * 11) % CHARACTERS.length;

      return CHARACTERS[characterIndex];
    },
  );
}

export interface EvervaultCardProps {
  eyebrow?: string;
  title: string;
  description?: string;
  value?: string;
  className?: string;
  onClick?: () => void;
}

export function EvervaultCard({
  eyebrow = "Encrypted",
  title,
  description,
  value,
  className,
  onClick,
}: EvervaultCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const [characters, setCharacters] = useState(() =>
    createEncryptedCharacters(),
  );

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      260px circle at ${mouseX}px ${mouseY}px,
      rgba(63, 169, 56, 0.28),
      transparent 70%
    )
  `;

  useEffect(() => {
    if (!isHovered) {
      return;
    }

    let frame = 0;

    const intervalId = window.setInterval(() => {
      frame += 1;

      setCharacters(createEncryptedCharacters(frame));
    }, 80);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isHovered]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    mouseX.set(-500);
    mouseY.set(-500);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!onClick) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <motion.article
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={cn(
        "group relative isolate min-h-96 w-full overflow-hidden",
        "rounded-3xl border border-secondary/20",
        "bg-secondary text-white",
        "shadow-[0_20px_60px_rgba(30,74,29,0.25)]",
        "outline-none",
        "focus-visible:ring-4 focus-visible:ring-primary/30",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {/* Encrypted characters */}
      <span
        aria-hidden="true"
        className="absolute inset-0 grid overflow-hidden p-3 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
        }}
      >
        {characters.map((character, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: isHovered ? [0.2, 0.75, 0.3] : 0.25,
            }}
            transition={{
              duration: 0.6,
              delay: (index % 12) * 0.025,
              repeat: isHovered ? Infinity : 0,
            }}
            className="flex items-center justify-center font-mono text-[9px] text-primary"
          >
            {character}
          </motion.span>
        ))}
      </span>

      {/* Mouse spotlight */}
      <motion.span
        aria-hidden="true"
        style={{
          background: spotlightBackground,
        }}
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Top gradient */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-secondary/40 to-secondary"
      />

      {/* Decorative border */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/10"
      />

      {/* Card content */}
      <section className="relative z-20 flex min-h-96 flex-col justify-between p-7">
        <header className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-montserrat text-12 font-semibold uppercase tracking-[0.16em] text-primary">
            <ShieldCheck size={15} />

            {eyebrow}
          </span>

          <motion.span
            whileHover={{
              rotate: 45,
            }}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm"
          >
            <ArrowUpRight size={20} />
          </motion.span>
        </header>

        <section>
          {value && (
            <p className="mb-4 font-mono text-14 tracking-[0.2em] text-primary">
              {value}
            </p>
          )}

          <h2 className="max-w-md font-montserrat text-32 font-bold leading-tight text-white tablet:text-40">
            {title}
          </h2>

          {description && (
            <p className="mt-4 max-w-md font-montserrat text-14 font-normal leading-6 text-white/65 tablet:text-16">
              {description}
            </p>
          )}
        </section>
      </section>
    </motion.article>
  );
}
