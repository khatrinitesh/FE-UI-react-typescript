import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ServiceDetailpage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["service", id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  if (error)
    return (
      <>
        <p>Error fetching service detail.</p>
      </>
    );
  return (
    <div className="container">
      <h2 className="text-[32px] font-bold italic">{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default ServiceDetailpage;
