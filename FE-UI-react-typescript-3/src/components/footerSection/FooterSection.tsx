const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer py-[10px] bg-[#183f41] text-white">
      <div className="container mx-auto">
        <p className="textCopyRight poppins-regular text-[#fff]">
          &copy; copyright {currentFullYear}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
