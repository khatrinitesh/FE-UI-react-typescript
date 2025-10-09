import { IMAGE_BASE_URL } from "../../constants/imageBasePath";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      <img src={`${IMAGE_BASE_URL}/img/logo-footer.png`} alt="Logo" />
      <p>© 2025 Your Company. All rights reserved.</p>
    </div>

    <div className="footer-socials">
      <a href="#">
        <img src={`${IMAGE_BASE_URL}/img/icons/facebook.png`} alt="Facebook" />
      </a>
      <a href="#">
        <img src={`${IMAGE_BASE_URL}/img/icons/twitter.png`} alt="Twitter" />
      </a>
      <a href="#">
        <img src={`${IMAGE_BASE_URL}/img/icons/linkedin.png`} alt="LinkedIn" />
      </a>
    </div>
  </footer>
);

export default Footer;
