import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
type CommentData = {
  postId?: number;
  id?: number;
  name: string;
  email: string;
  body: string;
};

const fetchComment = async (id: string): Promise<CommentData> => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_API_JSONPLACEHOLDER}/comments/${id}`
  );
  if (!res.ok) throw new Error("Service not found");
  return res.json();
};
const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: comment,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comment-detail", id],
    queryFn: () => fetchComment(id!),
    enabled: !!id,
  });

  if (isLoading)
    return <div className="loader">Loading service details...</div>;
  if (isError || !comment) return <p>Service not found.</p>;
  return (
    <div className="container">
      <HeadTitle className="!text-blue-700">Service Detail Page</HeadTitle>
      <h3>
        <strong>Name:</strong> {comment.name || "No name available"}
      </h3>
      <p>
        <strong>Email:</strong> {comment.email || "No email provided"}
      </p>
      <p>
        <strong>Body</strong> {comment.body || "No description available."}
      </p>

      <Link to="/services" className="text-blue-500 underline">
        ← Back to Services
      </Link>
    </div>
  );
};

export default ServiceDetailPage;
