import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useState, type FormEvent } from "react";
import { validateContactForm } from "../utils/validation";
import { showError, showSuccess } from "../utils/toasts";
import FieldInput from "../components/common/FieldInput";
import FieldTextarea from "../components/common/FieldTextarea/FieldTextarea";
import Button from "../components/common/Button";




interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialValues);

  const [errors, setErrors] = useState<
    Partial<ContactFormValues>
  >({});

  const [loading, setLoading] = useState(false);

  const handleInputChange =
    <K extends keyof ContactFormValues>(
      key: K,
      value: ContactFormValues[K]
    ) => {
      setFormValues((prev) => ({
        ...prev,
        [key]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const validationErrors =
      validateContactForm(formValues);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      showError("Please fix the validation errors.");
      return;
    }

    try {
      setLoading(true);

      // await axios.post(...)

      console.log(formValues);

      showSuccess("Message sent successfully.");

      setFormValues(initialValues);
    } catch {
      showError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto max-w-4xl px-4 py-10"
    >
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>

        <p className="mt-3 text-gray-500">
          We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {/* Contact Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl bg-white p-6 shadow"
        >
          <FieldInput
            label="Name"
            placeholder="Enter your name"
            value={formValues.name}
            maxLength={50}
            error={errors.name}
            leftIcon={<User size={18} />}
            onChange={(e) =>
              handleInputChange(
                "name",
                e.target.value
              )
            }
          />

          <FieldInput
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={formValues.email}
            maxLength={100}
            error={errors.email}
            leftIcon={<Mail size={18} />}
            onChange={(e) =>
              handleInputChange(
                "email",
                e.target.value
              )
            }
          />

          <FieldTextarea
            label="Message"
            placeholder="Write your message..."
            rows={5}
            value={formValues.message}
            maxLength={500}
            showCount
            error={errors.message}
            onChange={(e) =>
              handleInputChange(
                "message",
                e.target.value
              )
            }
          />

          <Button
            type="submit"
            loading={loading}
            rightIcon={<Send size={18} />}
            className="w-full"
          >
            Send Message
          </Button>
        </form>

        {/* Contact Information */}

        <div className="space-y-6 rounded-xl bg-white p-6 shadow">

          <h2 className="text-2xl font-semibold">
            Contact Information
          </h2>

          <div className="flex items-start gap-4">
            <Mail className="mt-1 text-indigo-600" />

            <div>
              <h4 className="font-semibold">
                Email
              </h4>

              <p className="text-gray-500">
                contact@example.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="mt-1 text-indigo-600" />

            <div>
              <h4 className="font-semibold">
                Phone
              </h4>

              <p className="text-gray-500">
                +91 9876543210
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="mt-1 text-indigo-600" />

            <div>
              <h4 className="font-semibold">
                Address
              </h4>

              <p className="text-gray-500">
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}