import "./Features.css";
import { featuresData } from "../../constants/featuresData";

const Features = () => {
  return (
    <section className="features">
      <h2>Our Core Features</h2>
      <div className="feature-grid">
        {featuresData.map((feature) => (
          <div key={feature.id} className="feature-card">
            <span className="icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
