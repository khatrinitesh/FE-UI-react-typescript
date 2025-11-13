import SocialMedia from "../../components/SocialMedia/SocialMedia";
import "./style.css";

const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-[#205f15]  py-[10px]">
      <div className="container">
        <div className="innerFooter flex items-center justify-between">
          <p className="txtDescription text-white font-bold text-[14px]">
            &copy; {currentFullYear} Copyright All rights reserved
          </p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
