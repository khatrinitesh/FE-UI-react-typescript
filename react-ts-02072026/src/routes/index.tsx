
import { createFileRoute } from "@tanstack/react-router"
import AccordionSection from "../components/accordionSection/AccordionSection"
import AlertsSection from "../components/alertsSection/AlertsSection"
import AnimateButtonsSection from "../components/animateButtonsSection/AnimateButtonsSection"
import AnimatedSearch from "../components/animatedSearchSection/AnimatedSearch"
import AnimateIconsSection from "../components/animateIconsSection/AnimateIconsSection"
import ArrowsSection from "../components/arrowsSection/ArrowsSection"
import AspectRatioSection from "../components/aspectRatioSection/AspectRatioSection"
import AuroraBackgroundSection from "../components/auroraBackgroundSection/AuroraBackgroundSection"
import AutocompleteSection from "../components/autocompleteSection/AutocompleteSection"
import AvatarImgSection from "../components/avatarImgSection/AvatarImgSection"
import BgBeamsCollsionSection from "../components/bgBeamsCollsionSection/BgBeamsCollsionSection"
// import BgBoxesSection from "../components/bgBoxesSection/BgBoxesSection"
import BannerSection from "../components/bannerSection/BannerSection"
import BentoGridSection from "../components/bentoGridSection/BentoGridSection"
import BgLinesSection from "../components/bgLinesSection/BgLinesSection"
import BigHeaderSection from "../components/bigHeaderSection/BigHeaderSection"
import BlackWhiteImgSection from "../components/blackWhiteImgSection/BlackWhiteImgSection"
import BlockButtonsSection from "../components/blockButtonsSection/BlockButtonsSection"
import BlogLayoutSection from "../components/blogLayoutSection/BlogLayoutSection"
import BlurBgImgSection from "../components/blurBgImgSection/BlurBgImgSection"
import BorderImgSection from "../components/borderImgSection/BorderImgSection"
import BottomBorderNavLinksSection from "../components/bottomBorderNavLinks/BottomBorderNavLinksSection"
import BreadcrumbsSection from "../components/breadcrumbsSection/BreadcrumbsSection"
import BrowserWindowSection from "../components/browserWindowSection/BrowserWindowSection"
import BulletColorSection from "../components/bulletColorSection/BulletColorSection"
import ButtonGrpSection from "../components/buttonGrpSection/ButtonGrpSection"
import ButtonImgSection from "../components/buttonImgSection/ButtonImgSection"
import CalculatorSection from "../components/calculatorSection/CalculatorSection"
import CalendarSection from "../components/calendarSection/CalendarSection"
import CalloutSection from "../components/calloutSection/CalloutSection"

import CanvasRevealEffectSection from "../components/canvasRevealEffectSection/CanvasRevealEffectSection"
import CardHoverEffectSection from "../components/cardHoverEffectSection/CardHoverEffectSection"
import CarRunningSection from "../components/carRunningSection/CarRunningSection"
import MovingTooltip from "../components/MovingTooltip"
import { IMAGES } from "../utils/assets"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Home Page</h1>

            <p className="mt-4 text-lg text-gray-600">
              React TypeScript app with TanStack Router, TanStack Query,
              TailwindCSS, layout, assets, and form validation.
            </p>

            <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>

          <img
            src={IMAGES.hero}
            alt="Hero"
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
        <CardHoverEffectSection/>
        <CarRunningSection/>
        <CanvasRevealEffectSection/>
        <CalloutSection/>
        <CalendarSection/>
        <CalculatorSection/>
        <ButtonImgSection/>
        <ButtonGrpSection/>
        <BulletColorSection/>
        <BrowserWindowSection/>
        <BreadcrumbsSection/>
        <BottomBorderNavLinksSection/>
        <BorderImgSection/>
        <BlurBgImgSection/>
        <BlogLayoutSection/>
        <BlockButtonsSection/>
        <BlackWhiteImgSection/>
        <BigHeaderSection/>
        <BentoGridSection/>
        <BannerSection/>
        <BgLinesSection/>
        {/* <BgBoxesSection/> */}
        <BgBeamsCollsionSection/>
        <AvatarImgSection/>
        <AutocompleteSection/>
        <AuroraBackgroundSection/>
        <AspectRatioSection/>
        <ArrowsSection/>
        <AnimatedSearch/>
        <AnimateButtonsSection/>
        <AnimateIconsSection/>
        <AlertsSection/>
        <AccordionSection/>
         <MovingTooltip
        text="Hover Me"
        tooltip="I move with your mouse"
      />
      </section>
     
    </>
   
  )
}