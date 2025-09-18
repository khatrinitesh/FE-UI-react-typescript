const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footerSection bg-black py-[20px]">
      <div className="container mx-auto">
        <p className="desc text-white">&copy; {currentFullYear}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
