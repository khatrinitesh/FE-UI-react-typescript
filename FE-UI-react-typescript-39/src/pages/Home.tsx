import { useState } from "react";
import Accordion from "../components/Accordion";
import Card3D from "../components/Card3D";
import {
  avatars,
  CARD_DATA,
  CARD_STACK,
  cards,
  skills,
} from "../constants/constants";
import Alert from "../components/Alert";
import Button from "../components/ui/Button";
import AnimatedIcon from "../components/AnimatedIcon";
import UserContainer from "../components/containers/UserContainer";
import AnimatedInput from "../components/animatedInput/AnimatedInput";
import SkillSection from "../components/skillCard/SkillSection";
import LoginForm from "../components/loginForm/LoginForm";
import AnimatedSearch from "../components/animatedSearch/AnimatedSearch";
import ArrowSection from "../components/arrowSection/ArrowSection";
import AspectRatio from "../components/aspectRatio/AspectRatio";
import AutocompleteSection from "../components/autocompleteSection/AutocompleteSection";
import AvatarCard from "../components/avatarCard/AvatarCard";
import BannerSection from "../components/bannerSection/BannerSection";
import BentoGrid from "../components/bentoGrid/BentoGrid";
import ImageCardSection from "../components/imageCardSection/ImageCardSection";
import HeroCard from "../components/blurBackground/HeroCard";
import ImageSelector from "../components/blurBackground/ImageSelector";
import BlurBackground from "../components/blurBackground/BlurBackground";
import BorderAroundImg from "../components/borderAroundImg/BorderAroundImg";
import BorderBottomNavLinks from "../components/borderBottomNavLinks/BorderBottomNavLinks";
import BulletList from "../components/bulletList/BulletList";
import ButtonGroup from "../components/buttonGroup/ButtonGroup";
import ImageButtonCard from "../components/imageButtonCard/ImageButtonCard";
import CalculatorSection from "../components/calculatorSection/CalculatorSection";
import CalendarSection from "../components/calendarSection/CalendarSection";
import CalloutSection from "../components/calloutSection/CalloutSection";
import CanvasReveal from "../components/canvasReveal/CanvasReveal";
import CardHoverEffect from "../components/cardHoverEffect/CardHoverEffect";
import CardSpotlight from "../components/cardSpotLight/CardSpotlight";
import CardStack from "../components/cardStack/CardStack";
import ControlledComponent1 from "../components/exampleAssignment/controlledComponent/ControlledComponent1";
import UnControlledComponent from "../components/exampleAssignment/uncontrolledComponent/UnControlledComponent";
import LoginForm1 from "../components/loginForm/LoginForm1";
import ChangingNavbarStyleBasedOnScroll from "../components/changingNavbarStyleBasedOnScroll/ChangingNavbarStyleBasedOnScroll";
import CharacterCounter from "../components/characterCounter/CharacterCounter";
import ChatSection from "../components/chatMessage/ChatSection";

const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="homePage">
      <ChatSection />
      <CharacterCounter />
      <ChangingNavbarStyleBasedOnScroll />
      <LoginForm1 />
      <UnControlledComponent />
      <ControlledComponent1 />
      <CardStack cards={CARD_STACK} />
      <CardSpotlight
        image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        title="Creative Design"
        description="Move your mouse to see the spotlight effect"
      />
      <CardHoverEffect
        image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        title="Creative Design"
        description="Hover to explore the project details"
      />
      <CanvasReveal
        image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        title="Creative Design"
        description="Hover to reveal project details"
      />
      <CalloutSection type="info" message="Profile updated successfully!" />
      <CalendarSection />
      <CalculatorSection />
      <ImageButtonCard
        image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        title="Nature"
        buttonText="Explore"
      />
      <ButtonGroup />
      <BulletList />
      <BorderBottomNavLinks />
      <BorderAroundImg
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        alt="Sample"
      />
      <BlurBackground />
      <HeroCard />
      <ImageSelector />
      <ImageCardSection />
      <BentoGrid />
      <BannerSection />
      {/* <BgBeamsCollision /> */}
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.id} avatar={avatar} />
        ))}
      </div>
      <AutocompleteSection />
      <AspectRatio />
      <ArrowSection />
      <AnimatedSearch />
      <LoginForm />
      <SkillSection skills={skills} />
      <AnimatedInput label="Enter your name" />
      <UserContainer />
      <Button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center p-4 border rounded-lg"
      >
        <AnimatedIcon>
          {open ? (
            // Minus
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="11" width="14" height="2" rx="1" />
            </svg>
          ) : (
            // Plus
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="11" y="5" width="2" height="14" rx="1" />
              <rect x="5" y="11" width="14" height="2" rx="1" />
            </svg>
          )}
        </AnimatedIcon>
      </Button>
      <Alert
        isOpen={open}
        variant="success"
        title="Payment Successful"
        description="Your transaction has been completed."
        onClose={() => setOpen(false)}
        secondaryAction={{
          label: "Cancel",
          onClick: () => console.log("Cancel clicked"),
        }}
        primaryAction={{
          label: "Continue",
          onClick: () => console.log("Continue clicked"),
        }}
      />
      <Accordion title="What is your refund policy?">
        We offer a 30-day refund policy with no questions asked.
      </Accordion>
      <Accordion title="Do you offer technical support?">
        Yes! Our support team is available 24/7.
      </Accordion>
      {CARD_DATA.map((item) => (
        <Card3D key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
