import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ServiceListPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading services.</p>;
  return (
    <div className="container">
      <ul>
        {data.map((service: any) => (
          <>
            <li key={service.id}>
              <Link to={`/services/${service.id}`}>{service.title}</Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ServiceListPage;
