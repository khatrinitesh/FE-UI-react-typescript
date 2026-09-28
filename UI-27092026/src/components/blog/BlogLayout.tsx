import type { ReactNode } from "react";
import "./Blog.css";

interface BlogLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

const BlogLayout = ({ children, sidebar }: BlogLayoutProps) => {
  return (
    <div className="blog-layout">
      <header className="blog-header">
        <div className="blog-header__inner">
          <a href="/" className="blog-header__logo">
            MyBlog
          </a>

          <nav className="blog-header__nav">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <button className="blog-header__button">Subscribe</button>
        </div>
      </header>

      <main className="blog-main">
        <div className="blog-main__content">{children}</div>

        {sidebar && <div className="blog-main__sidebar">{sidebar}</div>}
      </main>

      <footer className="blog-footer">
        <p>© 2026 MyBlog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogLayout;
