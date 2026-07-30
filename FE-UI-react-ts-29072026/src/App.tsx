import {
  Box,
  Camera,
  Code2,
  Component,
  Layers3,
  Palette,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import "./App.css";
import AccordionDemo from "./components/AccordionDemo";
import AlertButtonsDemo from "./components/AlertButtonsDemo";
import AnimatedButtonsDemo from "./components/AnimatedButtonsDemo";
import AnimatedSearchDemo from "./components/AnimatedSearch/AnimatedSearchDemo";
import ArrowsDemo from "./components/ArrowsDemo";
import { AuroraBackground } from "./components/AuroraBackgroundDemo/AuroraBackground";
import {
  Autocomplete,
  type AutocompleteOption,
} from "./components/Autocomplete";
import { Avatar } from "./components/AvatarImagesDemo";
import BackgroundBeamsDemo from "./components/BackgroundBeamsDemo/BackgroundBeamsDemo";
import BentoGridDemo from "./components/BentoGridDemo/BentoGridDemo";
import BlockButtonsDemo from "./components/BlockButtons/BlockButtons";
import BlogLayoutDemo from "./components/BlogLayoutDemo";
import { BlurBackgroundImage } from "./components/BlurBackgroundImage";
import { FoldedCornerCard } from "./components/FoldedCornerCard";
import { ThreeDFlipCard } from "./components/ThreeDFlipCard";

const autocompleteOptions: AutocompleteOption[] = [
  {
    id: 1,
    label: "3D Card Effect",
    description: "Interactive perspective card component",
    category: "Cards",
    icon: Box,
  },
  {
    id: 2,
    label: "Animated Search",
    description: "Expandable search with suggestions",
    category: "Forms",
    icon: SearchIcon,
  },
  {
    id: 3,
    label: "Accordion UI",
    description: "Collapsible content component",
    category: "Layout",
    icon: Layers3,
  },
  {
    id: 4,
    label: "Alert Buttons",
    description: "Success, warning and error notifications",
    category: "Feedback",
    icon: Sparkles,
  },
  {
    id: 5,
    label: "Aurora Background",
    description: "Animated gradient page background",
    category: "Effects",
    icon: Palette,
  },
  {
    id: 6,
    label: "React TypeScript",
    description: "Frontend development collection",
    category: "Technology",
    icon: Code2,
  },
  {
    id: 7,
    label: "UI Components",
    description: "Reusable interface component library",
    category: "Library",
    icon: Component,
  },
  {
    id: 8,
    label: "Nitesh Kumar",
    description: "Frontend developer",
    category: "People",
    icon: UserRound,
  },
];

function SearchIcon() {
  return <Sparkles className="size-5" />;
}

function App() {
  const [selectedOption, setSelectedOption] =
    useState<AutocompleteOption | null>(null);
  return (
    <>
      <div className="innerContent container px-4 mx-auto flex gap-5 flex-col">
        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Blog layout
          </h2>
          <BlurBackgroundImage
            image="/assets/images/travel-background.jpg"
            title="Discover extraordinary destinations"
            description="Explore unforgettable places, unique experiences and inspiring journeys through a beautifully layered visual layout."
            eyebrow="Travel collection"
            icon={Camera}
            blur="lg"
            overlay="medium"
            onAction={() => console.log("Explore clicked")}
          >
            <div className="flex flex-wrap gap-3"></div>
          </BlurBackgroundImage>
        </div>
        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Blog layout
          </h2>
          <BlogLayoutDemo />
        </div>
        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Block Buttons
          </h2>
          <BlockButtonsDemo />
        </div>
        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Bento Grid
          </h2>
          <BentoGridDemo />
        </div>
        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Avatar Images
          </h2>
          <BackgroundBeamsDemo />
        </div>

        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Avatar Images
          </h2>
          <Avatar
            src="/assets/images/avatar.jpg"
            alt="Nitesh Kumar"
            name="Nitesh Kumar"
            size="xl"
            verified
          />
        </div>

        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Autocomplete
          </h2>
          <Autocomplete
            label="Choose a UI component"
            placeholder="Start typing a component name..."
            options={autocompleteOptions}
            onChange={(option) => {
              setSelectedOption(option);
              console.log("Selected option:", option);
            }}
          />
        </div>
        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Aurora Background
          </h2>
          <AuroraBackground />
        </div>
        <div className="boxComponent flex flex-col gap-2">
          <h2 className="font-ogilvy-regular font-bold text-primary bg-secondary inline p-5 rounded-xl overflow-hidden ">
            Animated Search
          </h2>
          <ArrowsDemo />
        </div>
        <div className="boxComponent">
          <h2 className="font-ogilvy-regular font-bold text-primary ">
            Animated Search
          </h2>
          <AnimatedSearchDemo />
        </div>
        <div className="boxComponent">
          <h2 className="font-ogilvy-regular font-bold text-primary ">
            Animated Buttons
          </h2>
          <AnimatedButtonsDemo />
        </div>
        <div className="boxComponent">
          <h2 className="font-ogilvy-regular font-bold text-primary ">
            Alerts
          </h2>
          <AlertButtonsDemo />
        </div>
        <div className="boxComponent">
          <h2 className="font-ogilvy-regular font-bold text-primary ">
            Accordion
          </h2>
          <AccordionDemo />
        </div>
        <div className="boxComponent">
          <h2 className="font-ogilvy-regular font-bold text-primary ">
            3D flip card
          </h2>
          <ThreeDFlipCard
            title="Creative Platform"
            description="A modern 3D card that rotates to reveal additional information."
            backTitle="Build Something Unique"
            backDescription="Use this component for services, portfolios, products, team members or project cards."
            icon={Box}
            onAction={() => console.log("View details clicked")}
          >
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </ThreeDFlipCard>
        </div>
        <div className="boxComponent">
          <h2 className="font-ogilvy-regular font-bold text-primary ">
            Folded Corner
          </h2>
          <FoldedCornerCard
            title="Creative Design System"
            description="A modern folded-corner card suitable for projects, services, documents and portfolio sections."
            label="New"
            icon={Palette}
            onClick={() => console.log("Card action clicked")}
          >
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </FoldedCornerCard>
        </div>
      </div>
    </>
  );
}

export default App;
