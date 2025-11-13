const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer py-[10px] bg-black">
      <div className="container mx-auto">
        <p className="text-white">&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
