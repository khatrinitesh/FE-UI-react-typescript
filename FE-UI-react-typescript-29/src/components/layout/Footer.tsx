const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-black py-5">
      <div className="container">&copy; copyright {currentFullYear}</div>
    </footer>
  );
};

export default Footer;
