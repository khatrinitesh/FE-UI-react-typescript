import { BUTTON_ANIMATION, BUTTON_CONFIG } from "../../constants/constants";
import { useButtonStore } from "../../store/useButtonStore";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  id: string;
  children: React.ReactNode;
  onClick?: () => Promise<void> | void;
  variant?: "primary" | "secondary";
}

const AnimatedButton = ({
  id,
  children,
  onClick,
  variant = "primary",
}: AnimatedButtonProps) => {
  const { loadingId, setLoading } = useButtonStore();
  const isLoading = loadingId === id;

  const handleClick = async () => {
    if (!onClick) return;

    setLoading(id);
    await onClick();
    setLoading(null);
  };

  const background =
    variant === "primary"
      ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
      : "#e5e7eb";

  const color = variant === "primary" ? "white" : "#111";
  return (
    <motion.button
      onClick={handleClick}
      disabled={isLoading}
      whileHover={!isLoading ? BUTTON_ANIMATION.whileHover : {}}
      whileTap={!isLoading ? BUTTON_ANIMATION.whileTap : {}}
      transition={BUTTON_ANIMATION.transition}
      style={{
        height: BUTTON_CONFIG.HEIGHT,
        padding: "0 24px",
        borderRadius: BUTTON_CONFIG.BORDER_RADIUS,
        border: "none",
        cursor: isLoading ? "not-allowed" : "pointer",
        background,
        color,
        fontSize: 16,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        opacity: isLoading ? 0.8 : 1,
      }}
    >
      {isLoading ? <Spinner /> : children}
    </motion.button>
  );
};

export default AnimatedButton;

const Spinner = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    style={{
      width: 18,
      height: 18,
      border: "2px solid rgba(255,255,255,0.5)",
      borderTop: "2px solid white",
      borderRadius: "50%",
    }}
  />
);
