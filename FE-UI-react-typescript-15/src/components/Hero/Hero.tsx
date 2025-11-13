import "./Hero.css";
import { IMAGE_BASE_URL } from "../../constants/imageBasePath";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Your Future with Confidence</h1>
        <p>
          Empower your business with innovative solutions that drive success.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={`${IMAGE_BASE_URL}/img/hero.jpg`} alt="Hero Banner" />
      </div>
    </section>
  );
};

export default Hero;
