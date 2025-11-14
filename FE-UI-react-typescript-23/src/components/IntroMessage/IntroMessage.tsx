import React, { useEffect, useState } from "react";
import type { IntroMessageProps } from "../../interface";
import LoadingDots from "../UI/LoadingDots/LoadingDots";

const IntroMessage = ({
  name,
  avatarSrc,
  children,
  showHeader = true,
  showBody = true,
  className,
}: IntroMessageProps) => {
  const shouldShowHeader = showHeader && name && avatarSrc;
  const hasChildren = React.Children.count(children) > 0;

  // internal “typing” state
  const [isLoading, setIsLoading] = useState(showBody && hasChildren);
  const [isBodyVisible, setIsBodyVisible] = useState(false);

  useEffect(() => {
    if (!showBody || !hasChildren) {
      setIsLoading(false);
      setIsBodyVisible(false);
      return;
    }

    // start with loading dots
    setIsLoading(true);
    setIsBodyVisible(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsBodyVisible(true);
    }, 1200); // ms – change if you want longer/shorter “typing…”

    return () => clearTimeout(timer);
  }, [showBody, hasChildren]);

  if (!shouldShowHeader && !showBody) return null;

  return (
    <div className="w-full flex">
      <div className={`${className}`}>
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

        {/* show loading dots first */}
        {isLoading && (
          <div className="mb-2">
            <LoadingDots />
          </div>
        )}

        {/* then fade-in bubble */}
        {isBodyVisible && showBody && hasChildren && (
          <div
            className={`
              intro-message-bubble
              bg-[#6e4ca5]
              rounded-tr-[24px] rounded-tl-[4px] rounded-bl-[24px] rounded-br-[24px]
              px-6 py-4
              leading-relaxed
              shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
            `}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroMessage;
