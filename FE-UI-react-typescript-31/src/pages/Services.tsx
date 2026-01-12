import { useEffect } from "react";
import { useServiceStore } from "../store/serviceStore";
import { Link } from "react-router";

const Services = () => {
  const { services, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <div className="serviceListPage  py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Service List</h2>
        <ul>
          {services.slice(0, 10).map((service) => (
            <li key={service.id}>
              <Link to={`/services/${service.id}`}>{service.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
