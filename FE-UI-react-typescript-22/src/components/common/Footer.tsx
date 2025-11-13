const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-black py-[10px]">
      <div className="container">
        <div className="innerFooter">
          <p className="desc text-white">&copy; {currentFullYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
