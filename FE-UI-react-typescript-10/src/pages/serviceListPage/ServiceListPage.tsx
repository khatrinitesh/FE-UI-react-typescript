import { useEffect } from "react";
import { useServiceStore } from "../../logicStore/serviceStore/useServiceStore";
import { Link } from "react-router-dom";
import HeadTitle from "../../components/headTitle/HeadTitle";

const ServiceListPage = () => {
  const { services, loadServices, loading } = useServiceStore();

  useEffect(() => {
    loadServices();
  }, []);
  return (
    <div className="serviceList spacingContent">
      <div className="container mx-auto">
        <div className="innerContent grid gap-[10px]">
          <HeadTitle className="">Service List</HeadTitle>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="list-decimal list-inside grid gap-[5px]">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceListPage;
