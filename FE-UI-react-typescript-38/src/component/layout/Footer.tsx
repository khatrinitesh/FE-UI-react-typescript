const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="bg-black bg-opacity-30 backdrop-blur-md text-center py-4 mt-12">
      <p className="text-gray-400 text-sm">
        &copy; {currentFullYear} MyApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
