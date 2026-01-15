import type { BlogPost } from "../interface";
import { useBlogStore } from "../store/useBlogStore";

const BlogCard = () => {
  const { posts } = useBlogStore();
  return (
    <>
      {" "}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Latest Blog Posts
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogLayout key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogCard;

interface Props {
  post: BlogPost;
}

const BlogLayout = ({ post }: Props) => {
  const { activePostId, setActivePost } = useBlogStore();
  return (
    <>
      {" "}
      <article
        onClick={() => setActivePost(post.id)}
        className={`
        cursor-pointer rounded-xl overflow-hidden bg-white shadow
        transition hover:shadow-lg
        ${activePostId === post.id ? "ring-2 ring-indigo-500" : ""}
      `}
      >
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-5">
          <h3 className="text-lg font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

          <div className="flex justify-between text-xs text-gray-500">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </article>
    </>
  );
};
