import HeadTitleComponent from "../../components/headTitleComponent/HeadTitleComponent";
import SearchBoxComponent from "../../components/searchboxComponent/SearchBoxComponent";

const HomePage = () => {
  return (
    <div className="homePage spacingContent">
      <div className="container mx-auto">
        <div className="innerContent">
          <HeadTitleComponent className="">HomePage</HeadTitleComponent>
          <SearchBoxComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
