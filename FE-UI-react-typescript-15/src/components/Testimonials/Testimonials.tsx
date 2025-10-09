import "./Testimonials.css";
import { testimonialsData } from "../../constants/testimonialsData";

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Clients Say</h2>
    <div className="testimonial-grid">
      {testimonialsData.map((item) => (
        <div key={item.id} className="testimonial-card">
          <img src={item.avatar} alt={item.name} />
          <p>"{item.feedback}"</p>
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
