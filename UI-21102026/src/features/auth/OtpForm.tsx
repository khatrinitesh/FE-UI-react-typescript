import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { ROUTES } from "../../constants/routes";

export const OtpForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      otp: "",
    },

    onSubmit: async ({ value }) => {
      if (value.otp !== "123456") {
        toast.error("Invalid OTP");
        return;
      }

      toast.success("OTP verified");

      navigate({
        to: ROUTES.AUTH.LOGIN,
      });
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
      className="space-y-5"
    >
      <form.Field
        name="otp"
        validators={{
          onChange: ({ value }) => {
            if (!value) {
              return "OTP is required";
            }

            if (!/^\d{6}$/.test(value)) {
              return "OTP must contain 6 digits";
            }

            return undefined;
          },
        }}
      >
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-medium">
              OTP
            </label>

            <input
              inputMode="numeric"
              maxLength={6}
              value={field.state.value}
              onChange={(event) =>
                field.handleChange(
                  event.target.value.replace(/\D/g, "")
                )
              }
              className="w-full rounded-xl border px-4 py-3 text-center text-2xl tracking-[0.5em]"
              placeholder="000000"
            />

            {field.state.meta.errors[0] && (
              <p className="mt-1 text-sm text-red-500">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <button
        type="submit"
        className="w-full rounded-xl bg-black px-5 py-3 text-white"
      >
        Verify OTP
      </button>
    </form>
  );
};