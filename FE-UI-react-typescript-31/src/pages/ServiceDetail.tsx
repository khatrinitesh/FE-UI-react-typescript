import { useEffect } from "react";
import { useParams } from "react-router";
import { useServiceStore } from "../store/serviceStore";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedService, fetchServiceById } = useServiceStore();

  useEffect(() => {
    if (id) fetchServiceById(id);
  }, [id, fetchServiceById]);

  if (!selectedService) return <p>Loading...</p>;

  return (
    <div className="serviceDetailPage  py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold">{selectedService.title}</h2>
        <p>{selectedService.body}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
