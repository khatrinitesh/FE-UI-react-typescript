import CheckoutForm from "./components/ui/CheckoutForm";
import CircleDots from "./components/ui/CircleDots";
import CircleMenu from "./components/ui/CircleMenu";
import ClearInput from "./components/ui/ClearInput";
import ClosableList from "./components/ui/ClosableList";
import CollapsibleList from "./components/ui/CollapsibleList";
import ColorfulText from "./components/ui/ColorfulText";
import ColorPicker from "./components/ui/ColorPicker";
import ColumnCards from "./components/ui/ColumnCards";
import ComingSoonPage from "./components/ui/ComingSoonPage";
import ComparisonTable from "./components/ui/ComparisonTable";
import ContactChips from "./components/ui/ContactChips";
import ContactForm from "./components/ui/ContactForm";
import ContainerCover from "./components/ui/ContainerCover";
import ContainerScrollAnimation from "./components/ui/ContainerScrollAnimation";
import ContentEditableBorder from "./components/ui/ContentEditableBorder";
import CopyToClipboard from "./components/ui/CopyToClipboard";
import CountdownTimer from "./components/ui/CountdownTimer";
import CouponCard from "./components/ui/CouponCard";
import CurtainMenu from "./components/ui/CurtainMenu";
import { IconDropdown } from "./components/ui/IconDropdown";
import ResponsiveSection from "./components/ui/ResponsiveSection";
import SalesReport from "./components/ui/SalesReport";
import TypographyExample from "./components/ui/TypographyExample";

function App() {
  // const [marketing, setMarketing] = useState(false);
  return (
    <>
      <div className="outerContent">
        <div className="space-y-5 p-8">
          {/* <Checkbox
            checked={marketing}
            onChange={setMarketing}
            label="Receive promotional emails"
          /> */}
        </div>
        <CurtainMenu />
        <CouponCard
          code="SAVE20"
          discount="20%"
          description="Get 20% off on all premium subscriptions."
          expiry="31 Dec 2026"
          onApply={() => console.log("Coupon Applied")}
        />
        <CountdownTimer
          targetDate="2026-12-31T23:59:59+05:30"
          title="New Year launch"
          onComplete={() => {
            console.log("Countdown completed");
          }}
        />
        <CopyToClipboard text="https://example.com/product/brand-project" />
        <ContentEditableBorder />
        <ContainerScrollAnimation />
        <ContainerCover
          imageUrl="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
          eyebrow="Welcome to Bosch"
          title="Build better experiences for your customers."
          description="A responsive cover container using React TypeScript, Tailwind CSS, image overlays, and fluid typography."
          primaryButtonLabel="Explore products"
          secondaryButtonLabel="Watch overview"
          align="left"
          height="large"
        />
        <ContactForm />
        <ContactChips />
        <ComparisonTable />
        <SalesReport />
        <ComingSoonPage />
        <ColumnCards />
        <ColorfulText />
        <ColorPicker />
        <CollapsibleList />
        {/* <CollapsedSidebar /> */}
        <ClosableList />
        <IconDropdown />
        <ClearInput />
        <CircleDots />
        <CircleMenu />
        <CheckoutForm />
        <TypographyExample />
        <ResponsiveSection />
      </div>
    </>
  );
}

export default App;
