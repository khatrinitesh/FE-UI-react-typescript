const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer py-5 bg-black">
      <div className="container mx-auto">
        <p className="desc text-white text-center">
          &copy; {currentFullYear} All copyright reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
