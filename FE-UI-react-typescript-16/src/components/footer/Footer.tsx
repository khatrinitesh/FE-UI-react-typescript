const Footer = () => {
  const currentFullyear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      © {currentFullyear} LandingPage. All rights reserved.
    </footer>
  );
};

export default Footer;
