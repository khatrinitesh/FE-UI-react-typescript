const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-black">
      <div className="container">
        <p className="desc text-white">Copyright {currentFullYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
