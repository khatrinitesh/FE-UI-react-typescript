import { useEffect } from "react";
import { useServiceStore } from "../../store/serviceStore";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const { services, fetchServices, loading } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="servicePage pageSpacing">
      <div className="container mx-auto">
        ServicePage
        <ul>
          {services.map((item) => (
            <li key={item.id}>
              <Link to={`/service/${item.id}`}>
                <h3 className="font-bold text-[1.5rem]">{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicePage;
