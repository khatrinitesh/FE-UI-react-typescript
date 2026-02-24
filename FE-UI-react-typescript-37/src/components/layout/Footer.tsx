const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer py-2 bg-black  text-center">
      <p className="text-white">© {currentFullYear} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
