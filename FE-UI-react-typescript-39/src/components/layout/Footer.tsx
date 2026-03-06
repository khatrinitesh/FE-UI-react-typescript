const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footerSection fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-4 mt-auto">
      &copy; {currentFullYear} All rights reserved.
    </footer>
  );
};

export default Footer;
