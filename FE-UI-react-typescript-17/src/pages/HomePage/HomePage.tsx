import FieldInputLabelActiveFocus from "../../components/FieldInputLabelActiveFocus/FieldInputLabelActiveFocus";
import FieldInputTel from "../../components/FieldInputTel/FieldInputTel";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import SideBySideTables from "../../components/SideBySideTables/SideBySideTables";
import SpeedMeter from "../../components/SpeedMeter/SpeedMeter";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import StickyScrollReveal from "../../components/StickyScrollReveal/StickyScrollReveal";
import StickySocialBar from "../../components/StickySocialBar/StickySocialBar";
import StrokeText from "../../components/StrokeText/StrokeText";
import SubnavigationMenu from "../../components/SubnavigationMenu/SubnavigationMenu";
import Tabbed from "../../components/Tabbed/Tabbed";
import Testimonials from "../../components/Testimonials/Testimonials";
import TextHoverEffect from "../../components/TextHoverEffect/TextHoverEffect";
import TextImageEffect from "../../components/TextImageEffect/TextImageEffect";
import TextRevealCard from "../../components/TextRevealCard/TextRevealCard";
import TextRotator from "../../components/TextRotator/TextRotator";
import TextWrapper from "../../components/TextWrapper/TextWrapper";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import TickerMarquee from "../../components/TickerMarquee/TickerMarquee";
import Timeline from "../../components/Timeline/Timeline";
import ToDolist from "../../components/ToDolist/ToDolist";
import ToggleClass from "../../components/ToggleClass/ToggleClass";
import ToggleLikeDislike from "../../components/ToggleLikeDislike/ToggleLikeDislike";
import TogglePwdVisibility from "../../components/TogglePwdVisibility/TogglePwdVisibility";
import ToggleShowHide from "../../components/ToggleShowHide/ToggleShowHide";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import ToggleText from "../../components/ToggleText/ToggleText";
import Tooltips from "../../components/Tooltips/Tooltips";
import TracingBeam from "../../components/TracingBeam/TracingBeam";
import TransitionHover from "../../components/TransitionHover/TransitionHover";
import TransparentImgTxt from "../../components/TransparentImgTxt/TransparentImgTxt";
import TreeView from "../../components/TreeView/TreeView";
import TriggerButtonEnter from "../../components/TriggerButtonEnter/TriggerButtonEnter";
import TruncateStringEllipsis from "../../components/TruncateStringEllipsis/TruncateStringEllipsis";
import TurnOffAutocomplete from "../../components/TurnOffAutocomplete/TurnOffAutocomplete";
import TurnOffSpellcheck from "../../components/TurnOffSpellcheck/TurnOffSpellcheck";
import TypewriterEffect from "../../components/TypewriterEffect/TypewriterEffect";
import TypicalDeviceBreakpoints from "../../components/TypicalDeviceBreakpoints/TypicalDeviceBreakpoints";
import UserRating from "../../components/UserRating/UserRating";
import VerticalBtnGrp from "../../components/VerticalBtnGrp/VerticalBtnGrp";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import VerticalMenu from "../../components/VerticalMenu/VerticalMenu";
import Vortex from "../../components/Vortex/Vortex";
import ZebraStripingTable from "../../components/ZebraStripingTable/ZebraStripingTable";
import ZigZagLayout from "../../components/ZigZagLayout/ZigZagLayout";
import ZoomHover from "../../components/ZoomHover/ZoomHover";

const HomePage = () => {
  return (
    <div className="container">
      <HeadTitle className="">Home Page</HeadTitle>
      <p>Welcome to the home page.</p>
      <SpeedMeter />
      <SplitScreen />
      <StickyScrollReveal />
      <StickySocialBar />
      <StrokeText />
      <SubnavigationMenu />
      <Tabbed />
      <FieldInputTel />
      <Testimonials />
      <h1>
        <TextHoverEffect
          text="Hover Over Me!"
          fontSize="3rem"
          hoverColor="#1e90ff"
        />
      </h1>
      <p>
        <TextHoverEffect
          text="React + TypeScript UI Magic"
          hoverColor="#ff6347"
        />
      </p>
      <TextImageEffect />
      <TextRevealCard />
      <TextRotator />
      <Thumbnail />
      <TickerMarquee />
      <Timeline />
      <ToDolist />
      <ToggleLikeDislike />
      <TogglePwdVisibility />
      <ToggleShowHide />
      <ToggleSwitch />
      <ToggleText />
      <ToggleClass />
      <FieldInputLabelActiveFocus />
      <Tooltips />
      <TracingBeam />
      <TransitionHover />
      <TransparentImgTxt />
      <TreeView />
      <TriggerButtonEnter />
      <TruncateStringEllipsis />
      <TurnOffAutocomplete />
      <TurnOffSpellcheck />
      <TypewriterEffect />
      <TypicalDeviceBreakpoints />
      <UserRating />
      <VerticalBtnGrp />
      <VerticalLine />
      <VerticalMenu />
      <Vortex />
      <TextWrapper />
      <ZebraStripingTable />
      <ZigZagLayout />
      <SideBySideTables />
      <ZoomHover />
    </div>
  );
};

export default HomePage;
