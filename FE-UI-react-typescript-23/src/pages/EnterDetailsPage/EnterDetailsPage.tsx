import { RefreshCw } from "lucide-react";
import FixedFooter from "../../components/FixedFooter/FixedFooter";
import FixedHeader from "../../components/FixedHeader/FixedHeader";
import CheckboxSection from "../../components/UI/CheckboxSection/CheckboxSection";
import CircularLoader from "../../components/UI/CircularLoader/CircularLoader";
import Collapsible from "../../components/UI/Collapsible/Collapsible";
import LoadingDots from "../../components/UI/LoadingDots/LoadingDots";
import { CONSENT_ITEMS } from "../../constants/constants";
import Button from "../../components/UI/Button/Button";
import FieldTextarea from "../../components/UI/FieldTextarea/FieldTextarea";
import { useState } from "react";
import OtpSection from "../../components/OtpSection/OtpSection";
import FieldInput from "../../components/UI/FieldInput/FieldInput";

const EnterDetailsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [code, setCode] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="relative min-h-dvh  mt-22">
      <div className="mainWrapper min-h-dvh pt-13 pb-25 grid grid-rows-[auto_1fr_auto]">
        <FixedHeader />
        <div className="mainContent min-h-dvh">
          <div className="max-w-2xl mx-auto min-h-dvh px-[1rem]">
            <div className="flex p-6 items-center w-full justify-center bg-[#7444a7]">
              <CircularLoader size="lg" />
            </div>
            <LoadingDots size="md" />
            <div className="w-full mx-auto px-4">
              <Button
                iconLeft={<RefreshCw className="w-4 h-4" />}
                onClick={() => console.log("refresh")}
              >
                Refresh
              </Button>
            </div>
            <div className="commentBlock bg-white rounded-[24px] w-full p-6">
              <FieldTextarea
                name="moment"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Describe the moment you want to immortalize..."
                maxLength={500}
              />
            </div>
            <OtpSection
              length={6}
              onChange={(value) => setCode(value)}
              onComplete={(value) => {
                console.log("OTP complete:", value);
                // submit / verify here
              }}
              onResend={() => {
                console.log("Resend clicked");
              }}
            />
            {code}
            <div className="formBlock bg-white shadow-md w-full p-3 rounded-[24px]">
              <FieldInput
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                maxLength={30}
              />
            </div>
            {/* <Collapsible label={LEARN_MORE_LABEL}>
        {LEARN_MORE_MARKETING_COPY}
      </Collapsible> */}
            <CheckboxSection
              title="Checkmark Section"
              items={CONSENT_ITEMS}
              onChange={(values) => console.log(values)}
            >
              <Collapsible label="Learn more">
                By checking this box, you agree to receive personalized
                marketing communications...
              </Collapsible>
            </CheckboxSection>
          </div>
        </div>
        <FixedFooter />
      </div>
    </div>
  );
};

export default EnterDetailsPage;
