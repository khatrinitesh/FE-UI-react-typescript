import { getImage } from "../../utils/assets";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import FieldInput from "../../components/UI/FieldInput/FieldInput";
import { useState, type ChangeEvent } from "react";
import DatePicker from "../../components/UI/DatePicker/DatePicker";
import { CONSENT_ITEMS2 } from "../../constants/constants";
import CheckboxSection from "./../../components/UI/CheckboxSection/CheckboxSection";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import UploadDropzone from "../../components/UI/UploadDropzone/UploadDropzone";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
}

const EnterDetailsPageSeven = () => {
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    email: "",
  });
  const [date, setDate] = useState<Date | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="enterDetailsSection  w-full h-full inline-grid gap-[20px] ">
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          We're almost there! 🎁 <br />
          Fill out this form to enter the Milka x M. Pokora contest 🎤
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-15 max-w-w-[88%] mx-auto w-full">
        <div className="fillForm grid gap-[10px] bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-5  rounded-[24px] ">
          <div className="formGrp">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Last name
            </label>
            <FieldInput
              name="lastName"
              placeholder="Enter lastName..."
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="formGrp ">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              First name
            </label>
            <FieldInput
              name="firstName"
              placeholder="Enter FirstName..."
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="fieldForm">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Email
            </label>
            <FieldInput
              name="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="formGrp ">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Birth date
            </label>
            <DatePicker
              name="appointmentDate"
              value={date}
              onChange={setDate}
            />
          </div>
        </div>
      </div>
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          Great! Now, upload your receipt to validate your participation 📸
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-15 max-w-w-[88%] mx-auto w-full">
        <div className="fillForm grid gap-[10px] bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-5  rounded-[24px] ">
          <div className="formGrp">
            <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
              Proof of purchase
            </label>
            <UploadDropzone onFilesSelected={setFiles} />

            {files && (
              <ul className="mt-4 text-sm">
                {Array.from(files).map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="formGrp">
            <InfoBanner>
              <p className="leading-relaxed color-gray-2 congenial-medium text-[13px]">
                Make sure your receipt clearly mentions MILKA and is readable.
                The purchase date must be visible.
              </p>
            </InfoBanner>
          </div>
          <div className="formGrp">
            <CheckboxSection
              className="color-purple-3 congenial-medium "
              title=""
              items={CONSENT_ITEMS2}
            ></CheckboxSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterDetailsPageSeven;
