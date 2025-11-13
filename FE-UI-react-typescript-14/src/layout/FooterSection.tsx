import type { IFooterProps } from "../interface";

const FooterSection = ({ className }: IFooterProps) => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className={`${className} footer bg-black py-[20px]`}>
      <div className="container mx-auto">
        <div className="innerContent">
          <p className="desc text-white">&copy; {currentFullYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
