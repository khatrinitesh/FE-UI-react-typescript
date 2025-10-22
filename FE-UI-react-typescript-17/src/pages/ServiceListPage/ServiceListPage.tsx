import type { Comment } from "../../interface";
import { useQuery } from "@tanstack/react-query";

import HeadTitle from "../../components/HeadTitle/HeadTitle";
import { getFullNameFromEmail } from "../../utils/utils";

const fetchComments = async (): Promise<Comment[]> => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_API_JSONPLACEHOLDER}/comments?_limit=10`
  );
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const ServiceList: React.FC = () => {
  const { data, isLoading, error } = useQuery<Comment[]>({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  if (isLoading) return <p>Loading services...</p>;
  if (error) return <p>Failed to load services.</p>;
  return (
    <div className="container">
      <HeadTitle className="!text-blue-700">Service List Page</HeadTitle>
      <ul>
        {data?.map((comment) => (
          <li key={comment.id}>
            <a href={`/services/${comment.id}`}>
              {comment.id}) - {comment.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
