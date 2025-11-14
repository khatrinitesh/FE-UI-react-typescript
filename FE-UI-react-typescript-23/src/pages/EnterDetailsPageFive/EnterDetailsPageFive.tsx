import { useEffect, useState, type ChangeEvent } from "react";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import FieldInput from "../../components/UI/FieldInput/FieldInput";
import { getImage } from "../../utils/assets";
import FieldTextarea from "../../components/UI/FieldTextarea/FieldTextarea";
import Inspirations from "../../components/Inspirations/Inspirations";
import { inspirationItems } from "../../constants/constants";

interface FormData {
  firstName: string;
  pronouns: string;
  relationship: string;
}

const EnterDetailsPageFive = () => {
  const [text, setText] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    pronouns: "",
    relationship: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("Form updated:", formData);
  }, [formData]);
  return (
    <div className="enterDetailsSection  w-full h-full ">
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          Tell me more about the person you want this song for 🎶
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-15 max-w-w-[88%] mx-auto">
        <div className="fillForm bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-5  rounded-[24px] ">
          <div className="formGrp mb-6">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Person's first name
            </label>
            <FieldInput
              name="firstName"
              placeholder="e.g: Sophie, Thomas, Alex..."
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="formGrp mb-6">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Their pronouns
            </label>
            <FieldInput
              name="pronouns"
              placeholder="Enter pronouns..."
              value={formData.pronouns}
              onChange={handleChange}
            />
          </div>
          <div className="formGrp mb-6">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Your relationship
            </label>
            <FieldInput
              name="relationship"
              placeholder="Enter relationship..."
              value={formData.relationship}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
        showHeader={false}
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          What special moment do you want to turn into a song? 💜
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-15 max-w-w-[88%] mx-auto">
        <div className="fillForm bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-5 rounded-[24px] ">
          <div className="formGrp mb-4">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Describe the moment
            </label>
            <FieldTextarea
              name="moment"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Describe the moment you want to immortalize..."
              maxLength={500}
            />
          </div>
          <Inspirations
            items={inspirationItems}
            onSelectItem={(val) => setText(val)}
            onRefresh={() => {
              // Clear textarea when Refresh is clicked
              setText("");
              // (optional) also regenerate inspirations here later
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterDetailsPageFive;
