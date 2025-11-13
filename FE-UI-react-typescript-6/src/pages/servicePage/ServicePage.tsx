import { useEffect } from "react";
import { useServiceStore } from "../../store/serviceStore";

const ServicePage = () => {
  const { services, loading, error, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) return <p>Loading services...</p>;
  if (error) return <p>Error: {error}</p>;
  if (services.length === 0) return <p>No services available.</p>;
  return (
    <div className="servicePage pageSpacing">
      <div className="container mx-auto">
        ServicePage
        <ul>
          {services.map((service) => (
            <li key={service.id}>{service.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicePage;
