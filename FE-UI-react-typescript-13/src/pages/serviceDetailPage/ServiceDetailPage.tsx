import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { PostDetailProps } from "../../interface";
import { fetchPostById } from "../../apiService/api";
import ButtonSection from "../../components/buttonSection/ButtonSection";

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetailProps | null>(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (id) {
      fetchPostById(id)
        .then(setPost)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found.</p>;
  return (
    <div className="service-detail container spacingContent">
      <ButtonSection text="Back" onClick={handleBack} />
      <h1 className="text-[30px] font-bold">{post.title}</h1>
      <p className="text-[16px]">{post.body}</p>
    </div>
  );
};

export default ServiceDetailPage;
