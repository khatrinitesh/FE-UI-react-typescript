export default function CardSection() {
  return (
    <div className="card">
      <span className="card-badge">Popular</span>
      <h3 className="card-title">Card Title</h3>
      <p className="card-description">Card description goes here.</p>

      <div className="btnBlock flex gap-4">
        <button className="btn-primary">Primary</button>
        <button className="btn-secondary">Secondary</button>
      </div>
    </div>
  );
}
