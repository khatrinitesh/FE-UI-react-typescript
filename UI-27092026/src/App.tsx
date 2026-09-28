import { Outlet } from "@tanstack/react-router";
import BorderImage from "./components/BorderImage/BorderImage";
import BottomBorderNav from "./components/bottomBorderNav/BottomBorderNav";
import BulletList from "./components/bulletList/BulletList";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import ImageButton from "./components/ImageButton/ImageButton";
import Calculator from "./components/Calculator/Calculator";
import Calendar from "./components/Calendar/Calendar";
import Callout from "./components/Callout";
import CanvasRevealEffect from "./components/CanvasRevealEffect";
import CarRunning from "./components/CarRunning";
import { Code, Home, Palette, Settings, Smartphone, User } from "lucide-react";
import CardHoverEffect from "./components/CardHoverEffect";
import BackgroundColorDropdown from "./components/BackgroundColorDropdown";
import BackgroundOnScroll from "./components/ChangeBgOnScroll";
import CharacterCounter from "./components/CharacterCounter";
import ChatMessage from "./components/ChatMessage";
import CheckCheckbox from "./components/CheckCheckbox";
import IsNumeric from "./components/IsNumeric";
import CheckoutForm from "./components/CheckoutForm";
import CircleMenu from "./components/CircleMenu";
import CircleDots from "./components/CircleDots";

const cards = [
  {
    title: "Web Development",
    description: "Build modern and scalable web applications.",
    icon: <Code />,
    href: "/services/web",
  },
  {
    title: "UI/UX Design",
    description: "Create clean and engaging user experiences.",
    icon: <Palette />,
    href: "/services/design",
  },
  {
    title: "Mobile Apps",
    description: "Develop responsive mobile applications.",
    icon: <Smartphone />,
    href: "/services/mobile",
  },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
];

const handleCheckout = (data: {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: "card" | "upi" | "cod";
}) => {
  console.log("Checkout Data:", data);
};

function App() {
  return (
    <>
      <BottomBorderNav items={navItems} />
      <div className="mainLayout">
        <Outlet />
      </div>
    </>
  );
}

export function HomePage() {
  return (
    <>
      <CircleDots className="md:hidden" />
      {/* <CircleMenu
        items={[
          {
            label: "Home",
            icon: <Home size={20} />,
            onClick: () => console.log("Home"),
          },
          { label: "Profile", icon: <User size={20} /> },
          { label: "Settings", icon: <Settings size={20} /> },
        ]}
      />
      <CheckoutForm onSubmit={handleCheckout} className="mx-auto" />
      <IsNumeric />
      <CheckCheckbox label="Remember me" />
      <ChatMessage
        message="Hello! How are you?"
        sender="John"
        time="10:30 AM"
      />
      <CharacterCounter maxLength={100} placeholder="Write your message..." />
      <BackgroundOnScroll>
        <section className="flex min-h-screen items-center justify-center">
          <h1 className="text-4xl font-bold">Scroll Down</h1>
        </section>

        <section className="flex min-h-screen items-center justify-center">
          <h2 className="text-4xl font-bold">Background Changed</h2>
        </section>
      </BackgroundOnScroll>
      <BackgroundColorDropdown />
      <CardHoverEffect items={cards} />
      <CarRunning className="h-32" />
      <CanvasRevealEffect className="h-96 w-full max-w-md">
        <div className="flex h-full flex-col items-center justify-center p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Build Something Amazing
          </h2>
          <p className="mt-3 text-gray-300">
            Interactive canvas reveal effect.
          </p>
          <button className="mt-6 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-200">
            Explore
          </button>
        </div>
      </CanvasRevealEffect>
      <Callout title="Information">
        Your profile has been updated successfully.
      </Callout>
      <Calendar onChange={(date) => console.log(date)} />
      <Calculator className="mx-auto" /> */}
      {/* <ImageButton
      image="https://tetsipmedia.com/cdn/shop/files/1384_DA_The_Guardian_Fox_-_Kids_Mural_Wallpaper_-_Fairy_Dust_Purple.jpg?v=1783426551&width=1066"
      alt="Product"
      href="https://tetsipmedia.com/cdn/shop/files/1384_DA_The_Guardian_Fox_-_Kids_Mural_Wallpaper_-_Fairy_Dust_Purple.jpg?v=1783426551&width=1066"
      target="_blank"
      onClick={() => console.log("Clicked")}
    >
      View Product
    </ImageButton>
    <ButtonGroup items={[
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" }
    ]} />
    <BulletList items={["Item 1", "Item 2", "Item 3"]} />
    <BorderImage
      src="https://tetsipmedia.com/cdn/shop/files/Vraj_Kamal_Pichwai_Wallpaper_Closeup_Mockup_Rose_Blush_Pink.jpg?v=1783757504&width=1066"
      alt="Profile"
      title="My Profile"
      borderColor="primary"
      borderWidth="medium"
    /> */}
    </>
  );
}

export function AboutPage() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>About</h1>
      <p>This is the About page.</p>
    </section>
  );
}

export function ServicesPage() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Services</h1>
      <p>This is the Services page.</p>
    </section>
  );
}

export default App;
