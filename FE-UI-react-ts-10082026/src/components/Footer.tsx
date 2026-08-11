const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 px-5 py-6">
      <div className="mx-auto max-w-7xl text-center text-sm text-gray-500">
        © {currentYear} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
