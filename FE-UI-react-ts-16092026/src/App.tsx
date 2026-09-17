import AccordionSection from "./components/Accordion/AccordionSection";
import { Alerts } from "./components/Alerts/Alerts";
import { AnimateIcons } from "./components/AnimateIcons/AnimateIcons";
import { Arrows } from "./components/Arrows/Arrows";
import { Autocomplete } from "./components/Autocomplete/Autocomplete";
import { AvatarImages } from "./components/AvatarImages/AvatarImages";
import { BentoGrid } from "./components/BentoGrid/BentoGrid";
import { BlockButtons } from "./components/BlockButtons/BlockButtons";
import { BlurBackgroundImage } from "./components/BlurBackgroundImage/BlurBackgroundImage";
import { BorderAroundImage } from "./components/BorderAroundImage/BorderAroundImage";
import { BorderFrame } from "./components/BorderFrame/BorderFrame";
import { BottomBorderNav } from "./components/BottomBorderNav/BottomBorderNav";
import { BulletList } from "./components/BulletList/BulletList";
import ThreeDCardSection from "./components/ThreeDCard/ThreeDCardSection";

const autocompleteData = [
  {
    id: 1,
    label: "React",
  },
  {
    id: 2,
    label: "TypeScript",
  },
  {
    id: 3,
    label: "JavaScript",
  },
  {
    id: 4,
    label: "Node.js",
  },
  {
    id: 5,
    label: "Express.js",
  },
  {
    id: 6,
    label: "Tailwind CSS",
  },
  {
    id: 7,
    label: "Next.js",
  },
  {
    id: 8,
    label: "PostgreSQL",
  },
];

const avatarData = [
  {
    id: 1,
    name: "Alex Morgan",
    image: "https://i.pravatar.cc/150?img=1",
    status: "online" as const,
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://i.pravatar.cc/150?img=2",
    status: "offline" as const,
  },
  {
    id: 3,
    name: "Sarah Wilson",
    image: "https://i.pravatar.cc/150?img=3",
    status: "online" as const,
  },
  {
    id: 4,
    name: "David Lee",
    image: "https://i.pravatar.cc/150?img=4",
    status: "online" as const,
  },
];

const bentoGridData = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Building scalable applications from frontend interfaces to backend APIs and databases.",
    image: "/images/bento-1.jpg",
    size: "large" as const,
  },
  {
    id: 2,
    title: "AI Systems",
    description: "Creating AI-powered tools, automated workflows and intelligent digital experiences.",
    image: "/images/bento-2.jpg",
    size: "wide" as const,
  },
  {
    id: 3,
    title: "Cloud",
    description: "Deploying and managing applications using modern cloud infrastructure.",
    image: "/images/bento-3.jpg",
    size: "small" as const,
  },
  {
    id: 4,
    title: "Product Design",
    description: "Designing simple and functional interfaces for digital products.",
    image: "/images/bento-4.jpg",
    size: "tall" as const,
  },
  {
    id: 5,
    title: "Performance",
    description: "Improving speed, responsiveness and overall application performance.",
    image: "/images/bento-5.jpg",
    size: "small" as const,
  },
];

function App() {
  return (
    <>
      <div className="appBlock">
        <div className="container">
          <div className="grid gap-5">
            <BulletList />
            <BottomBorderNav />
            <BorderFrame />
            <BorderAroundImage />
            <BlurBackgroundImage />
            <BlockButtons />
            <BentoGrid data={bentoGridData} />
            <AvatarImages data={avatarData} />
            <Autocomplete data={autocompleteData} placeholder="Search technology..." />
            {/* <AuroraBackground /> */}
            <Arrows />
            <AnimateIcons />
            <Alerts />
            <AccordionSection />
            <ThreeDCardSection />
            <p className="text-font14">14px equivalent</p>
            <p className="text-font16">16px equivalent</p>
            <h2 className="text-font32">32px equivalent</h2>
            <h1 className="text-font64">64px equivalent</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
