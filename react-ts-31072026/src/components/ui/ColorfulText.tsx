type ColorfulTextProps = {
  text?: string;
  animated?: boolean;
  className?: string;
};

export default function ColorfulText({
  text = "Colorful Text",
  animated = true,
  className = "",
}: ColorfulTextProps) {
  return (
    <h1
      className={`
        bg-linear-to-r
        from-primary
        via-purple-500
        to-pink-500
        bg-clip-text
        font-arialnb
        text-48
        font-bold
        leading-tight
        text-transparent
        ${animated ? "animate-colorful-text" : ""}
        ${className}
      `}
    >
      {text}
    </h1>
  );
}
