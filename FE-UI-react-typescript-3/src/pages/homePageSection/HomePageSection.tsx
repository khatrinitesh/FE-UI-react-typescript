import Card3D from "../../components/card3D/Card3D";
import Pin3d from "../../components/pin3D/Pin3d";

const HomePageSection = () => {
  return (
    <div className="innerContent">
      <div className="container mx-auto">
        Home
        <br />
        <Card3D />
        <Pin3d />
      </div>
    </div>
  );
};

export default HomePageSection;
