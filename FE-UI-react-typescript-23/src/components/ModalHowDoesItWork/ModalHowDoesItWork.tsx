import { LucideMail, Play, SquarePen } from "lucide-react";
import type { HowItWorksIcon, HowItWorksModalProps } from "../../interface";
import { HOW_IT_WORKS_STEPS, iconBg } from "../../constants/constants";
import Modal from "../Modal/Modal";

const renderIcon = (type: HowItWorksIcon) => {
  switch (type) {
    case "mail":
      return <LucideMail className="text-white" />;
    case "edit":
      return <SquarePen className="text-white" />;
    case "play":
      return <Play className="text-white" />;
  }
};

const ModalHowDoesItWork = ({ isOpen, onClose }: HowItWorksModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* header */}
      <header className="px-8 pt-6 pb-4 border-b border-[#E3DFEF] bg-white">
        <h2 className="text-3xl congenial-bold  tracking-[0.08em] text-[#6E4A8E] uppercase">
          HOW DOES IT WORK?
        </h2>
      </header>

      {/* body */}
      <div className="px-8 py-8 space-y-8 bg-white">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <div key={step.step} className="flex items-start gap-4 md:gap-6">
            {/* circle icon */}
            <div
              className={`flex-shrink-0 w-16 h-16 rounded-full ${iconBg} flex items-center justify-center`}
            >
              {renderIcon(step.icon)}
            </div>

            {/* text */}
            <div className="flex flex-col gap-2">
              <p className="text-xl congenial-bold text-[#6E4A8E]">
                Step {step.step}
              </p>
              <p className="text-base congenial-medium text-black">
                {step.title}
              </p>
              {step.description && (
                <p className="text-sm congenial-medium text-black">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ModalHowDoesItWork;
