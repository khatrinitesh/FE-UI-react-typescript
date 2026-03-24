import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Post } from "../../interface";
import { getPostById } from "../../services/postService";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    if (id) getPostById(id).then(setData);
  }, [id]);
  return (
    <div className="productDetailPage">
      <div className="container mx-auto">
        {" "}
        <h1 className="text-xl font-bold">{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
