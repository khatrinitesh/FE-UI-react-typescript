import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Leaf, Lightbulb, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { EqualWidthNav } from "../../components/ui/EqualWidthNav";
import { EvervaultCard } from "../../components/ui/EvervaultCard";
import {
  ExpandableCards,
  type ExpandableCardItem,
} from "../../components/ui/ExpandableCards";
import {
  ExpandingGrid,
  type ExpandingGridItem,
} from "../../components/ui/ExpandingGrid";
import FadeButton from "../../components/ui/FadeButton";
import FatNav from "../../components/ui/FatNav";
import FeatureSection from "../../components/ui/FeatureSection";
import FilterDropdown, {
  type FilterOption,
} from "../../components/ui/FilterDropdown";
import FilterElements from "../../components/ui/FilterElements";
import FilterList from "../../components/ui/FilterList";
import FilterTable from "../../components/ui/FilterTable";
import FilterTransition from "../../components/ui/FilterTransition";
import FindHiddenElement from "../../components/ui/FindHiddenElement";
import FormFieldset from "../../components/ui/FormFieldset";

export const Route = createFileRoute("/_main/")({
  component: RouteComponent,
});
// expanding card item
const cards: ExpandableCardItem[] = [
  {
    id: "sustainable-design",
    category: "Design",
    title: "Sustainable Design",
    subtitle: "Designed for a greener future",
    description:
      "Our sustainable design approach combines responsible materials, efficient production methods and thoughtful user experiences.\n\nEvery decision is made to reduce environmental impact while maintaining excellent visual quality and long-term usability.",
    image: "/assets/images/card-1.jpg",
    imageAlt: "Sustainable green building",
    ctaLabel: "Explore design",
  },
  {
    id: "digital-products",
    category: "Technology",
    title: "Digital Products",
    subtitle: "Simple, scalable and intuitive",
    description:
      "We build digital products that simplify complicated workflows and create better customer experiences.\n\nOur technology solutions are responsive, accessible and designed to scale alongside your business.",
    image: "/assets/images/card-2.jpg",
    imageAlt: "Digital product interface",
    ctaLabel: "View products",
  },
  {
    id: "brand-experience",
    category: "Experience",
    title: "Brand Experience",
    subtitle: "Memorable customer interactions",
    description:
      "We connect physical environments with digital technology to create memorable brand experiences.\n\nEvery interaction is designed around the audience, campaign objectives and measurable engagement.",
    image: "/assets/images/card-3.jpg",
    imageAlt: "Interactive brand experience",
    ctaLabel: "Discover more",
  },
];

// expanding grid item
const gridItems: ExpandingGridItem[] = [
  {
    id: "sustainability",
    number: "01",
    category: "Sustainability",
    title: "Building a greener future",
    description:
      "We combine responsible materials, efficient production and thoughtful design to reduce environmental impact.",
    image: "/assets/images/grid-1.jpg",
    imageAlt: "Green sustainable architecture",
    icon: <Leaf size={23} />,
  },
  {
    id: "technology",
    number: "02",
    category: "Technology",
    title: "Technology that creates value",
    description:
      "Our digital solutions simplify complex workflows and create scalable, intuitive experiences for customers.",
    image: "/assets/images/grid-2.jpg",
    imageAlt: "Digital technology interface",
    icon: <Cpu size={23} />,
  },
  {
    id: "innovation",
    number: "03",
    category: "Innovation",
    title: "Ideas transformed into reality",
    description:
      "We explore new technologies and creative approaches to turn ambitious ideas into practical solutions.",
    image: "/assets/images/grid-3.jpg",
    imageAlt: "Creative innovation workspace",
    icon: <Lightbulb size={23} />,
  },
  {
    id: "community",
    number: "04",
    category: "Community",
    title: "Creating meaningful connections",
    description:
      "We design platforms and experiences that bring people together and encourage meaningful participation.",
    image: "/assets/images/grid-4.jpg",
    imageAlt: "Community collaboration",
    icon: <Users size={23} />,
  },
];
const statusOptions: FilterOption[] = [
  { value: "active", label: "Active", count: 24 },
  { value: "pending", label: "Pending", count: 12 },
  { value: "completed", label: "Completed", count: 38 },
  { value: "cancelled", label: "Cancelled", count: 5 },
];

function RouteComponent() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  return (
    <div className="contactPage p-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 font-monsterrat-bold">
          Home Page
        </h1>
        <FindHiddenElement />
        <FilterTransition />
        <FilterTable />
        <FilterList />
        <FilterElements />
        <FilterDropdown
          label="Status"
          options={statusOptions}
          selectedValues={selectedStatuses}
          onChange={setSelectedStatuses}
        />

        <p className="mt-5 text-sm text-slate-600">
          Selected: {selectedStatuses.join(", ") || "No filters"}
        </p>
        <form className="mx-auto max-w-2xl space-y-6 p-6">
          <FormFieldset
            legend="Personal Information"
            description="Enter your basic contact information."
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                First name
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  className="h-12 rounded-lg border border-slate-300 px-4 outline-none transition focus:border-[#009eff] focus:ring-4 focus:ring-[#009eff]/10"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Last name
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  className="h-12 rounded-lg border border-slate-300 px-4 outline-none transition focus:border-[#009eff] focus:ring-4 focus:ring-[#009eff]/10"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="h-12 rounded-lg border border-slate-300 px-4 outline-none transition focus:border-[#009eff] focus:ring-4 focus:ring-[#009eff]/10"
                />
              </label>
            </div>
          </FormFieldset>
          <FormFieldset legend="Preferred contact method">
            <div className="space-y-3">
              {["Email", "Phone", "WhatsApp"].map((method) => (
                <label
                  key={method}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-4 transition hover:border-[#009eff] hover:bg-[#009eff]/5"
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method.toLowerCase()}
                    className="size-4 accent-[#009eff]"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {method}
                  </span>
                </label>
              ))}
            </div>
          </FormFieldset>

          <button
            type="submit"
            className="rounded-lg bg-[#009eff] px-6 py-3 font-medium text-white transition hover:bg-[#007dcc]"
          >
            Save Information
          </button>
        </form>
        <FeatureSection />
        <FatNav />
        <div className="flex flex-wrap gap-4 p-6">
          <FadeButton onClick={() => console.log("Primary clicked")}>
            Primary Button
          </FadeButton>

          <FadeButton variant="secondary">Secondary Button</FadeButton>

          <FadeButton variant="danger">Delete</FadeButton>

          <FadeButton disabled>Disabled Button</FadeButton>
        </div>
        <ExpandingGrid
          items={gridItems}
          defaultActiveId="sustainability"
          onSelect={(item) => {
            toast.info(item.title);
          }}
        />
        <ExpandableCards
          cards={cards}
          onAction={(card) => {
            toast.success(card.title, {
              description: "Action button clicked.",
            });
          }}
        />
        <EvervaultCard
          eyebrow="Secure data"
          value="AES-256 / TLS 1.3"
          title="Your information stays encrypted."
          description="Sensitive data remains protected throughout the complete application workflow."
          onClick={() => {
            console.log("Evervault card clicked");
          }}
        />
        <EqualWidthNav />
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop-sm:grid-cols-3 desktop-md:grid-cols-4 desktop-3xl:grid-cols-5 gap-4">
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
          <div className="boxContent bg-amber-200 p-4">Box 1</div>
        </div>
      </div>
    </div>
  );
}
