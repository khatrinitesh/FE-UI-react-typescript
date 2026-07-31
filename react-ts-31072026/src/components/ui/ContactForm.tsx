import {
  Building2,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  consent: false,
};

const inputClassName = `
  h-12 w-full rounded-xl border border-slate-300
  bg-white px-4 font-montserrat text-14 text-slate-900
  outline-none transition
  placeholder:text-slate-400
  focus:border-primary focus:ring-4 focus:ring-primary/10
`;

const labelClassName = `
  mb-2 block font-montserrat text-12 font-semibold
  uppercase tracking-[0.08em] text-secondary
`;

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));

    setIsSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone && formData.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.subject) {
      nextErrors.subject = "Please select a subject.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = "Your message must contain at least 20 characters.";
    }

    if (!formData.consent) {
      nextErrors.consent = "Please accept the privacy acknowledgement.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Replace this with your API request.
      console.log("Contact form submitted:", formData);

      setIsSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-4 font-montserrat desktop-sm:p-8">
      <section className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] desktop-sm:grid-cols-[0.75fr_1.25fr]">
        {/* Contact information */}
        <aside className="relative overflow-hidden bg-secondary p-6 text-white desktop-sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative">
            <p className="text-12 font-semibold uppercase tracking-[0.18em] text-primary">
              Contact us
            </p>

            <h1 className="mt-3 font-arialnb text-40 font-bold leading-tight">
              Let’s start a conversation
            </h1>

            <p className="mt-4 max-w-md text-14 leading-7 text-white/65">
              Tell us about your requirement, project, or question. Our team
              will respond as soon as possible.
            </p>

            <div className="mt-10 space-y-5">
              <ContactInformation
                icon={Mail}
                label="Email"
                value="hello@example.com"
                href="mailto:hello@example.com"
              />

              <ContactInformation
                icon={Phone}
                label="Phone"
                value="+91 98765 43210"
                href="tel:+919876543210"
              />

              <ContactInformation
                icon={Building2}
                label="Office"
                value="Mumbai, Maharashtra, India"
              />
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="font-arialnb text-20 font-bold">Response time</p>

              <p className="mt-2 text-12 leading-5 text-white/60">
                We normally respond within one business day.
              </p>
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className="p-5 sm:p-7 desktop-sm:p-10">
          <header className="mb-7">
            <p className="text-12 font-semibold uppercase tracking-[0.15em] text-primary">
              Send a message
            </p>

            <h2 className="mt-2 font-arialnb text-32 font-bold text-secondary">
              How can we help?
            </h2>

            <p className="mt-2 text-14 leading-6 text-secondary/70">
              Complete the form below and provide as much detail as possible.
            </p>
          </header>

          {isSubmitted && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
            >
              <CheckCircle2
                size={22}
                className="mt-0.5 shrink-0 text-emerald-600"
                aria-hidden="true"
              />

              <div>
                <p className="text-14 font-semibold text-emerald-800">
                  Message sent successfully
                </p>

                <p className="mt-1 text-12 leading-5 text-emerald-700">
                  Thank you for contacting us. Our team will get back to you
                  shortly.
                </p>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-5 sm:grid-cols-2"
          >
            <FormField id="name" label="Full name" error={errors.name}>
              <div className="relative">
                <User
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/45"
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  className={`${inputClassName} pl-11`}
                />
              </div>
            </FormField>

            <FormField id="email" label="Email address" error={errors.email}>
              <div className="relative">
                <Mail
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/45"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={updateField}
                  placeholder="name@example.com"
                  className={`${inputClassName} pl-11`}
                />
              </div>
            </FormField>

            <FormField id="phone" label="Phone number" error={errors.phone}>
              <div className="relative">
                <Phone
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/45"
                />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(event) => {
                    const formattedValue = event.target.value.replace(
                      /[^\d+\s()-]/g,
                      "",
                    );

                    setFormData((currentData) => ({
                      ...currentData,
                      phone: formattedValue.slice(0, 18),
                    }));

                    setErrors((currentErrors) => ({
                      ...currentErrors,
                      phone: undefined,
                    }));
                  }}
                  placeholder="+91 98765 43210"
                  className={`${inputClassName} pl-11`}
                />
              </div>
            </FormField>

            <FormField id="company" label="Company">
              <div className="relative">
                <Building2
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/45"
                />

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={updateField}
                  placeholder="Company name"
                  className={`${inputClassName} pl-11`}
                />
              </div>
            </FormField>

            <FormField
              id="subject"
              label="Subject"
              error={errors.subject}
              className="sm:col-span-2"
            >
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={updateField}
                className={inputClassName}
              >
                <option value="">Select a subject</option>
                <option value="new-project">New project enquiry</option>
                <option value="quotation">Request a quotation</option>
                <option value="support">Technical support</option>
                <option value="partnership">Partnership opportunity</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </FormField>

            <FormField
              id="message"
              label="Message"
              error={errors.message}
              className="sm:col-span-2"
            >
              <div className="relative">
                <MessageSquareText
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-4 text-secondary/45"
                />

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1000}
                  value={formData.message}
                  onChange={updateField}
                  placeholder="Describe your project or requirement..."
                  className="
                    min-h-36 w-full resize-y rounded-xl
                    border border-slate-300 bg-white
                    py-3 pl-11 pr-4 font-montserrat
                    text-14 leading-6 text-slate-900
                    outline-none transition
                    placeholder:text-slate-400
                    focus:border-primary
                    focus:ring-4 focus:ring-primary/10
                  "
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-12 text-secondary/55">
                  Minimum 20 characters
                </span>

                <span className="text-12 text-secondary/55">
                  {formData.message.length}/1000
                </span>
              </div>
            </FormField>

            <div className="sm:col-span-2">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(event) => {
                    setFormData((currentData) => ({
                      ...currentData,
                      consent: event.target.checked,
                    }));

                    setErrors((currentErrors) => ({
                      ...currentErrors,
                      consent: undefined,
                    }));
                  }}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 accent-primary"
                />

                <span className="text-12 leading-5 text-secondary/70">
                  I agree that the submitted information may be used to respond
                  to my enquiry.
                </span>
              </label>

              {errors.consent && (
                <p className="mt-2 text-12 font-semibold text-red-600">
                  {errors.consent}
                </p>
              )}
            </div>

            <div className="flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-12 text-secondary/55">
                Fields marked as required must be completed.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  flex h-12 items-center justify-center gap-2
                  rounded-xl bg-primary px-7
                  font-arialnb text-16 font-bold text-white
                  shadow-lg shadow-primary/20 transition
                  hover:-translate-y-0.5 hover:bg-sky-600
                  focus:outline-none focus:ring-4
                  focus:ring-primary/20
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <Send size={18} aria-hidden="true" />

                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

function FormField({
  id,
  label,
  error,
  className = "",
  children,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>

      {children}

      {error && (
        <p className="mt-2 text-12 font-semibold text-red-600">{error}</p>
      )}
    </div>
  );
}

type ContactInformationProps = {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
};

function ContactInformation({
  icon: Icon,
  label,
  value,
  href,
}: ContactInformationProps) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon size={20} aria-hidden="true" />
      </span>

      <span>
        <span className="block text-12 text-white/45">{label}</span>

        <span className="mt-1 block text-14 font-semibold text-white">
          {value}
        </span>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-4 rounded-xl transition hover:translate-x-1"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}
