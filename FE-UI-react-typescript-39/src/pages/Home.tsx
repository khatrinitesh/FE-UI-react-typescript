import { useState } from "react";
import Accordion from "../components/Accordion";
import Card3D from "../components/Card3D";
import { avatars, CARD_DATA, skills } from "../constants/constants";
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
import BlurBackground from "../components/blurBackground/blurBackground";
import HeroCard from "../components/blurBackground/HeroCard";
import ImageSelector from "../components/blurBackground/ImageSelector";

const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="homePage">
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
