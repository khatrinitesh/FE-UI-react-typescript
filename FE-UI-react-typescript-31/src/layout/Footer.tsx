const Footer = () => {
  return (
    <footer className="footer bg-black py-5">
      <div className="container mx-auto">
        <div className="innerFooter">
          <p className="txtCopy text-white">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
