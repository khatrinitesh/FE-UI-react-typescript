const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-black py-[20px]">
      <div className="container mx-auto">
        <p className="text-white">&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
