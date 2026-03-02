const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
      &copy; {currentFullYear} All rights reserved.
    </footer>
  );
};

export default Footer;
