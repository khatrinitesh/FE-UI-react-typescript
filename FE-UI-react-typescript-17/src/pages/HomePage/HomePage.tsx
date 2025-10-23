import FieldInputLabelActiveFocus from "../../components/FieldInputLabelActiveFocus/FieldInputLabelActiveFocus";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import SideBySideTables from "../../components/SideBySideTables/SideBySideTables";
import TextWrapper from "../../components/TextWrapper/TextWrapper";
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
