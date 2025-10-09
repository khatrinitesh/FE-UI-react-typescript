import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyBrand</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button className="btn-primary">Get Started</button>
    </header>
  );
};

export default Header;
