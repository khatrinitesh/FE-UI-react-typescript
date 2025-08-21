import { useEffect, useState } from "react";
import type { Service } from "../../interface";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PreloaderSection from "../../components/preloaderSection/PreloaderSection";
import Button from "../../components/button/Button";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setService(res.data));
  }, [id]);

  const navigate = useNavigate();

  const handleBackHistory = () => {
    navigate(-1);
  };

  if (!service) return <PreloaderSection />;
  return (
    <div className="serviceDetailPage pageSpacing">
      <div className="container mx-auto">
        <h2>Service Detail</h2>
        <div className="detailBlock grid gap-[20px]">
          <h1 className="font-bold text-[2rem]">{service.title}</h1>
          <p>{service.body}</p>
          <div className="btnBlock">
            <Button onClick={handleBackHistory} label="">
              ← Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
