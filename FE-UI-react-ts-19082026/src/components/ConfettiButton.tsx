// canvas-confetti does not provide TypeScript declarations in this project.
// @ts-expect-error Missing declaration file for the canvas-confetti package.
import confetti from "canvas-confetti";

export default function ConfettiButton() {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: {
        y: 0.6,
      },
    });
  };

  return (
    <button
      type="button"
      onClick={handleConfetti}
      className="rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700 active:scale-95"
    >
      🎉 Celebrate
    </button>
  );
}
