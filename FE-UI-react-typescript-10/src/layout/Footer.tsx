const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="bg-[var(--primarycolor)] py-[10px]">
      <div className="container mx-auto">
        <p className="desc text-white text-sm">
          &copy; copyright {currentFullYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
