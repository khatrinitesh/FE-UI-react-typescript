import { useNavigate, useParams } from "react-router-dom";
import { useServiceStore } from "../../logicStore/serviceStore/useServiceStore";
import { useEffect } from "react";
import HeadTitle from "../../components/headTitle/HeadTitle";
import Button from "../../components/button/Button";
import SubHeadTitle from "../../components/subHeadTitle/SubHeadTitle";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedService, loadServiceById, loading } = useServiceStore();

  useEffect(() => {
    if (id) {
      loadServiceById(id);
    }
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  if (loading || !selectedService) return <p>Loading...</p>;
  return (
    <div className="serviceDetail spacingContent">
      <div className="container mx-auto">
        <div className="innerContent grid gap-[10px]">
          <HeadTitle className="">Service List</HeadTitle>
          <div className="btnBlock">
            <Button label="Go Back" onClick={handleClick} />
          </div>
          <SubHeadTitle className="">{selectedService.title}</SubHeadTitle>
          <p className="text-base">{selectedService.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
