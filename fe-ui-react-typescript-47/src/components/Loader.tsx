type LoaderProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Loader({ size = "md", className = "" }: LoaderProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-4",
  };

  return (
    <span
      className={`
        inline-block animate-spin rounded-full border-current border-t-transparent
        ${sizeClasses[size]}
        ${className}
      `}
    />
  );
}
