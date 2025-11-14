import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../Modal/Modal";
import CheckboxSection from "../UI/CheckboxSection/CheckboxSection";
import Collapsible from "../UI/Collapsible/Collapsible";
import { CONSENT_ITEMS } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const FixedFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/enter-details-2");
    setIsOpen(false);
  };
  return (
    <>
      <motion.footer className="fixed bottom-0 left-0 w-full shadow-[0_-2px_8px_rgba(0,0,0,0.08)] bg-white p-4 md:p-6 flex flex-col items-center justify-center  z-40 ">
        <button
          onClick={() => setIsOpen(true)}
          className=" bg-[#90d1ee] w-full  congenial-medium  text-lg px-10 cursor-pointer py-4 rounded-full hover:shadow-lg hover:bg-sky-400 transition-all duration-300 text-[#4a2b7b]"
        >
          Continue
        </button>
      </motion.footer>{" "}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modalContent flex-1 min-h-0 px-3 md:px-5 pt-0 md:pt-10 overflow-y-auto inline-grid gap-[10px]">
          <h2 className="headtitle-3 mt-4 md:mt-0 w-full color-purple-1 congenial-bold uppercase text-center">
            Before We start
          </h2>

          <CheckboxSection
            title="Checkmark Section"
            items={CONSENT_ITEMS}
            onChange={(values) => console.log(values)}
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

        <div className="modalFooter border-t bg-[#F8F6FB] px-6 py-6 md:px-10 md:py-8 border-t border-[#6e4a8e]/10">
          <button
            onClick={handleClick}
            className="text-base uppercase cursor-pointer w-full bg-[#6E4A8E] text-white py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-start"
          >
            Confirm
          </button>
        </div>
      </Modal>
    </>
  );
};

export default FixedFooter;
