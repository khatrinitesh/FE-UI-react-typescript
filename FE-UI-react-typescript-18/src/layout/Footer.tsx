const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-black py-[10px]">
      <div className="container">
        <p className="text-white">&copy; {currentFullYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
