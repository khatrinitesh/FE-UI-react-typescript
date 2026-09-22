import { ArrowRight, BarChart3, Bell, Heart, Plus, Search, Settings, Shield, Zap } from "lucide-react";
import { AlertButton } from "./components/AlertButton/AlertButton";
import { AnimatedButton } from "./components/AnimatedButton/AnimatedButton";
import { AnimatedIcon } from "./components/AnimatedIcon/AnimatedIcon";
import { AnimatedSearch } from "./components/AnimatedSearch/AnimatedSearch";
import { Arrows } from "./components/Arrows/Arrows";
import { Autocomplete } from "./components/Autocomplete/Autocomplete";
import { AvatarImage } from "./components/Avatarimages/Avatarimages";
import { Banner } from "./components/Banner/Banner";
import { BentoGrid } from "./components/BentoGrid/BentoGrid";

const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Ahmedabad"];
const items = [
  { id: 1, title: "Analytics", description: "Understand your users and product performance.", icon: <BarChart3 className="size-5" />, className: "md:col-span-2" },
  { id: 2, title: "Fast Search", description: "Find anything instantly.", icon: <Search className="size-5" /> },
  { id: 3, title: "Security", description: "Keep your data secure and private.", icon: <Shield className="size-5" /> },
  { id: 4, title: "Performance", description: "Built for speed and reliability.", icon: <Zap className="size-5" />, className: "md:col-span-2" },
];
function App() {
  return (
    <>
      <BentoGrid items={items} />
      <Banner title="Build better experiences" description="Create beautiful and interactive digital experiences for your users." image="/images/banner.jpg" action={<button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200">Get Started</button>} />
      <AvatarImage src="/images/avatar-1.jpg" size="lg" />

      <Autocomplete options={cities} placeholder="Search city..." onSelect={(value) => console.log(value)} />
      <Arrows />
      <Arrows direction="left" />
      <Arrows direction="up" />
      <Arrows direction="down" />
      <Arrows type="chevron" direction="right" />
      <Arrows type="chevron" direction="left" />
      <AnimatedSearch
        onSearch={(value) => {
          console.log("Search:", value);
        }}
      />
      <div className="flex gap-4">
        <AnimatedButton icon={ArrowRight} animation="slide">
          Get Started
        </AnimatedButton>

        <AnimatedButton icon={Plus} iconPosition="left" animation="lift">
          Create Project
        </AnimatedButton>
      </div>
      <AnimatedIcon icon={Bell} />

      <AnimatedIcon icon={Heart} animation="bounce" />

      <AnimatedIcon icon={Settings} animation="rotate" />

      <AlertButton />
    </>
  );
}

export default App;
