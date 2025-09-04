import HeadTitle from "../../components/headTitle/HeadTitle";
import FieldInput from "./../../components/fieldInput/FieldInput";

const AboutPage = () => {
  return (
    <div className="aboutPage spacingContent">
      <div className="container mx-auto">
        <div className="innerContent">
          <HeadTitle className="">About page</HeadTitle>
          <FieldInput
            name="search"
            placeholder="Search here"
            autoComplete="off"
            value={""}
            onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
