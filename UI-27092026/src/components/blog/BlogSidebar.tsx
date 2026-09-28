const categories = [
  "All Posts",
  "Development",
  "Design",
  "TypeScript",
  "Frontend",
  "Career",
];

export default function BlogSidebar() {
  return (
    <aside className="blog-sidebar">
      <h3 className="blog-sidebar__title">Categories</h3>

      <div className="blog-sidebar__categories">
        {categories.map((category) => (
          <button key={category} className="blog-sidebar__category">
            {category}
          </button>
        ))}
      </div>

      <div className="blog-sidebar__newsletter">
        <h3>Subscribe</h3>

        <p>Get the latest articles directly in your inbox.</p>

        <input
          type="email"
          placeholder="Your email"
          className="blog-sidebar__input"
        />

        <button className="blog-sidebar__button">Subscribe</button>
      </div>
    </aside>
  );
}
