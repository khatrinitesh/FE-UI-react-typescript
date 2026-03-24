const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footerSection py-5 bg-black">
      <div className="container mx-auto">
        <p className="txtCopyright text-white">
          {currentFullYear} All copyright
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
