import {
  ArrowRight,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"

import MotionBox from "../components/common/MotionBox"
import ColorPicker from "../components/ui/ColorPicker"
import ColorfulText from "../components/ui/ColorfulText"
import ContactChip from "../components/ui/ContactChip"
import CopyText from "../components/ui/CopyText"
import CountdownTimer from "../components/ui/CountdownTimer"


import CursorSection from "../components/ui/Cursor"
import CustomCheckbox from "../components/ui/CustomCheckbox"
import CustomRadio from "../components/ui/CustomRadio"
import FileUpload from "../components/ui/FileUpload"
import ImageZoom from "../components/ui/ImageZoom"
import { images } from "../utils/assets"
import { notifySuccess } from "../utils/notify"

const features = [
  {
    title: "Student Portal",
    description:
      "View courses, assignments, attendance, results and important college updates.",
  },
  {
    title: "Teacher Portal",
    description:
      "Manage classes, students, assignments, attendance and academic progress efficiently.",
  },
  {
    title: "College Updates",
    description:
      "Stay informed about events, announcements and important notices.",
  },
]

export default function HomePage() {
  const [primaryColor, setPrimaryColor] = useState("#18181b")
  const [accepted, setAccepted] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-50">
        <div className="mx-auto grid min-h-170 max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <MotionBox>
            <p className="mb-5 text-sm font-medium uppercase tracking-wider text-zinc-500">
              College Management Platform
            </p>

            <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
              Everything your{" "}
              <ColorfulText
                variant="ocean"
                animated
              >
                college needs
              </ColorfulText>{" "}
              in one place.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              A simple platform for students and teachers to
              manage academics, communication and everyday
              college activities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Explore platform
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-50"
              >
                Contact us
              </Link>
            </div>
          </MotionBox>

          <MotionBox delay={0.1}>
            <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-200/50">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200" />
            </div>
          </MotionBox>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
              Built for{" "}
              <ColorfulText variant="sunset">
                college life
              </ColorfulText>
            </h2>

            <p className="mt-4 text-zinc-600">
              Everything students and teachers need without a
              complicated interface.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <MotionBox
                key={feature.title}
                delay={index * 0.06}
                className="rounded-2xl border border-zinc-200 bg-white p-7 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-zinc-950">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {feature.description}
                </p>
              </MotionBox>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Chips */}
      <section className="border-y border-zinc-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <MotionBox className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
              Connect with our{" "}
              <ColorfulText variant="ocean">
                college team
              </ColorfulText>
              .
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Reach our team through email, phone, website or
              campus information.
            </p>
          </MotionBox>

          <MotionBox
            delay={0.08}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ContactChip
              href="mailto:support@college.com"
              icon={<Mail size={16} />}
              variant="default"
            >
              support@college.com
            </ContactChip>

            <ContactChip
              href="tel:+919876543210"
              icon={<Phone size={16} />}
              variant="filled"
            >
              +91 98765 43210
            </ContactChip>

            <ContactChip
              href="https://college.com"
              target="_blank"
              icon={<Globe size={16} />}
              variant="outline"
            >
              college.com
            </ContactChip>

            <ContactChip
              icon={<MapPin size={16} />}
              variant="dark"
              onClick={() => {
                console.log("Campus clicked")
              }}
            >
              Mumbai, India
            </ContactChip>
          </MotionBox>
        </div>
      </section>


      {/* cursor */}
      <section className="py-24">
        <CursorSection
              color={primaryColor}
              size={10}
              hoverSize={44}
              variant="solid"
            />
      </section>

      {/* checkbox */}
      <section className="py-24">
        <CustomCheckbox
        id="accepted"
        label="I accept the terms"
        checked={accepted}
        onChange={(event) =>
          setAccepted(event.target.checked)
        }
      />
      </section>

      {/* file upload */}
      <section className="py-24">
       <FileUpload
          name="collegeDocument"
          accept=".pdf,.doc,.docx"
          multiple
          required
          disabled={false}
          className="w-full"
          style={{ maxWidth: 600 }}
          onFilesChange={() => {}}
        />
      </section>

      {/* create zoom in and out iamges */}
      <section className="py-24">
        <ImageZoom
          src={images.logo1}
          alt="College campus"
          initialZoom={1}
          minZoom={1}
          maxZoom={4}
          step={0.5}
        />
      </section>

      {/* Copy Text */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <MotionBox className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Quick Copy
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
              Copy our{" "}
              <ColorfulText variant="sunset">
                contact details
              </ColorfulText>
              .
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Quickly copy college contact information.
            </p>
          </MotionBox>

          <MotionBox
            delay={0.08}
            className="mt-8 flex flex-wrap gap-3"
          >
            <CopyText
              text="support@college.com"
              successMessage="Email copied"
            >
              Copy email
            </CopyText>

            <CopyText
              text="+91 98765 43210"
              variant="filled"
              successMessage="Phone number copied"
            >
              Copy phone
            </CopyText>

            <CopyText
              text="https://college.com"
              variant="dark"
              successMessage="Website copied"
            >
              Copy website
            </CopyText>
          </MotionBox>
        </div>
      </section>

      {/* radio */}
      <section className="py-24">
        <CustomRadio
        id="student"
        name="role"
        value="student"
        label="Student"
      />
      </section>

      {/* Countdown Timer */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <MotionBox className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Admissions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
              Admission closes{" "}
              <ColorfulText variant="gradient">
                soon
              </ColorfulText>
              .
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Complete your application before the countdown
              reaches zero.
            </p>
          </MotionBox>

          <MotionBox
            delay={0.08}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <CountdownTimer
              duration={3600}
              format="hh:mm:ss"
              variant="dark"
              onComplete={() => {
                notifySuccess(
                  "Admissions countdown completed"
                )
              }}
            />
          </MotionBox>
        </div>
      </section>

      {/* Color Picker */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <MotionBox className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Color Picker
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
              Choose your{" "}
              <ColorfulText variant="gradient">
                interface color
              </ColorfulText>
              .
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Select a color and preview it instantly.
            </p>
          </MotionBox>

          <MotionBox
            delay={0.08}
            className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-6">
              <ColorPicker
                value={primaryColor}
                size="lg"
                aria-label="Choose primary color"
                onChange={(event) =>
                  setPrimaryColor(event.target.value)
                }
              />

              <p className="font-mono text-sm font-medium text-zinc-700">
                {primaryColor}
              </p>

              <div
                className="size-12 rounded-xl border border-zinc-200"
                style={{
                  backgroundColor: primaryColor,
                }}
              />
            </div>

            <div
              className="mt-8 rounded-2xl p-8 text-white transition-colors duration-300"
              style={{
                backgroundColor: primaryColor,
              }}
            >
              <h3 className="text-2xl font-semibold">
                Live color preview
              </h3>

              <p className="mt-2 opacity-80">
                This area updates whenever you select a new
                color.
              </p>
            </div>
          </MotionBox>
        </div>
      </section>
    </>
  )
}