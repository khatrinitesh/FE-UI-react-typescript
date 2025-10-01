import type { IHeaderProps } from "../../interface";
import TopNav from "./TopNav";

const HeaderSection = ({ className }: IHeaderProps) => {
  return (
    <header className={`${className} header bg-black py-[20px]`}>
      <div className="container mx-auto">
        <div className="innerHeader flex items-center justify-between">
          <div className="logoBlock text-white">Logo</div>
          <TopNav />
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="text-sm text-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
