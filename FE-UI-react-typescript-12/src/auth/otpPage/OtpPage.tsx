import { useState } from "react";
import { isOTPValid } from "../../utils/formValidation";
import { toast } from "sonner";
import FieldInputSection from "../../components/fieldInputSection/FieldInputSection";
import ButtonSection from "../../components/buttonSection/ButtonSection";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isOTPValid(otp)) {
      setError("OTP must be a 6-digit number");
      toast.error("Invalid OTP");
    } else {
      setError(null);
      toast.success("OTP Verified");
      // Redirect to home page after OTP verification
      navigate("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Verify OTP</h2>

      <div>
        <FieldInputSection
          placeholder="Enter OTP"
          value={otp}
          maxLength={4}
          onChange={(e) => setOtp(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <ButtonSection type="submit" label="Verify OTP" variant="darkblue" />
    </form>
  );
};

export default OtpPage;
