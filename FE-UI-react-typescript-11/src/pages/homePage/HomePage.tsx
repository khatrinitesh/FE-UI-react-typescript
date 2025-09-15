import AnimatedButtonComponent from "../../components/animatedButtonComponent/AnimatedButtonComponent";
import AnimateIconComponent from "../../components/animateIconComponent/AnimateIconComponent";
import AspectRatioComponent from "../../components/apectRatioComponent/AspectRatioComponent";
import ArrowsComponent from "../../components/arrowsComponent/ArrowsComponent";
import AuroraComponent from "../../components/auroraComponent/AuroraComponent";
import AutoCompleteComponent from "../../components/autoCompleteComponent/AutoCompleteComponent";
import { suggestions } from "../../components/autoCompleteComponent/components/autoCompleteData";
import AvatarImgComponent from "../../components/avatarImgComponent/avatarImgComponent";
import BreakPointComponent from "../../components/breakPointComponent/BreakPointComponent";
import HeadTitleComponent from "../../components/headTitleComponent/HeadTitleComponent";
import SearchBoxComponent from "../../components/searchboxComponent/SearchBoxComponent";
import { tableSampleData } from "../../components/tableFormatComponent/components/tableData";
import TableFormatComponent from "../../components/tableFormatComponent/TableFormatComponent";
import Timeline from "../../components/timeline/timeline2/components/Timeline";
import TypeWriterComponent from "../../components/typeWriterComponent/TypeWriterComponent";
import UserRatingComponent from "../../components/userRatingComponent/UserRatingComponent";
import VortexComponent from "../../components/vortexComponent/VortexComponent";
import { sections } from "../../components/zigZagLayoutComponent/components/zigZagLayoutData";
import ZigZagLayoutComponent from "../../components/zigZagLayoutComponent/ZigZagLayoutComponent";
import ZoomHoverComponent from "../../components/zoomHoverComponent/ZoomHoverComponent";
import BgBeamsCollisionComponent from "./../../components/bgBeamsCollisionComponent/BgBeamsCollisionComponent";
import BlackWhiteImgComponent from "./../../components/blackWhiteImgComponent/BlackWhiteImgComponent";

const HomePage = () => {
  const handleSelect = (item: { id: number; label: string }) => {
    alert(`You selected: ${item.label}`);
  };
  return (
    <div className="homePage spacingContent">
      <div className="container mx-auto">
        <div className="innerContent">
          <HeadTitleComponent className="">HomePage</HeadTitleComponent>
          <Timeline />
          <TypeWriterComponent />
          <BreakPointComponent />
          <UserRatingComponent />'
          <VortexComponent />
          <ZigZagLayoutComponent sections={sections} />;
          <ZoomHoverComponent />
          <BlackWhiteImgComponent />
          <BgBeamsCollisionComponent />
          <AvatarImgComponent />
          <AutoCompleteComponent
            suggestions={suggestions}
            onSelect={handleSelect}
          />
          <AuroraComponent />
          <AspectRatioComponent />
          <ArrowsComponent />
          <AnimatedButtonComponent />
          <AnimateIconComponent />
          <TableFormatComponent initialData={tableSampleData} />
          <SearchBoxComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
