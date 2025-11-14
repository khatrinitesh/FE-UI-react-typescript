import type { InfoBannerProps } from "../../interface";

const InfoBanner = ({
  children,
  className = "",
  showIcon = true,
}: InfoBannerProps) => {
  return (
    <div
      className={`
        w-full
        rounded-[16px]
        bg-[#eee7fa]
        px-4 py-3
        flex items-start gap-3
        ${className}
      `}
    >
      {showIcon && (
        <div
          className="
            mt-[2px]
            flex items-center justify-center
            w-5 h-5
            rounded-full
            bg-[#744fa1]
            text-white
            text-xs 
            shrink-0
          "
        >
          i
        </div>
      )}

      <div className="content">{children}</div>
    </div>
  );
};

export default InfoBanner;
