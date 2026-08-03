import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Rocket, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import CapsLockDetector from "../components/ui/CapsLockDetector";
import CustomDatePicker from "../components/ui/CustomDatePicker";
import CustomRadio from "../components/ui/CustomRadio";
import CustomSelect from "../components/ui/CustomSelect";
import Cutout from "../components/ui/Cutout";
import DataTableSection from "../components/ui/DataTableSection/DataTableSection";
import DeleteModalSection from "../components/ui/DeleteModalSection/DeleteModalSection";
import BrowserDetector from "../components/ui/DetectBrowser";
import DeviceDetector from "../components/ui/DeviceLook";
import DirectionAwareHover from "../components/ui/DirectionAwareHover";
import DisableRightClick from "../components/ui/DisableRightClick";
import DisplayElementOnHover from "../components/ui/DisplayElementOnHover";
import Divider from "../components/ui/Divider";
import SimpleDownloadButton from "../components/ui/DownloadButton";
import DraggableElement from "../components/ui/DraggableElement";
import Dropmorphism from "../components/ui/Dropmorphism";
import EqualHeightCards from "../components/ui/EqualHeightCards";
import FileUpload from "../components/ui/FileUpload";

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Fast Development",
    description: "Build scalable React applications using Vite and TypeScript.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Lightning Fast",
    description:
      "Powered by Vite for an extremely fast development experience.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Production Ready",
    description:
      "Includes routing, API integration, validation, animations and more.",
  },
];

export const Route = createFileRoute("/")({
  component: HomePage,
});

const options = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "Svelte",
    value: "svelte",
  },
];

function HomePage() {
  const [gender, setGender] = useState<string>("male");
  const [framework, setFramework] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  return (
    <section className="container mx-auto px-4 py-16">
      <EqualHeightCards />
      <Dropmorphism />
      <DraggableElement />
      <SimpleDownloadButton />
      <Divider />
      <DisplayElementOnHover />
      <DisableRightClick />
      <DirectionAwareHover />
      <DeviceDetector />
      <BrowserDetector />
      <CapsLockDetector />
      <DeleteModalSection />
      <CustomDatePicker label="Date of Birth" value={date} onChange={setDate} />
      <DataTableSection />
      <Cutout />
      <div className="flex ...">
        <div className="inline-1/2 bg-primary ...">inline-1/2</div>
        <div className="inline-1/2 bg-secondary ...">inline-1/2</div>
      </div>
      <div className="flex ...">
        <div className="inline-2/5 bg-primary ...">inline-2/5</div>
        <div className="inline-3/5  bg-secondary ...">inline-3/5</div>
      </div>
      <div className="flex ...">
        <div className="inline-1/3 bg-primary ...">inline-1/3</div>
        <div className="inline-2/3 bg-secondary ...">inline-2/3</div>
      </div>
      <h2 className="text-2xl font-bold">Select Gender</h2>
      <div className="mx-auto mt-20 max-w-md">
        <CustomSelect
          label="Framework"
          placeholder="Choose Framework"
          options={options}
          value={framework}
          onChange={setFramework}
        />

        <div className="mt-6">Selected: {framework}</div>
      </div>
      <div className="h-96 overflow-y-auto">
        Sit esse culpa anim occaecat anim duis laboris non ex excepteur dolor
        amet magna sint. Consequat anim aliquip excepteur dolor nisi pariatur
        excepteur excepteur magna id proident. Excepteur laborum officia do
        adipisicing commodo magna amet dolore voluptate commodo. Reprehenderit
        officia mollit eiusmod sunt labore commodo dolor veniam ipsum ad Lorem
        commodo. Non et culpa velit qui laborum nulla Lorem cillum eu
        reprehenderit sint duis. Excepteur aliquip velit est est do elit
        adipisicing aute eu. Nisi ad mollit reprehenderit velit ad qui amet
        tempor in laborum duis aliqua in. Cupidatat laboris aute minim culpa
        cupidatat sint. Nostrud reprehenderit amet incididunt mollit. Labore
        aute amet sunt Lorem veniam laboris id reprehenderit nisi officia.
        Consequat deserunt ad dolor eiusmod in commodo in eiusmod nostrud
        officia dolor ex velit. Excepteur nostrud laborum esse officia. Esse
        consectetur tempor non eu do in laborum adipisicing in. Anim labore id
        excepteur exercitation officia velit ad. Excepteur sint minim esse
        mollit consectetur nostrud nulla in id voluptate magna enim sit anim.
        Nisi labore ullamco commodo labore do elit mollit nulla dolore elit
        sunt. Laborum ea sit exercitation id sunt officia consequat et dolore
        aute irure id. Id ad aliquip proident excepteur proident incididunt
        labore cupidatat ad consequat laborum non amet proident. Exercitation
        cupidatat mollit pariatur aute voluptate labore anim et in eiusmod quis.
        Amet ex ea ad amet ipsum ut laborum deserunt voluptate nostrud fugiat.
        In sint magna anim in tempor proident eu fugiat tempor commodo culpa
        elit amet laborum. Dolore magna enim nulla Lorem. Cupidatat excepteur
        voluptate nostrud culpa velit consequat pariatur eu. Consequat qui ad
        pariatur ea proident. Qui adipisicing velit consequat ex consequat.
        Labore deserunt officia eiusmod nisi ipsum duis aute officia minim ea
        dolore officia minim Lorem. Aute mollit officia ut Lorem dolor enim
        culpa. Est enim qui aliqua culpa esse magna excepteur qui sint.
        Excepteur ullamco nulla mollit in velit esse. Reprehenderit sit
        reprehenderit in consectetur adipisicing exercitation non minim
        consequat consequat. Velit dolor incididunt dolor fugiat dolore duis
        officia. Fugiat consectetur irure mollit fugiat. Magna minim deserunt
        aute fugiat nisi occaecat mollit fugiat do mollit. Laboris cillum
        eiusmod esse aute Lorem anim incididunt amet nisi elit et aliquip. Sit
        aliquip sint dolore pariatur eu sunt cillum anim tempor eu excepteur
        commodo. Pariatur anim irure quis velit in nostrud nostrud eiusmod nulla
        ullamco cillum. Cillum minim quis deserunt aliquip cillum excepteur
        eiusmod cillum reprehenderit pariatur. Occaecat fugiat proident fugiat
        eiusmod sunt sit nulla velit. Anim reprehenderit nostrud magna velit ex
        laborum et ipsum excepteur. Dolore magna ad esse commodo mollit aliquip
        ut dolore. Magna amet eu non ex dolor officia voluptate officia nostrud
        laborum. Sit mollit tempor sunt velit. Ipsum dolor quis eu esse id anim
        cillum Lorem. Commodo pariatur in aute non duis dolor minim tempor aute
        enim adipisicing veniam nulla. Magna tempor cupidatat aute non
        consectetur ipsum velit non nisi deserunt elit cupidatat. Et consectetur
        enim proident reprehenderit adipisicing duis ad ex occaecat cupidatat
        aliquip. Laborum ut veniam amet sunt ut nostrud enim. Sit qui proident
        et nostrud adipisicing sit commodo esse ipsum minim eu consequat
        incididunt. Occaecat eiusmod consequat et et minim eiusmod. Dolore
        deserunt commodo enim Lorem ipsum aliquip. Culpa mollit amet
        exercitation eiusmod mollit laborum nostrud consequat deserunt ea
        aliquip. In mollit ipsum ut reprehenderit incididunt est irure.
      </div>
      <CustomRadio
        id="male"
        name="gender"
        value="male"
        label="Male"
        checked={gender === "male"}
        onChange={setGender}
      />

      <CustomRadio
        id="female"
        name="gender"
        value="female"
        label="Female"
        checked={gender === "female"}
        onChange={setGender}
      />

      <CustomRadio
        id="other"
        name="gender"
        value="other"
        label="Other"
        checked={gender === "other"}
        onChange={setGender}
      />

      <p className="mt-4 text-gray-600">
        Selected: <strong>{gender}</strong>
      </p>
      <FileUpload
        accept="image/*,.pdf"
        maxSize={10}
        onChange={(file) => {
          console.log(file);
        }}
      />
      <h2 className="text-32 font-monsterrat-semibold">Head Title</h2>
      <div className="grid grid-cols-1 tablet-portrait:grid-cols-2 desktop-sm:grid-cols-4 desktop-md:grid-cols-5 desktop-3xl:grid-cols-6 gap-6">
        <div className="boxContent p-2 bg-blue-100">1</div>
        <div className="boxContent p-2 bg-blue-100">2</div>
        <div className="boxContent p-2 bg-blue-100">3</div>
        <div className="boxContent p-2 bg-blue-100">4</div>
        <div className="boxContent p-2 bg-blue-100">5</div>
        <div className="boxContent p-2 bg-blue-100">6</div>
        <div className="boxContent p-2 bg-blue-100">7</div>
        <div className="boxContent p-2 bg-blue-100">8</div>
        <div className="boxContent p-2 bg-blue-100">9</div>
        <div className="boxContent p-2 bg-blue-100">10</div>
      </div>
      {/* Hero */}
      <div className="bg-linear-to-r from-indigo-600 via-violet-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
              <BadgeCheck size={18} />
              React + TypeScript Starter
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-7xl">
              Build Modern Web Apps
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-100">
              A production-ready starter built with React, TypeScript, TanStack
              Router, TanStack Query, Tailwind CSS, Axios, Framer Motion, and
              Zod.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-gray-100"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-white px-6 py-3 transition hover:bg-white hover:text-indigo-700"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Everything You Need
            </h2>

            <p className="mt-4 text-gray-600">
              Start building without worrying about the project setup.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-xl"
              >
                <div className="mb-5">{feature.icon}</div>

                <h3 className="mb-3 text-2xl font-semibold">{feature.title}</h3>

                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800">Ready to Build?</h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            This starter project includes routing, state management, API
            integration, form validation, animations, and responsive UI.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
          >
            Contact Now
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
