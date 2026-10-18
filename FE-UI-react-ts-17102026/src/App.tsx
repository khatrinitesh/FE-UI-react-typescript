import { useState } from "react";
import "./App.css";
import ClosableList from "./components/ClosableList";
import CollapsedSidebar from "./components/CollapsedSidebar";
import ColorfulText from "./components/ColorfulText";
import ColorPicker from "./components/ColorPicker";
import type { Contact } from "./components/ContactChips";
import ContactChips from "./components/ContactChips";
import type { ContactFormData } from "./components/ContactForm";
import ContactForm from "./components/ContactForm";
import ContainerScrollAnimation from "./components/ContainerScrollAnimation";
import ContentEditableBorder from "./components/ContentEditableBorder";
import CopyToClipboard from "./components/CopyToClipboard";

const initialContacts: Contact[] = [
  { id: "1", name: "Nitesh", email: "nitesh@example.com" },
  { id: "2", name: "Dhanashree", email: "dhanashree@example.com" },
  { id: "3", name: "Amit", email: "amit@example.com" },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const handleContactSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
  };

  return (
    <>
      <CopyToClipboard text="Hello, World!" />
      <ContentEditableBorder
        initialValue="Edit this content"
        onChange={(value) => console.log(value)}
      />{" "}
      <section className="flex min-h-screen items-center justify-center bg-white text-4xl font-bold">
        Scroll Down ↓
      </section>
      <ContainerScrollAnimation title="Modern UI Experience">
        <div className="flex min-h-64 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-center text-3xl font-bold text-white">
          Your Content Here
        </div>
      </ContainerScrollAnimation>
      <section className="flex min-h-screen items-center justify-center bg-gray-100 text-3xl font-semibold">
        Keep Scrolling
      </section>
      <div className="container mx-auto w-full  bg-red-500">
        <ContactForm onSubmit={handleContactSubmit} className="mx-auto" />
        <ContactChips
          contacts={contacts}
          onRemove={(id) =>
            setContacts((previous) =>
              previous.filter((contact) => contact.id !== id),
            )
          }
        />
        ;
        <ColorfulText colors={["#F97316", "#EC4899", "#8B5CF6"]}>
          Beautiful Gradient
        </ColorfulText>
        <ColorPicker
          onChange={(color) => console.log("Selected color:", color)}
        />
        <CollapsedSidebar />
        <ClosableList
          items={[
            { id: "1", label: "React" },
            { id: "2", label: "TypeScript" },
            { id: "3", label: "Tailwind CSS" },
          ]}
          onRemove={(id) => console.log("Removed:", id)}
        />
      </div>
    </>
  );
}

export default App;
