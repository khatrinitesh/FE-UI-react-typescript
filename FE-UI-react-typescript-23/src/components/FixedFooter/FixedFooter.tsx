import { useLocation, useNavigate } from "react-router-dom";

type FooterConfig = {
  label: string;
  nextPath?: string; // if missing → no CTA
};

const footerByPath: Record<string, FooterConfig> = {
  "/enter-details-1": { label: "Continue", nextPath: "/enter-details-2" },
  "/enter-details-2": { label: "Continue", nextPath: "/enter-details-3" },
  "/enter-details-3": { label: "Confirm", nextPath: "/enter-details-4" },
  "/enter-details-4": {
    label: "Generate lyrics",
    nextPath: "/enter-details-5",
  },
  "/enter-details-5": {
    label: "Confirm my version",
    nextPath: "/enter-details-6",
  },
  "/enter-details-6": {
    label: "Enter the contest",
    nextPath: "/enter-details-7",
  },
  "/enter-details-7": {
    label: "Confirm my participation",
    nextPath: "/enter-details-8",
  },
  "/enter-details-8": { label: "", nextPath: undefined },
};

interface FixedFooterProps {
  onOpenConsentModal?: () => void; // 👈 only used on page 1
}

const FixedFooter = ({ onOpenConsentModal }: FixedFooterProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  // hide footer completely on last page
  if (pathname === "/enter-details-8") return null;

  const config = footerByPath[pathname];
  const hasCta = !!config?.label;

  const isFirstPage = pathname === "/enter-details-1";

  const handleClick = () => {
    // 👉 Special behavior: on page 1, open modal instead of navigating
    if (isFirstPage && onOpenConsentModal) {
      onOpenConsentModal();
      return;
    }

    // normal behavior for other pages
    if (!config?.nextPath) return;
    navigate(config.nextPath);
  };
  return (
    <>
      <div className="fixed left-0 right-0 bottom-0 bg-[#fefefe] shadow-[0_-8px_16px_rgba(0,0,0,0.08)]">
        <div className="w-full mx-auto p-4">
          {hasCta && (
            <button
              type="button"
              onClick={handleClick}
              className="
              bg-[#90d1ee] w-full
              congenial-medium text-base
              px-12 py-5
              rounded-full
              cursor-pointer
              text-[#4a2b7b]
              transition-all duration-300 outline-none
            "
            >
              {config?.label}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FixedFooter;
