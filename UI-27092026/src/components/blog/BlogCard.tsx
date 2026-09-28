import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "../../constants/blogData";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="blog-card">
      <div className="blog-card__image-wrapper">
        <img src={post.image} alt={post.title} className="blog-card__image" />
      </div>

      <div className="blog-card__body">
        <span className="blog-card__category">{post.category}</span>

        <h2 className="blog-card__title">{post.title}</h2>

        <p className="blog-card__description">{post.description}</p>

        <div className="blog-card__footer">
          <div>
            <p className="blog-card__author">{post.author}</p>

            <p className="blog-card__meta">
              {post.date} · {post.readTime}
            </p>
          </div>

          <button className="blog-card__arrow">
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
