import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchComments } from "../../../utils/fetchClient";

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const btnBack = () => {
    navigate("/services");
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["comment", id],
    queryFn: async () => {
      const comments = await fetchComments();
      return comments.find((item: any) => item.id === Number(id)); // correct equality
    },
    enabled: !!id, // run only if id exists
  });

  if (isLoading) return <p className="p-6">Loading Service details...</p>;
  if (error) return <p className="p-6">Service not found.</p>;
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        className="cursor-pointer bg-orange-600 text-white px-[10px]"
        onClick={btnBack}
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Service Detail</h1>
      <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
      <p className="text-gray-700">{data.body}</p>
      <p className="mt-4 text-sm text-gray-500">Service ID: {data.id}</p>
    </div>
  );
};

export default ServiceDetailPage;
