import { getImage } from "../utils/assets";

const Home = () => {
  return (
    <div className="homePage py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Home Page</h2>
        <img src={getImage("home.png")} alt="" />
      </div>
    </div>
  );
};

export default Home;
