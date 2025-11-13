import "./About.css";
import { IMAGE_BASE_URL } from "../../constants/imageBasePath";

const About = () => (
  <section className="about">
    <div className="about-content">
      <h2>About Our Company</h2>
      <p>
        We are passionate about delivering cutting-edge technology and business
        solutions that help organizations thrive in the digital era.
      </p>
      <button className="btn-primary">Learn More</button>
    </div>
    <div className="about-image">
      <img src={`${IMAGE_BASE_URL}/img/about-us.jpg`} alt="About Us" />
    </div>
  </section>
);

export default About;
