import { blogPosts } from "../../constants/blogData";
import BlogCard from "./BlogCard";
import BlogLayout from "./BlogLayout";
import BlogSidebar from "./BlogSidebar";

const Blog = () => {
  const featuredPost = blogPosts[0];
  const posts = blogPosts.slice(1);

  return (
    <BlogLayout sidebar={<BlogSidebar />}>
      <section className="blog-featured">
        <img
          src={featuredPost.image}
          alt={featuredPost.title}
          className="blog-featured__image"
        />

        <div className="blog-featured__content">
          <span className="blog-featured__category">
            {featuredPost.category}
          </span>

          <h1 className="blog-featured__title">{featuredPost.title}</h1>

          <p className="blog-featured__description">
            {featuredPost.description}
          </p>
        </div>
      </section>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">Latest Articles</h2>

        <p className="mt-2 text-sm text-gray-500">
          Explore our latest stories and tutorials.
        </p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </BlogLayout>
  );
};

export default Blog;
