import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../../../utils/fetchClient";
import { Link } from "react-router-dom";

const ServiceListPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading services.</p>;

  return (
    <div className="p-6 container">
      <h1 className="text-2xl font-semibold mb-4">Service List</h1>
      <ul className="space-y-2">
        {data.slice(0, 10).map((service: any) => (
          <li key={service.id} className="p-4 border rounded hover:bg-gray-50">
            <Link
              to={`/services/${service.id}`} // <-- make sure this uses actual id
              className="text-blue-600 font-medium hover:underline"
            >
              {service.name}
            </Link>

            <p className="text-sm text-gray-600">{service.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceListPage;
