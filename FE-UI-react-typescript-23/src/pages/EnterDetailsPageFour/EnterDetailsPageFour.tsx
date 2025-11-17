import { useEffect, useState, type ChangeEvent } from "react";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import FieldInput from "../../components/UI/FieldInput/FieldInput";
import { getImage } from "../../utils/assets";
import MomentFormCard from "../../components/MomentFormCard/MomentFormCard";
import FieldDropdown from "../../components/UI/FieldDropdown/FieldDropdown";
import {
  PRONOUN_OPTIONS,
  RELATIONSHIP_OPTIONS,
} from "../../constants/constants";

interface FormData {
  firstName: string;
  pronouns: string;
  relationship: string;
}

const EnterDetailsPageFour = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    pronouns: "",
    relationship: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    <div className="enterDetailsSection  w-full h-full inline-grid gap-[20px] ">
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
        className="w-full"
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          Tell me more about the person you want this song for 🎶
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-15 max-w-w-[88%] mx-auto w-full">
        <div className="fillForm grid gap-[10px] bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-5  rounded-[24px] ">
          <div className="formGrp">
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
          <div className="formGrp">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Their pronouns
            </label>
            <FieldDropdown
              name="pronouns"
              value={formData.pronouns}
              onChange={handleChange}
              options={[...PRONOUN_OPTIONS]}
              placeholder="Select..."
            />
          </div>
          <div className="formGrp">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Your relationship
            </label>
            <FieldDropdown
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              options={[...RELATIONSHIP_OPTIONS]}
              placeholder="Select..."
            />
          </div>
        </div>
      </div>
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
        showHeader={false}
        className="w-full"
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          What special moment do you want to turn into a song? 💜
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-15 max-w-w-[88%] mx-auto w-full">
        <MomentFormCard />
      </div>
    </div>
  );
};

export default EnterDetailsPageFour;
