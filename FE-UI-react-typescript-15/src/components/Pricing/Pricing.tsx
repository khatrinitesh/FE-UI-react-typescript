import "./Pricing.css";
import { pricingData } from "../../constants/pricingData";

const Pricing = () => (
  <section className="pricing">
    <h2>Our Pricing Plans</h2>
    <div className="pricing-grid">
      {pricingData.map((plan) => (
        <div key={plan.id} className="pricing-card">
          <h3>{plan.title}</h3>
          <p className="price">{plan.price}</p>
          <ul>
            {plan.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <button className="btn-primary">Choose Plan</button>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
