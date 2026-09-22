import { useState } from "react";

type AvatarImageProps = { src: string; alt?: string; fallback?: string; size?: "sm" | "md" | "lg" | "xl"; className?: string };

export function AvatarImage({ src, alt = "Avatar", fallback = "/images/avatar-placeholder.png", size = "md", className = "" }: AvatarImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const sizes = { sm: "size-8", md: "size-10", lg: "size-12", xl: "size-16" };

  return <img src={imageSrc} alt={alt} onError={() => setImageSrc(fallback)} className={`${sizes[size]} shrink-0 rounded-full object-cover ${className}`} />;
}
