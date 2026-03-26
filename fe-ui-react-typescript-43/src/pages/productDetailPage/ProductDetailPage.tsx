import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/UI/button/Button";
import { fetchPostById } from "../../services/api";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id!),
  });
  const btnBack = () => {
    navigate("/");
  };
  return (
    <div className="productDetail">
      <div className="container mx-auto">
        <Button onClick={btnBack}>Back</Button>
        {data?.title}
      </div>
    </div>
  );
};

export default ProductDetailPage;
