import AddEventListenerDomDocuments from "../../components/domDocuments/addEventListenerDomDocuments/AddEventListenerDomDocuments";
import HeadTitle from "../../components/headTitle/HeadTitle";

const HomePage = () => {
  return (
    <div className="homePage spacingContent">
      <div className="container mx-auto">
        <div className="innerContent">
          <HeadTitle className="">Home page</HeadTitle>
          <AddEventListenerDomDocuments />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
