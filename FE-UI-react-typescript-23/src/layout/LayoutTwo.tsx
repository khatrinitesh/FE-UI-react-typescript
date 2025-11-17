// LayoutTwo.tsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
import ErrorFallbackPage from "../pages/ErrorFallbackPage/ErrorFallbackPage";
import FixedHeader from "../components/FixedHeader/FixedHeader";
import FixedFooter from "../components/FixedFooter/FixedFooter";

// your components for modal content
import Modal from "../components/Modal/Modal";
import CheckboxSection from "../components/UI/CheckboxSection/CheckboxSection";
import { CONSENT_ITEMS } from "../constants/constants";
import Collapsible from "../components/UI/Collapsible/Collapsible";

const LayoutTwo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const isFirstPage = location.pathname === "/enter-details-1";

  const handleConfirmModal = () => {
    if (!allChecked) return; // safety
    setIsOpen(false);
    navigate("/enter-details-2");
  };

  return (
    <>
      <div className="relative min-h-dvh mt-22 bg-[#fbf9fa] formDetailsSection">
        <div className="mainWrapper mx-auto min-h-dvh px-6 pb-25 flex flex-col grid-rows-[auto_1fr_auto] my-gradient-bg">
          <FixedHeader />

          <ErrorBoundary fallback={<ErrorFallbackPage />}>
            <div className="max-w-2xl px-4 py-10 w-full mx-auto">
              <Outlet />
            </div>
          </ErrorBoundary>

          {/* Footer: only page1 gets the modal opener */}
          <FixedFooter
            onOpenConsentModal={isFirstPage ? () => setIsOpen(true) : undefined}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modalContent flex-1 min-h-0 px-3 md:px-5 pt-0 md:pt-10 overflow-y-auto inline-grid gap-[10px]">
          <h2 className="headtitle-3 mt-4 md:mt-0 w-full color-purple-1 congenial-bold uppercase text-center">
            Before We start
          </h2>

          <CheckboxSection
            title="Checkmark Section"
            items={CONSENT_ITEMS}
            onChange={(values: any) => {
              // 🔍 Normalize to a list of selected IDs

              let selectedIds: string[] = [];

              if (Array.isArray(values)) {
                // CASE 1: values is string[] of IDs
                if (typeof values[0] === "string") {
                  selectedIds = values as string[];
                }

                // CASE 2: values is { id, checked }[]
                else if (
                  typeof values[0] === "object" &&
                  values[0] !== null &&
                  "id" in values[0]
                ) {
                  selectedIds = (values as { id: string; checked?: boolean }[])
                    .filter((v) => v.checked ?? true)
                    .map((v) => v.id);
                }
              } else if (values && typeof values === "object") {
                // CASE 3: values is { [id]: boolean }
                selectedIds = Object.keys(values).filter(
                  (key) => values[key] === true
                );
              }

              const areAllChecked = CONSENT_ITEMS.every((item) =>
                selectedIds.includes(item.id)
              );

              setAllChecked(areAllChecked);
            }}
          >
            <Collapsible className="ps-10" label="Learn more">
              By checking this box, you agree to receive personalized marketing
              communications from Milka and partner brands of the Ma vie en
              couleurs program. You can unsubscribe at any time by clicking the
              unsubscribe link in each email or by contacting us directly.
            </Collapsible>
          </CheckboxSection>

          <p className="py-4 px-4 text-xs color-gray-1 congenial-regular">
            * Required fields to validate your participation
          </p>
        </div>

        <div className="modalFooter bg-[#F8F6FB] px-6 py-6 md:px-10 md:py-8 border-t border-[#6e4a8e]/10">
          <button
            onClick={handleConfirmModal}
            disabled={!allChecked}
            className="
              text-base uppercase cursor-pointer w-full
              bg-[#6E4A8E] text-white py-4 px-8 rounded-full
              transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
              text-start
            "
          >
            Confirm
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LayoutTwo;
