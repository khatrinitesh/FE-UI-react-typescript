import type { ReactNode } from "react";

interface ImageButtonProps {
  image: string;
  alt?: string;
  buttonText?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
  children?: ReactNode;
}

const ImageButton = ({
  image,
  alt = "",
  buttonText = "View More",
  onClick,
  href,
  target,
  className = "",
  children,
}: ImageButtonProps) => {
  const label = children ?? buttonText;

  return (
    <div className={`image-button relative overflow-hidden rounded-xl ${className}`}>
      <img src={image} alt={alt} className="h-full w-full object-cover" />

      {href ? (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noreferrer" : undefined}
          onClick={onClick}
          className="image-button__button absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          {label}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="image-button__button absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default ImageButton;