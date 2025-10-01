import BikeComponent from "../../components/BikeComponent/BikeComponent";
import type { IOtherPageProps } from "../../interface";

const HomePage = ({ className }: IOtherPageProps) => {
  return (
    <div className={`${className} homePage spacingContent`}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-gray-600">
          This is a simple homepage using Tailwind CSS.
        </p>
        <BikeComponent />
      </div>
    </div>
  );
};

export default HomePage;
