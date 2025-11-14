import { useEffect, useState, type ChangeEvent } from "react";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import FieldInput from "../../components/UI/FieldInput/FieldInput";
import { getImage } from "../../utils/assets";
import { CircleAlert } from "lucide-react";

interface FormData {
  firstName: string;
  email: string;
}

const EnterDetailsPageThree = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
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
    <div className="enterDetailsSection w-full h-full ">
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          To begin, give me your first name and email address 😉 I'll send you a
          verification code to this address.
        </span>
      </IntroMessage>
      <div className="ms-10">
        <div className="fillForm bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-6 md:p-8 rounded-[24px] ">
          {/* First name */}
          <div className="mb-6">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Your first name
            </label>
            <FieldInput
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Email address
            </label>
            <FieldInput
              name="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <IntroMessage
        name={formData.firstName}
        avatarSrc={getImage("avatar-profile.avif")}
        showHeader={false}
      >
        <span className="flex items-start  gap-[10px] text-[0.938rem] congenial-regular text-white">
          <CircleAlert /> I'll send you a verification code to this email
          address.
        </span>
      </IntroMessage>
    </div>
  );
};

export default EnterDetailsPageThree;
