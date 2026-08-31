import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-brand" to="/">
          <span className="footer-mark">m</span>morrow
        </Link>
        <p className="footer-copy">© {new Date().getFullYear()} Morrow Studio. Made with care.</p>
        <div className="footer-links">
          <a className="footer-link" href="mailto:hello@morrow.studio">
            Email
          </a>
          <Link className="footer-link" to="/contact">
            Start a project
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
