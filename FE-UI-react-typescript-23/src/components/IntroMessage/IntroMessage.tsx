import type { IntroMessageProps } from "../../interface";

const IntroMessage = ({
  name,
  avatarSrc,
  children,
  showHeader = true,
}: IntroMessageProps) => {
  const shouldShowHeader = showHeader && name && avatarSrc;
  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-full max-w-3xl px-4">
        {shouldShowHeader && (
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={avatarSrc}
                alt={name}
                className="w-full h-full object-cover border-[3px] border-white rounded-full"
              />
            </div>
            <span className="text-[0.938rem] congenial-medium text-[#4c2b87]">
              {name}
            </span>
          </div>
        )}
        <div
          className="
            bg-[#6e4ca5]
            rounded-tr-[24px] rounded-tl-[4px] rounded-bl-[24px] rounded-br-[24px]
            px-6 py-4
            leading-relaxed
            shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default IntroMessage;
